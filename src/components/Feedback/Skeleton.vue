<script setup lang="ts">
const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="['skeleton', props.class]">
    <slot></slot>
  </div>
</template>
