<template>
  <div
    class="row justify-center"
    style="height: 40px; margin-top: 80px; padding: 0 30px"
  >
    <div class="line col" />
    <div class="text-h6 q-ml-md q-mr-md">
      {{ title }}
    </div>
    <div class="line col" />
  </div>
</template>

<script>
export default {
  name: "Divider",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.line {
  height: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: gray;
}
</style>
