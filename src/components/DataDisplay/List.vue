<script setup lang="ts">
const props = defineProps<{
    class?: string;
}>();
</script>

<template>
  <ul :class="['list', props.class]">
    <slot></slot>
  </ul>
</template> 