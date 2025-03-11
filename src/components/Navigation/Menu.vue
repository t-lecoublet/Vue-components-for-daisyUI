<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { Size, useSizeMapping } from "@/composables/useSizeProps";

// Définition des types pour les props
const props = withDefaults(
  defineProps<{
    direction?: "default" | "vertical" | "horizontal" | "responsive";
    size?: Size;
    rounded?: boolean;
  }>(),
  {
    direction: "default",
    size: "default",
    rounded: true,
  },
);

const directionClass = computed(() => {
  return {
    default: "",
    vertical: "menu-vertical",
    horizontal: "menu-horizontal",
    responsive: "menu-vertical lg:menu-horizontal",
  }[props.direction];
});
const { sizeClass } = useSizeMapping(props, "menu");
const roundedClass = computed(() => {
  return props.rounded ? "rounded-box" : "[&_li>*]:rounded-none p-0";
});
</script>

<template>
  <ul :class="['menu bg-base-200', roundedClass, directionClass, sizeClass]">
    <slot />
  </ul>
</template>
