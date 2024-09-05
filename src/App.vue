<template>
  <component id="app-container" :is="handleLayout">
    <router-view></router-view>
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    AuthLayout,
    DashboardLayout,
  },
  computed: {
    handleLayout: function () {
      if (this.$route.meta.layout === "auth") return "auth-layout";
      else return "dashboard-layout";
    },
  },
});
</script>

<style lang="scss"></style>
