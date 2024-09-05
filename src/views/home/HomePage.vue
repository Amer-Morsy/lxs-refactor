<template>
  <v-container class="home-component" fluid>
    <h1>Home Page</h1>
    <h3>welcome: {{ userData.name }}</h3>
  </v-container>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();
const userData = computed(() => {
  return store.getters.getUserData;
});
onMounted(() => {
  console.log(userData.value);
});
</script>

<style scoped lang="scss"></style>
