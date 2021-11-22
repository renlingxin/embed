import { createApp, reactive, getCurrentInstance, h } from "vue";
import ToastCom from "./index.vue";
import { mounteComponent } from '../utils/dom'

import { OptionType } from './types'

const stack: Array<Function> = [];


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
