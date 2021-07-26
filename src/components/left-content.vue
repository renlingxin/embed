<template>
  <div class="left">
    <div class="left-banner">banner</div>
    <div class="left-poster">宣传图</div>
    <div class="left-info">基本信息</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="less">
.left {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color: aliceblue;
  &-banner {
    margin-top: 30px;
    width: 80%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: silver;
  }
  &-poster{
    width: 90%;
    height: 200px;
    margin-top: 40px;
    background-color: rgb(105, 105, 105);
  }
  &-info{
    width: 90%;
    height: 200px;
    margin-top: 40px;
    background-color: rgb(105, 105, 105); 
  }
}
</style>
