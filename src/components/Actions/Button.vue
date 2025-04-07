<script setup lang="ts">
import { computed, inject } from "vue";
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";

const props = withDefaults(
  defineProps<{
    size?: Size;
    variant?: Variant;
    outline?: boolean;
    soft?: boolean;
    dash?: boolean;
    active?: boolean;
    ghost?: boolean;
    link?: boolean;
    wide?: boolean;
    disabled?: boolean;
    square?: boolean;
    circle?: boolean;
    block?: boolean;
  }>(),
  {
    size: "default",
    variant: "default",
    outline: false,
    soft: false,
    dash: false,
    active: false,
    ghost: false,
    link: false,
    wide: false,
    disabled: undefined,
    square: false,
    circle: false,
    block: false,
  },
);

const isInDropdownTrigger = inject("isDropdownTrigger", false);

const { sizeClass } = useSizeMapping(props, "btn");
const { colorClass } = useVariantMapping(props, "btn");
const softClass = computed(() => {
  return props.soft ? "btn-soft" : "";
});
const outlineClass = computed(() => {
  return props.outline ? "btn-outline" : "";
});
const dashClass = computed(() => {
  return props.dash ? "btn-dash" : "";
});
const activeClass = computed(() => {
  return props.active ? "btn-active" : "";
});
const ghostClass = computed(() => {
  return props.ghost ? "btn-ghost" : "";
});
const linkClass = computed(() => {
  return props.link ? "btn-link" : "";
});
const wideClass = computed(() => {
  return props.wide ? "btn-wide" : "";
});
const squareClass = computed(() => {
  return props.square ? "btn-square" : "";
});
const circleClass = computed(() => {
  return props.circle ? "btn-circle" : "";
});
const blockClass = computed(() => {
  return props.block ? "btn-block" : "";
});
</script>
<template>
  <component
    :is="isInDropdownTrigger ? 'div' : 'button'"
    :disabled="disabled"
    :tabindex="isInDropdownTrigger ? '0' : undefined"
    :role="isInDropdownTrigger ? 'button' : undefined"
    :class="[
      'btn',
      sizeClass,
      colorClass,
      softClass,
      outlineClass,
      dashClass,
      activeClass,
      ghostClass,
      linkClass,
      wideClass,
      squareClass,
      circleClass,
      blockClass,
    ]"
  >
    <slot></slot>
  </component>
</template>
