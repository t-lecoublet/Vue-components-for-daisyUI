<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";

// Définition des types pour les props
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
    square: false,
    circle: false,
    block: false,
  },
);
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
  <a
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
  </a>
</template>
