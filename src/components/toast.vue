<template>
  <div class="toast">
    toast
  </div>
</template>

<script lang='ts'>
import { onMounted, defineComponent,watch } from "vue";
import { Vue } from "vue-class-component";
export default defineComponent({
  props:{
    message: String,
    n:String
  },
  setup(props) {
    console.log(props,'33')
    // watch(()=>[props.message],()=>{console.log(props)})
  }
})
</script>

<style lang="less">
.toast {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: chocolate;
}
</style>
