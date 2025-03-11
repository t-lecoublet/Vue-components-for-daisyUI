<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";

// Définition des types pour les props
const props = withDefaults(
  defineProps<{
    animation?: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
    size?: Size;
    variant?: Variant;
  }>(),
  {
    animation: "spinner",
    size: "default",
    variant: "default",
  },
);
const animationClass = computed(() => {
  return {
    spinner: "loading-spinner",
    dots: "loading-dots",
    ring: "loading-ring",
    ball: "loading-ball",
    bars: "loading-bars",
    infinity: "loading-infinity",
  }[props.animation];
});
const { sizeClass } = useSizeMapping(props, "loading");
const { colorClass } = useVariantMapping(props, "text");
</script>

<template>
  <span :class="['loading', sizeClass, animationClass, colorClass]"></span>
</template>
