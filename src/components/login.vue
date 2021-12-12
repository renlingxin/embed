<template>
  <div>
    <div v-for="(item, index) in codeList" :key="index">
      <input
        type="number"
        maxlength="1"
        v-model="item.value"
        :id="`input-${index}`"
      />
    </div>
    <button @click="getValue">hhh</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {
  getValue() {
    console.log(this.codeList);
  }
  codeList = this.init();
  init() {
    const codeList = [
      {
        value: 1,
      },
      {
        value: 2,
      },
      {
        value: 2,
      },
      {
        value: 2,
      },
    ];
    const focus = (index: number) => {
      const inputDom = document.getElementById(`input-${index}`);
      inputDom?.focus();
    };
    codeList.forEach((item, index) => {
      let _target = item.value;
      Object.defineProperty(item, "value", {
        get() {
          return _target;
        },
        set(value) {
          const i = !value ? index - 1 : index + 1;
          0 < i && i < codeList.length && focus(i);
          _target = value;
        },
      });
    });
    return codeList;
  }
}
</script>

<style></style>
