<script setup lang="ts">
import { type Size, useSizeMapping } from "@/composables/useSizeProps";

// Définition des types pour les props
const props = withDefaults(
  defineProps<{
    size?: Size;
  }>(),
  {
    size: "default",
  },
);

const { sizeClass } = useSizeMapping(props, "badge");
</script>

<template>
  <kbd :class="['kbd', sizeClass]">
    <slot></slot>
  </kbd>
</template>
