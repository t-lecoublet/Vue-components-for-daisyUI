<script setup lang="ts">
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { computed } from "vue";

// Définition des types pour les props
const props = withDefaults(
  defineProps<{
    variant?: Variant;
    onlyUnderlineOnHover?: boolean;
    ghost?: boolean;
  }>(),
  {
    variant: "default",
    onlyUnderlineOnHover: false,
    ghost: false,
  },
);
const { colorClass } = useVariantMapping(props, "link");
const hoverClass = computed(() => {
  return props.onlyUnderlineOnHover ? "link-hover" : "";
});
const ghostClass = computed(() => {
  return props.ghost ? "link-ghost" : "";
});
</script>

<template>
  <a :class="['link', colorClass, hoverClass, ghostClass]"><slot /></a>
</template>
