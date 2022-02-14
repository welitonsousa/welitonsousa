<template>
  <q-dialog v-model="dialog">
    <q-card>
      <q-card-section>
        <div class="text-h4">{{ project.name }}</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="full-width q-mb-lg" style="text-align: -webkit-center">
          <div style="width: 50%">
            <q-img :src="project.image" fit="fill"></q-img>
          </div>
        </div>
        {{ project.description }}
        <br />
        <br />

        <div class="row">
          <div
            v-for="picture in project.screenshots"
            :key="picture"
            class="col-12 col-sm-4 q-pa-sm"
          >
            <q-img :src="picture"></q-img>
          </div>
        </div>

        <a :href="project.link" class="text-blue" target="__blank"
          >Acessar app</a
        >
      </q-card-section>
      <q-card-section>
        <q-btn label="Fechar" flat color="red" @click="dialog = false"></q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      require: true,
    },
    show: {
      type: Boolean,
      require: true,
    },
  },

  watch: {
    show: {
      handler(value) {
        this.dialog = value;
      },
    },
    dialog: {
      handler(value) {
        if (!value) {
          console.log("close");
          this.$emit("close");
        }
      },
    },
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>
