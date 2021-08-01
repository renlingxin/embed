<template>
  <div class="preview">
    <!-- <div class="preview-top"> -->
    <!-- 操作区域 -->
    <ul :class="{ active: activeShow, 'preview-make': true }">
      <li>后退</li>
      <li>前进</li>
    </ul>
    <!-- </div> -->
    <!-- 内容区域 -->
    <div class="preview-view">
      <div class="preview-content" v-for="item in contentArr" :key="item.id">
        {{ item.name }}
      </div>
    </div>
    <!-- 操作按钮 -->
    <div class="button-make">
      <button @click="top">点击</button>
    </div>
    <!-- <div class="button-content">
      点击
    </div> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {
  activeShow: boolean = false;
  contentArr: Array<object> = [
    {
      name: "1111",
      id: 1,
    },
    {
      name: "2222",
      id: 2,
    },
    {
      name: "3333",
      id: 3,
    },
  ];
  top() {
    this.activeShow = !this.activeShow;
  }
}
</script>

<style lang="less" scoped>
.preview {
  width: 100%;
  &-top {
    margin: 20px auto;
    width: 90%;
    display: flex;
    height: 60px;
    background-color: rgb(117, 117, 117);
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  &-make {
    width: 90%;
    height: 60px;
    transition: all ease-in 1s;
    background-color: red;
    border-radius: 10px;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      list-style: none;
      cursor: pointer;
    }
  }
  &-view {
    display: flex;
    flex-flow: row wrap;
  }
  &-content {
    margin: 50px auto;
    background-color: #fff;
    width: 65%;
    height: 550px;
    border: 8px solid red;
  }
}
.button {
  &-make {
    position: fixed;
    top: 20px;
    right: 0;
    button {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  // &-content {
  //   position: fixed;
  //   top: 320px;
  //   right: 50px;
  //   background-color: #fff;
  //   width: 50px;
  //   height: 50px;
  // }
}
.active {
  transform: translate(-0px, -100px);
}
</style>
