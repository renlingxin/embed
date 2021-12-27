<template>
  <div>
    <button>{{ text }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const IProps = {
  type: String,
  text: String,
};
export default defineComponent({
  name: "ren-button",
  props: IProps,
  setup(props) {
    const { type, text } = props;
    const classType = `ren-button__${type}`;
    return {
      text,
      classType,
    };
  },
});
</script>

<style lang="less">
.ren-button {
  &__b {
  }
}
</style>
