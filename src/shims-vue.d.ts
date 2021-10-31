/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>

  export default component
}

// import { ComponentCustomProperties } from 'vue'

// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $Toast: Record<string, unknown>;
//   }
// }