<template>
  <div>
    <router-view></router-view>
  </div>
  <!-- <Home msg="Welcome to Your Vue.js + TypeScript App" /> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import Home from "@/pages/home/index.vue";

@Options({
  components: {
    // Home,
  },
})
export default class App extends Vue {
  created() {
    window.document.title = "项目";
  }
}
</script>

<style>
</style>
