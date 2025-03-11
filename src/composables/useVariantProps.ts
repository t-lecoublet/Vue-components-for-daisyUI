import { computed } from "vue";
import { ArgTypes } from "@storybook/vue3";

export type Variant =
  | "default"
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

const badgeVariants = {
  default: "",
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  neutral: "badge-neutral",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
};
const alertVariants = {
  default: "",
  primary: "alert-primary",
  secondary: "alert-secondary",
  accent: "alert-accent",
  neutral: "alert-neutral",
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};
const btnVariants = {
  default: "",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  neutral: "btn-neutral",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
};
const textVariants = {
  default: "",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};
const linkVariants = {
  default: "",
  primary: "link-primary",
  secondary: "link-secondary",
  accent: "link-accent",
  neutral: "link-neutral",
  info: "link-info",
  success: "link-success",
  warning: "link-warning",
  error: "link-error",
};
const progressVariants = {
  default: "",
  primary: "progress-primary",
  secondary: "progress-secondary",
  accent: "progress-accent",
  neutral: "progress-neutral",
  info: "progress-info",
  success: "progress-success",
  warning: "progress-warning",
  error: "progress-error",
};
const tooltipVariants = {
  default: "",
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  neutral: "tooltip-neutral",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error",
};
const selectVariants = {
  default: "",
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  neutral: "select-neutral",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
};
const inputVariants = {
  default: "",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  neutral: "input-neutral",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};
const statusVariants = {
  default: "",
  primary: "status-primary",
  secondary: "status-secondary",
  accent: "status-accent",
  neutral: "status-neutral",
  info: "status-info",
  success: "status-success",
  warning: "status-warning",
  error: "status-error",
};

export function useVariantMapping(props: { variant: Variant }, suffix: string) {
  const colorClass = computed(() => {
    return suffix + "-" + props.variant;
  });
  return { colorClass };
}

export const useVariantStoriesControl: ArgTypes = {
  variant: {
    control: { type: "select" },
    options: [
      "default",
      "primary",
      "secondary",
      "accent",
      "neutral",
      "info",
      "success",
      "warning",
      "error",
    ],
  },
};
