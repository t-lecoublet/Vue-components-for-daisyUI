<script lang="ts">
import type { Size } from "@/composables/useSizeProps";

export type LabelProps = {
  type?: "input" | "select" | "floating-label" | "fieldset-label";
};
</script>

<script setup lang="ts">
// Définition des types pour les props

const props = withDefaults(defineProps<LabelProps>(), {
  type: "input",
});
</script>

<template>
  <label :class="[type]">
    <slot />
  </label>
</template>
