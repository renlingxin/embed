import { createApp, render } from "vue";

import ToastCom from "./toast.vue";

interface OptionType {
  message?: "";
}
export function mounteComponent(ReactDom: any = ToastCom) {
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
export default function Toast(option: OptionType) {
  const { install, unInstall } = mounteComponent(ToastCom);
  install();
  return () => {
    unInstall();
  };
}
