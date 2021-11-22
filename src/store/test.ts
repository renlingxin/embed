import { VuexModule, Action, Module, Mutation } from "vuex-module-decorators";
@Module({
  name: "indexModule",
  namespaced: true,
  stateFactory: true,
})
export class indexModule extends VuexModule {
  public test: string = "";

  @Mutation
  public setTest(payload: string) {
    this.test = payload;
  }
}
