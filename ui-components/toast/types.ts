import type { PropType } from 'vue';

export interface OptionType {
  message: string;
  type: TToast;
  duration: number
}
export type TToast = 'success' | 'error' | 'warn';

export const useStringProp  = <T>(defaultVal :T) => ({
  type: String as unknown as PropType<T>,
  default: defaultVal
})