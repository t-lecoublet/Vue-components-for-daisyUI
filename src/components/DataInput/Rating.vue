<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import { type Size, useSizeMapping } from "@/composables/useSizeProps";
import RatingItem from "./RatingItem.vue";

interface RatingItem {
  value: number;
  checked?: boolean;
}

const props = withDefaults(
  defineProps<{
    modelValue?: number;
    items?: RatingItem[];
    count?: number;
    name?: string;
    halfStar?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    size?: Size;
    shape?: "star" | "star-2" | "heart" | "circle";
    color?: string;
    customClass?: string;
  }>(),
  {
    modelValue: 0,
    items: undefined,
    count: 5,
    name: undefined,
    halfStar: false,
    clearable: false,
    disabled: false,
    size: "default",
    shape: "star-2",
    color: "bg-secondary",
    customClass: "",
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
  (e: "change", value: number): void;
}>();

const internalValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue;
  },
);

const ratingName = computed(() => {
  return props.name || `rating-${Math.random().toString(36).substring(2, 9)}`;
});

provide("ratingName", ratingName.value);

const { sizeClass } = useSizeMapping(props, "rating");

const handleChange = (value: number) => {
  if (props.disabled) {
    return;
  }
  if (value === internalValue.value && props.clearable) {
    console.log("Clearing rating");

    internalValue.value = 0;
    emit("update:modelValue", 0);
    emit("change", 0);
  } else {
    internalValue.value = value;
    emit("update:modelValue", value);
    emit("change", value);
  }
};

const ratingClass = computed(() => {
  const classes = ["rating"];
  
  if (props.halfStar) {
    classes.push("rating-half");
  }
  
  if (sizeClass.value) {
    classes.push(sizeClass.value);
  }
  
  if (props.customClass) {
    classes.push(props.customClass);
  }
  
  return classes;
});

defineExpose({
  value: computed(() => internalValue.value),
});
</script>

<template>
  <!-- Dynamic items mode -->
  <div v-if="items && !$slots.default" :class="ratingClass">
    <template v-for="(item, index) in items" :key="index">
      <RatingItem
        :value="item.value"
        :checked="internalValue === item.value"
        :shape="shape"
        :color="color"
        :half-mask="(halfStar && index % 2 === 0) ? '1' : (halfStar && index % 2 === 1) ? '2' : undefined"
        :disabled="disabled"
        @change="handleChange"
      />
    </template>
  </div>

  <!-- Auto-generated mode -->
  <div v-else-if="count > 0 && !$slots.default" :class="ratingClass">
    <template v-for="i in count" :key="i">
      <RatingItem
        v-if="halfStar"
        :value="i - 0.5"
        :checked="internalValue === i - 0.5"
        :shape="shape"
        :color="color"
        half-mask="1"
        :disabled="disabled"
        @change="handleChange"
      />

      <RatingItem
        :value="i"
        :checked="internalValue === i"
        :shape="shape"
        :color="color"
        :half-mask="halfStar ? '2' : undefined"
        :disabled="disabled"
        @change="handleChange"
      />
    </template>
  </div>

  <!-- Manual mode -->
  <div v-else :class="ratingClass">
    <slot></slot>
  </div>
</template> 