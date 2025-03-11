<script setup lang="ts">
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";

// Définition des types pour les props
const props = withDefaults(
  defineProps<{
    value?: number;
    max?: number;
    indeterminate?: boolean;
    variant?: Variant;
  }>(),
  {
    variant: "default",
    value: 0,
    max: 100,
    indeterminate: false,
  },
);
const { colorClass } = useVariantMapping(props, "progress");
</script>

<template>
  <progress
    :class="['progress', 'w-56', colorClass]"
    :value="!indeterminate ? value : undefined"
    :max="!indeterminate ? max : undefined"
  ></progress>
</template>
