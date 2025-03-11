<script setup lang="ts">
// Définition des types pour les props
import { computed } from "vue";
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";

const props = withDefaults(
  defineProps<{
    ghost?: boolean;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
  }>(),
  {
    ghost: false,
    variant: "default",
    size: "default",
    disabled: false,
  },
);

const ghostClass = computed(() => (props.ghost ? "select-ghost" : ""));
const { colorClass } = useVariantMapping(props, "select");
const { sizeClass } = useSizeMapping(props, "select");
</script>

<template>
  <select
    :disabled="disabled"
    :class="['select', ghostClass, colorClass, sizeClass]"
  >
    <slot />
  </select>
</template>
