<template>
  <div class="home">
    <!-- 左侧区域 -->
    <div class="home-left"></div>
    <!-- 右侧区域 -->
    <div class="home-right"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  &-left{

  }
  &-right{

  }
}

</style>
