import { createStore } from "vuex";

import { indexModule } from "./test";
export default createStore({
  modules: {
    indexModule,
  },
});
