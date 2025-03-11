<script setup lang="ts">
import { computed, useSlots } from "vue";
import { type Variant, useVariantMapping } from "@/composables/useVariantProps";

const slots = useSlots();

// Définition des types pour les props
const props = withDefaults(
  defineProps<{
    variant?: Variant;
    dataTip?: string;
    open?: boolean;
    position?: "top" | "right" | "bottom" | "left";
    responsive?: boolean;
  }>(),
  {
    variant: "default",
    dataTip: "hello",
    open: false,
    position: "top",
    responsive: false,
  },
);
const openClass = computed(() => {
  return props.open ? "tooltip-open" : "";
});
const positionClass = computed(() => {
  switch (props.position) {
    case "top":
      return "tooltip-top";
    case "right":
      return "tooltip-right";
    case "bottom":
      return "tooltip-bottom";
    case "left":
      return "tooltip-left";
  }
});
const responsiveClass = computed(() => {
  return props.responsive ? "lg:tooltip" : "tooltip";
});
const { colorClass } = useVariantMapping(props, "tooltip");
</script>

<template>
  <div
    :class="[responsiveClass, openClass, positionClass, colorClass]"
    :data-tip="dataTip"
  >
    <div class="tooltip-content" v-if="slots.content">
      <slot name="content"></slot>
    </div>
    <slot />
  </div>
</template>
