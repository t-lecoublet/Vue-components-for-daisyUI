import { computed } from "vue";
import type { ArgTypes } from "@storybook/vue3";

export type Size = "default" | "xs" | "sm" | "md" | "lg" | "xl";

const buttonSizes = {
  default: "",
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
};
const badgeSizes = {
  default: "",
  xs: "badge-xs",
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
  xl: "badge-xl",
};
const menuSizes = {
  default: "",
  xs: "menu-xs",
  sm: "menu-sm",
  md: "menu-md",
  lg: "menu-lg",
  xl: "menu-xl",
};
const kbdSizes = {
  default: "",
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: "kbd-md",
  lg: "kbd-lg",
  xl: "kbd-xl",
};
const selectSizes = {
  default: "",
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg",
  xl: "select-xl",
};
const inputSizes = {
  default: "",
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};
const statusSizes = {
  default: "",
  xs: "status-xs",
  sm: "status-sm",
  md: "status-md",
  lg: "status-lg",
  xl: "status-xl",
};
const textSizes = {};
const avatarSizes = {
  default: "size-16",
  xs: "size-8",
  sm: "size-12",
  md: "size-16",
  lg: "size-24",
  xl: "size-32",
};

export function useSizeMapping(props: { size: Size }, suffix: string) {
  if (suffix === "avatar") {
    const sizeClass = computed(() => avatarSizes[props.size]);
    return { sizeClass };
  }

  const sizeClass = computed(() => {
    return {
      default: "",
      xs: suffix + "-xs",
      sm: suffix + "-sm",
      md: suffix + "-md",
      lg: suffix + "-lg",
      xl: suffix + "-xl",
    }[props.size];
  });
  return { sizeClass };
}

export const useSizeStoriesControl: ArgTypes = {
  size: {
    control: { type: "select" },
    options: ["default", "xs", "sm", "md", "lg", "xl"],
  },
};
