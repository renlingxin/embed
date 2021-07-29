<template>
  <div class="preview">
    <div class="preview-top">
      <div class="preview-content active"></div>
    </div>
    <div class="preview-button">
      <button @click="top">点击</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {
  top() {}
}
</script>

<style lang="less" scoped>
.preview {
  width: 100%;
  &-top {
    position: fixed;
    top: 10px;
    left: 0;
    width: 100%;
    display: flex;
    height: 60px;
    background-color: rgb(117, 117, 117);
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  &-content {
    width: 90%;
    height: 60px;
    position: absolute;
    background-color: red;
    border-radius: 10px;
  }
  &-button {
    position: fixed;
    top: 10px;
    right: 0;
  }
}
.active {
  animation: move 1s infinite;
  -webkit-animation: move 5s infinite; 
}
@keyframes move{
  0% {
    top: -0px;
  }
  100% {
    top: -100px;
  }
}
</style>
