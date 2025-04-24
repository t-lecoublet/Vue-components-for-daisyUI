<script setup lang="ts">
import { computed, provide } from "vue";
import Button from "@/components/Actions/Button.vue";
import { type Variant } from "@/composables/useVariantProps";
import { type Size } from "@/composables/useSizeProps";

interface FilterItem {
  title?: string;
  checked?: boolean;
  customClass?: string;
  buttonsArgs?: {
    variant?: Variant;
    size?: Size;
    outline?: boolean;
    soft?: boolean;
    dash?: boolean;
    active?: boolean;
    ghost?: boolean;
    link?: boolean;
    wide?: boolean;
    disabled?: boolean;
    square?: boolean;
    circle?: boolean;
  };
}

const props = withDefaults(
  defineProps<{
    items?: FilterItem[];
    name?: string;
    buttonsArgs?: {
      variant?: Variant;
      size?: Size;
      outline?: boolean;
      soft?: boolean;
      dash?: boolean;
      active?: boolean;
      ghost?: boolean;
      link?: boolean;
      wide?: boolean;
      disabled?: boolean;
      square?: boolean;
      circle?: boolean;
    };
  }>(),
  {
    items: undefined,
    name: undefined,
    modifier: undefined,
    customClass: "",
    buttonsArgs: undefined,
  },
);

const filterName = computed(() => {
  return props.name || `filter-${Math.random().toString(36).substring(2, 9)}`;
});

provide("filterName", filterName);
</script>

<template>
  <div class="filter">
    <Button
      customClass="btn filter-reset"
      v-bind="props.buttonsArgs"
      :checked="true"
      label="All"
    />

    <!-- Dynamic items mode -->
    <template v-if="items">
      <Button
        v-for="(item, index) in items"
        :key="index"
        v-bind="props.buttonsArgs || item.buttonsArgs"
        :class="[item.customClass]"
        :checked="item.checked"
        :aria-label="item.title"
      />
    </template>

    <!-- Manual mode -->
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
