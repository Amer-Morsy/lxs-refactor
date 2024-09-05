<template>
  <v-layout ref="app" class="rounded rounded-md">
    <v-app-bar color="grey-lighten-2" name="app-bar"> nav </v-app-bar>

    <v-navigation-drawer color="grey-darken-2" name="drawer" permanent>
      drawer
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <div class="app-layout dashboard-layout">
        <router-view></router-view>
      </div>
    </v-main>

    <v-footer name="footer" app> footer </v-footer>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardLayout",
});
</script>
