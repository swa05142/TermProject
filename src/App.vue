<template>
  <v-app>
    <v-main>
      <header1></header1>
      <router-view />
      <footer1></footer1>
    </v-main>
  </v-app>
</template>

<script>
import header1 from "../src/components/header.vue";
import footer1 from "../src/components/Footer.vue";
export default {
  components: { header1, footer1 },
};
</script>

<style>
</style>
