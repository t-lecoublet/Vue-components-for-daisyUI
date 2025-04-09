<script setup lang="ts">
import { computed } from "vue";
import { Variant } from "@/composables/useVariantProps";

const props = withDefaults(
  defineProps<{
    label?: string;
    active?: boolean;
    customClass?: string;
    dataContent?: string;
    variant?: Variant;
  }>(),
  {
    label: "",
    active: false,
    customClass: "",
    dataContent: undefined,
    variant: "primary",
  },
);

const stepClass = computed(() => {
  const classes = ["step"];

  const variantClass =
    props.variant === "default" ? "" : `step-${props.variant}`;

  if (props.active && variantClass) {
    classes.push(variantClass);
  }

  if (props.customClass) {
    classes.push(props.customClass);
  }

  return classes;
});
</script>

<template>
  <li :class="stepClass" :data-content="dataContent">
    <slot name="step-icon" v-if="$slots['step-icon']">
      <span class="step-icon">
        <slot name="step-icon"></slot>
      </span>
    </slot>

    <slot>
      {{ label }}
    </slot>
  </li>
</template>
