<template>
  <div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      :css="false"
    >
      <router-view></router-view>
    </transition>
    <Loading v-if="loadingShow" />
  </div>
</template>
<script lang="ts">
import Loading from "@/components/loading.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Loading,
  },
  data() {
    return {
      loadingShow: false,
    };
  },
  methods: {
    beforeEnter(el: any) {
      this.loadingShow = true;
      console.log(222, el);
    },
    enter(el: any, done: any) {
      setTimeout(() => {
        this.loadingShow = false;
        console.log(333, el, done);
      }, 0);
    },
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
