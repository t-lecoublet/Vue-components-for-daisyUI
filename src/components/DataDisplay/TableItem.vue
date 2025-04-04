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
  <th
    v-if="isHeader"
    :class="customClass"
    :colspan="colspan"
    :rowspan="rowspan"
  >
    <slot></slot>
  </th>
  <td v-else :class="customClass" :colspan="colspan" :rowspan="rowspan">
    <slot></slot>
  </td>
</template>
