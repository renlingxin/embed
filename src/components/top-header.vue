<template>
  <header class="header">
    <div class="header-seach"></div>
    <div class="header-button">
      <button @click="start">开始</button>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import Toast from "./init";
import { getModule } from "vuex-module-decorators";
import { indexModule } from "../store/test";
import { reactive } from "vue";
import { useStore } from "vuex";
export default class App extends Vue {
  setup() {
    const MyModuleInstance = getModule(indexModule, useStore());
    MyModuleInstance.setTest("renlingxin");
    console.log(MyModuleInstance.test, "MyModuleInstance");
  }
  start() {
    const state = reactive({
      // show: true,
      message: "恭喜",
      type: "error",
      duration: 2000
    });
    (this as any).$Toast(state);
    // this.$router.push({ path: "/preview" });
  }
}
</script>

<style lang="less">
.header {
  width: 100%;
  float: left;
  margin: 15px;
  &-seach {
    float: left;
    width: 85%;
    color: #fff;
    height: 45px;
    background-color: #26282f;
  }
  &-button {
    float: right;
    margin-right: 55px;
    button {
      width: 100px;
      height: 45px;
      border-radius: 5px;
      border: 0;
      background-color: #70cc7c;
      cursor: pointer;
    }
  }
}
</style>
