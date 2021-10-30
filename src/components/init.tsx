import { createApp, reactive, getCurrentInstance, h } from "vue";
import ToastCom from "./toast.vue";

interface OptionType {
  message?: String | any;
}
let closeApi:any = null

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
        return <ToastCom {...option} />;
      };
      (getCurrentInstance() as any).render = render;

      // return () => h(ToastCom, [state.message])
    },
  });
  install();
  closeApi = unInstall
  return () => {
    unInstall();
  };
}

// all关闭
Toast.close = function(){
  closeApi && closeApi()
}

// 全局挂载
export default {
  install: (app: any) => {
    app.config.globalProperties.$Toast = Toast;
  },
};
