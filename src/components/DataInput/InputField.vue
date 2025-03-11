<script setup lang="ts">
// Définition des types pour les props
import { useSizeMapping } from "@/composables/useSizeProps";
import { useVariantMapping } from "@/composables/useVariantProps";
import { computed } from "vue";
import { InputFieldProps } from "@/components/DataInput/InputField.d";

const props = withDefaults(defineProps<InputFieldProps>(), {
  placeholder: "",
  type: "text",
  size: "default",
  ghost: false,
  variant: "default",
  disabled: false,
  required: false,
});
const { colorClass } = useVariantMapping(props, "input");
const { sizeClass } = useSizeMapping(props, "input");
const ghostClass = computed(() => (props.ghost ? "input-ghost" : ""));
</script>

<template>
  <input
    :disabled="disabled"
    :type="type"
    :placeholder="placeholder"
    :class="['input', colorClass, sizeClass, ghostClass]"
    :list="suggestionName"
    :required="required"
    :pattern="pattern"
    :minlength="minlength"
    :maxlength="maxlength"
    :title="title"
  />
  <datalist v-if="suggestionName" :id="suggestionName">
    <option v-for="suggestion in suggestionList" :key="suggestion">
      {{ suggestion }}
    </option>
  </datalist>
</template>
