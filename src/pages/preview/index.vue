<template>
  <div class="preview">
    <ul :class="{ active: activeShow, 'preview-make': true }">
      <li>后退</li>
      <li @click="go">前进</li>
    </ul>
    <!-- 内容区域 -->
    <div class="preview-view">
      <div
        :class="{ 'preview-content': true, disNone: hiddenIndex === item.id }"
        v-for="item in contentArr"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div>
    <!-- 操作按钮 -->
    <div class="button-make">
      <button @click="top">点击</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  data() {},
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
  hiddenIndex: number = 3;
  top() {
    this.activeShow = !this.activeShow;
  }
  go() {
    this.hiddenIndex = this.hiddenIndex--;
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
    position: relative;
    margin: 50px auto;
    width: 65%;
    height: 550px;
    overflow: hidden;
  }
  &-content {
    position: absolute;
    background-color: #fff;
    width: 100%;
    display: block;
    height: 550px;
    // border: 8px solid red;
    transition: all ease-in 1s;
  }
}
.disNone {
  transform: translate(0, -200px);
  display: none;
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
}
.active {
  transform: translate(-0px, -100px);
}
@keyframes jump {
  0% {
    top: -100px;
  }
  100% {
    top: 0px;
  }
}
</style>
