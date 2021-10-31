<template>
  <div class="toast" v-show="toastShow">
    {{ message }}
    <div @click="onClick">点我</div>
    <div @click="close">关闭</div>
    <div v-html="Dom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    message: String,
    show: Boolean,
    onClick: Function,
    Dom: String,
    onClose: Function
  },
  setup(props) {
    console.log(props, "33");
    let toastShow = ref(props.show)
    const close = () =>{
      props.onClose && props.onClose()
      // toastShow.value = false
      console.log('close')
    }
    return {
      toastShow,
      close
    }
  },
});
</script>

<style lang="less">
.toast {
  width: 100px;
  height: 100px;
  position: fixed;
  top: 0;
  left: 50%;
  background-color: chocolate;
}
</style>
