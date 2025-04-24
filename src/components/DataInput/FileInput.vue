<script setup lang="ts">
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    variant?: Variant;
    size?: Size;
    ghost?: boolean;
  }>(),
  {
    disabled: false,
    variant: "default",
    size: "default",
    ghost: false,
  },
);

const ghostClass = computed(() => {
  return props.ghost ? "file-input-ghost" : "";
});

const { colorClass } = useVariantMapping(props, "file-input");
const { sizeClass } = useSizeMapping(props, "file-input");
</script>

<template>
  <input
    type="file"
    :disabled="disabled"
    :class="['file-input', colorClass, sizeClass, ghostClass]"
  />
</template>
