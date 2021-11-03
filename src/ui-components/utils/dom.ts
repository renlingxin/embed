import { createApp } from "vue";

// 挂载Dom节点
export function mounteComponent(ReactDom: any) {
  const _t = document.createElement("div");
  document.body.appendChild(_t);
  const _toast = createApp(ReactDom);
  return {
    install: () => {
      _toast.mount(_t);
    },
    unInstall: () => {
      _toast.unmount();
      document.body.removeChild(_t);
    },
  };
}
// as const 告诉编译器 当前数组结构有且只有现状
export const pig = function() {
  const list = [1, 2] as const;
  return list;
};
