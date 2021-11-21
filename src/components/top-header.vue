<template>
  <header class="header">
    <div class="header-seach"></div>
    <div class="header-button">
      <button @click="start">开始</button>
    </div>
  </header>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
// import Toast from "./init";
import { reactive } from "vue";

export default {
  setup() {

  },
  methods:{
  start() {
    const state = reactive({
      // show: true,
      message: "恭喜",
      type:'error'
      // onClick: () => {
      //   (this as any).$Toast.close()
      // }
    });
    (this as any).$Toast(state)

    setTimeout(()=>{
      // state.show = false
      // (this as any).$Toast.close()
    },1000)
    // this.$router.push({ path: "/preview" });
  },
  }
};
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
