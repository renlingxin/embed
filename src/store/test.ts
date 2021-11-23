import { VuexModule, Action, Module, Mutation } from "vuex-module-decorators";
import store from './index'
@Module({
  name: "indexModule",
  dynamic: true,
  store,
})
export class indexModule extends VuexModule {
  public test: string = "";

  @Mutation
  public setTest(payload: string) {
    this.test = payload;
  }
}
