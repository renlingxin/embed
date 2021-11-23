<template>
  <div class="home">
    <!-- 左侧区域 -->
    <div class="home-left"><LeftContent /></div>
    <!-- 右侧区域 -->
    <div class="home-right">
      <TopHeader />
      <!-- 内容区域 -->
      <div class="home-content">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="home-bottom">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LeftContent from '@/components/page/left-content.vue'
import TopHeader from '@/components/page/top-header.vue'
import { Options, Vue } from "vue-class-component";
@Options({
  components: {
    LeftContent,
    TopHeader
  },
})
export default class App extends Vue {
  setup(){
    console.log('333333')
    return {}
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  min-height: 100%;
  display: flex;
  overflow: hidden;
  &-left {
    width: 300px;
    background-color: #1e1f25;
  }
  &-right {
    width: 100%;
    height: 100%;
    background-color: #131417;
  }
  &-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    overflow-y: auto;
    margin-bottom: 50px;
    div {
      width: 45%;
      height: 400px;
      margin: 10px;
      background-color: #494B55;
    }
  }
  &-bottom{
    width: 100%;
    height: 180px;
    background-color: #010101;
  }
}
</style>
