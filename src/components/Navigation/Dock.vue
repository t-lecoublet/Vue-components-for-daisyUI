<script setup lang="ts">
import { Size, useSizeMapping } from "@/composables/useSizeProps";
import { ref } from "vue";

interface DockItem {
  label?: string;
  icon?: any;
  class?: string;
  active?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

const props = withDefaults(
  defineProps<{
    size?: Size;
    items?: DockItem[];
    reverseTheme?: boolean;
  }>(),
  {
    size: "default",
    items: undefined,
    reverseTheme: false,
  },
);

const { sizeClass } = useSizeMapping(props, "dock");

const emit = defineEmits(["change"]);

const firstActiveItem = props.items?.findIndex((item) => item.active) ?? 0;
const activeItem = ref(firstActiveItem > -1 ? firstActiveItem : 0);
const selectedItem = ref(props.items?.[activeItem.value]);

const setActiveItem = (index: number) => {
  activeItem.value = index;
  selectedItem.value = props.items?.[activeItem.value];
  emit("change", selectedItem.value);
  selectedItem.value?.onClick?.();
};
const isActive = (index: number) => {
  return activeItem.value === index;
};

defineExpose({
  activeItem,
  selectedItem,
});
</script>

<template>
  <div
    :class="[
      'dock',
      sizeClass,
      reverseTheme && 'bg-neutral text-neutral-content',
    ]"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else-if="items">
      <button
        v-for="(item, index) in items"
        :key="index"
        @click="setActiveItem(index)"
        :class="[item.class, isActive(index) && 'dock-active']"
      >
        <slot name="icon" :item="item">
          <component :is="item.icon" v-if="typeof item.icon === 'object'" />
          <img
            v-else-if="
              typeof item.icon === 'string' && item.icon.startsWith('http')
            "
            :src="item.icon"
            :alt="item.label"
          />
          <div
            v-else-if="typeof item.icon === 'string'"
            v-html="item.icon"
          ></div>
        </slot>

        <span v-if="item.label || $slots.label" :class="'dock-label'">
          <slot name="label" :item="item">
            {{ item.label }}
          </slot>
        </span>
      </button>
    </template>
  </div>
</template>
