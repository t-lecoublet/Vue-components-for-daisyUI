export const KBD_SIZES = [
  'kbd-xs',
  'kbd-sm',
  'kbd-md',
  'kbd-lg',
  'kbd-xl',
] as const

export type KBDSize = (typeof KBD_SIZES)[number] 