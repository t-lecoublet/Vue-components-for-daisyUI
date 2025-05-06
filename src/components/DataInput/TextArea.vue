<script setup lang="ts">
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    variant?: Variant;
    size?: Size;
    ghost?: boolean;
  }>(),
  {
    modelValue: "",
    placeholder: "",
    disabled: false,
    variant: "default",
    size: "default",
    ghost: false,
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const ghostClass = computed(() => (props.ghost ? "textarea-ghost" : ""));
const { colorClass } = useVariantMapping(props, "textarea");
const { sizeClass } = useSizeMapping(props, "textarea");

const handleInput = (event: Event) => {
  const value = (event.target as HTMLTextAreaElement).value;
  emit("update:modelValue", value);
};
</script>

<template>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="handleInput"
    :class="['textarea', ghostClass, colorClass, sizeClass]"
  />
</template> 