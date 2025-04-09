<script lang="ts" setup>
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    as?: string;
    direction?: "horizontal" | "vertical";
  }>(),
  {
    as: "div",
    direction: undefined,
  },
);

const directionClass = computed(() => {
  switch (props.direction) {
    case "horizontal":
      return "join-horizontal";
    case "vertical":
      return "join-vertical";
    default:
      return "";
  }
});
</script>

<template>
  <component :is="as" :class="['join', directionClass]">
    <slot></slot>
  </component>
</template>
