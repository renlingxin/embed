import { createApp, reactive, getCurrentInstance, h } from "vue";
import ToastCom from "./toast.vue";

interface OptionType {
  message?: String | any;
}

const stack: Array<Function> = [];
// 挂载Dom节点
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

// 运行函数
export function Toast(option: OptionType) {
  const { install, unInstall } = mounteComponent({
    setup() {
      const render = () => {
        const attrs = {
          onClose: unInstall
        }
        return <ToastCom {...option} {...attrs}/>;
      };
      (getCurrentInstance() as any).render = render;
      // return () => h(ToastCom, option);
    },
  });
  install();
  stack.push(unInstall);
  return () => {
    unInstall();
  };
}

// 全局关闭 - 依次关闭
Toast.close = function() {
  if (stack.length) {
    const last = stack.pop();
    last && last();
  }
};

// 全局挂载
export default {
  install: (app: any) => {
    app.config.globalProperties.$Toast = Toast;
  },
};
