<template>
  <q-page style="text-align: -webkit-center">
    <home class="home" />
  </q-page>
</template>

<script>
import Home from "src/pages/home/Home.vue";
export default {
  name: "PageIndex",
  components: { Home },
};
</script>
<style>
.home {
  max-width: 1000px;
}
</style>
