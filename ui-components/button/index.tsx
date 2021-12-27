import Button from "./index.vue";

export default {
  install: (app: any) => {
      app.component(Button.name, Button)
  },
};
