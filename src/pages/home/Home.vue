<template>
  <div v-if="loading">
    <q-circular-progress indeterminate size="50px" />
  </div>
  <div v-else>
    <div class="q-pt-lg">
      <q-avatar size="1000%">
        <img :src="data.image" />
      </q-avatar>
      <div class="text-h4 q-pa-sm">{{ data.name }}</div>
      <div v-for="p in data.description" :key="p">
        <p class="q-pl-lg q-pr-lg" style="font-size: 16px">{{ p }}</p>
      </div>

      <divider title="Tecnologias" />
      <p style="font-size: 16px">Algumas tecnologias em que trabalho</p>
      <div class="row justify-center">
        <q-item
          v-for="tec in data.tecs"
          class="q-ma-sm q-pa-lg"
          clickable
          :key="tec"
          :style="`border-radius: 10px; background-color: ${tec.bg}`"
        >
          {{ tec.name }}
        </q-item>
      </div>
    </div>
    <!-- PROJECTS -->
    <divider title="Projetos" />
    <p style="font-size: 16px">
      Alguns projetos em que ja trabalhei
      <br />
      clique para ver mais detalhes do projeto
    </p>
    <div class="row justify-between">
      <div
        v-for="project in data.projects"
        :key="project"
        class="col-12 col-sm-4"
      >
        <q-item
          clickable
          @click="
            () => {
              showModal = true;
              selectedProject = project;
            }
          "
          class="bg-dark q-ma-lg q-pa-sm"
          style="border-radius: 10px"
        >
          <div class="full-width">
            <div style="height: 150px">
              <img :src="project.image" class="full-width" />
            </div>
            <div style="height: 150px">
              <div class="text-h5">{{ project.name }}</div>
              <div class="text-center">{{ project.small }}</div>
            </div>
          </div>
        </q-item>
      </div>
    </div>

    <!-- Social -->
    <divider title="Social" />
    <div class="q-pb-lg">
      <div class="row justify-center">
        <q-item
          clickable
          v-for="social in data.social"
          class="q-ma-sm q-pa-lg"
          :key="social"
          :style="`border-radius: 10px; background-color: ${social.bg}`"
          @click="openSocial(social)"
        >
          {{ social.name }}
        </q-item>
      </div>
    </div>

    <project-modal
      :show="showModal"
      :project="selectedProject"
      @close="showModal = false"
    />
  </div>
</template>

<script>
const url =
  "https://raw.githubusercontent.com/welitonsousa/welitonsousa/master/profile.json";
import axios from "axios";
import Divider from "src/components/divider.vue";
import ProjectModal from "src/pages/home/ModalProject.vue";
export default {
  components: { Divider, ProjectModal },
  data() {
    return {
      data: {},
      selectedProject: {},
      showModal: false,
      loading: false,
    };
  },
  created() {
    this.findProfileData();
  },
  methods: {
    openSocial(social) {
      if (social.link.includes("mail.com")) {
        navigator.clipboard.writeText(social.link);
        this.$q.notify({
          message: "Email copiado para area de transferência",
          color: "green",
          position: "top",
        });
      } else {
        window.open(social.link, "__blank");
      }
    },
    async findProfileData() {
      try {
        this.loading = true;
        const response = await axios.get(url);
        this.data = response.data;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
