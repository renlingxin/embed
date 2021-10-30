<template>
  <div class="toast">
      toast
  </div>
</template>

<script>
import { Vue } from 'vue-class-component'
export default class App extends Vue {
 setup(props){
console.log(props,'888')
 }
}
</script>

<style lang="less">
.toast{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: chocolate;
}
</style>