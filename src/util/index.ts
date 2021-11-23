// 工具类

import { createDecorator } from "vue-class-component";

export const Log = createDecorator((options, key) => {
  const originalMethod = options.methods[key];
  options.methods[key] = function(...args: any) {
    console.log(`createDecorator+${options.methods[key]}+${args}`);
    originalMethod.apply(this, args);
  };
});
