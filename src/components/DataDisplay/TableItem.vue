<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    customClass?: string;
    isHeader?: boolean;
    colspan?: number;
    rowspan?: number;
  }>(),
  {
    customClass: "",
    isHeader: false,
    colspan: undefined,
    rowspan: undefined,
  },
);
</script>

<template>
  <component
    :is="isHeader ? 'th' : 'td'"
    :class="customClass"
    :colspan="colspan"
    :rowspan="rowspan"
  >
    <slot></slot>
  </component>
</template>
