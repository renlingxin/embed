<template>
  <div :class="['ren-toast', classType]">
    <div class="ren-toast--content">{{ message }}</div>
    <i class="ren-toast--close" @click="close"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStringProp, TToast } from "./types";

const toastProps = {
  message: String, // 提示内容
  onClose: Function, // 关闭
  type: useStringProp<TToast>("success"), // 类型
};

export default defineComponent({
  props: toastProps,
  setup(props) {
    /**
     * toastShow 内部状态待定
     */
    // let toastShow = ref(props.show);
    const classType = `ren-toast__${props.type}`;

    const close = () => {
      props.onClose && props.onClose();
    };
    return {
      classType,
      // toastShow,
      close,
    };
  },
});
</script>

<style lang="less">
.ren-toast {
  border-radius: 10px;
  text-align: center;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 40px;
  &__success {
    background-color: #f0f9eb;
    color: #67c23a;
  }
  &__error {
    background-color: #fef0f0;
    color: #f56c6c;
  }
  &__warn {
    background-color: #fdf6ec;
    color: #e6a23c;
  }
  &--content {
    margin: 0px 25px 0 15px;
  }
  &--close {
    width: 10px;
    height: 10px;
    color: #c0c4cc;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
  &--close::before,
  &--close::after {
    content: "";
    position: absolute;
    top: 0;
    right: 8px;
    width: 1px;
    height: 13px;
    background-color: #c0c4cc;
  }
  &--close::before {
    transform: rotate(45deg);
  }
  &--close::after {
    transform: rotate(-45deg);
  }
}
</style>
