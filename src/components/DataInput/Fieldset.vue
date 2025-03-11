<script setup lang="ts">
// Définition des types pour les props
const props = withDefaults(
  defineProps<{
    legend: string;
    label?: string;
  }>(),
  {},
);
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">{{ legend }}</legend>
    <slot />
    <p class="fieldset-label" v-if="label">{{ label }}</p>
  </fieldset>
</template>
