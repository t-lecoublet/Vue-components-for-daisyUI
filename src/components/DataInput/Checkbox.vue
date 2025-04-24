<script setup lang="ts">
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";
import { computed, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    variant?: Variant;
    size?: Size;
  }>(),
  {
    checked: false,
    disabled: false,
    indeterminate: false,
    variant: "default",
    size: "default",
  },
);

const currentCheckbox = ref();

const { colorClass } = useVariantMapping(props, "checkbox");
const { sizeClass } = useSizeMapping(props, "checkbox");

onMounted(() => {
  if (props.indeterminate) {
    currentCheckbox.value.indeterminate = true;
  }
});
</script>

<template>
  <input
    ref="currentCheckbox"
    type="checkbox"
    :checked="checked"
    :disabled="disabled"
    :class="['checkbox', colorClass, sizeClass]"
  />
</template>
