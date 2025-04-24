<script setup lang="ts">
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";

const props = withDefaults(
  defineProps<{
    checked?: boolean;
    disabled?: boolean;
    variant?: Variant;
    size?: Size;
  }>(),
  {
    checked: false,
    disabled: false,
    indeterminate: false,
    variant: "default",
    size: "default",
  },
);

const { colorClass } = useVariantMapping(props, "radio");
const { sizeClass } = useSizeMapping(props, "radio");
</script>

<template>
  <input
    type="radio"
    :checked="checked"
    :disabled="disabled"
    :class="['radio', colorClass, sizeClass]"
  />
</template>
