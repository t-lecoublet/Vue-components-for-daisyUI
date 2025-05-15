import { type Variant } from "../../../composables/useVariantProps";
import { type Size } from "../../../composables/useSizeProps";

export const DU_LOADING_ANIMATIONS = ["spinner", "dots", "ring", "ball", "bars", "infinity"] as const;
export type LoadingAnimation = (typeof DU_LOADING_ANIMATIONS)[number];

export interface LoadingProps {
  animation?: LoadingAnimation;
  size?: Size;
  variant?: Variant;
} 