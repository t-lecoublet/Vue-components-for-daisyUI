<script lang="ts">
import type { LabelProps } from "@/components/DataInput/Label.vue";
import type {
  InputFieldProps,
  InputFieldType,
} from "@/components/DataInput/InputField.vue";

export type LabelInputValidatorProps = {
  pattern?: string;
  minlength?: number;
  maxlength?: number;
  title?: string;
  required?: boolean;
  inputType?: InputFieldType;
} & LabelProps &
  Omit<InputFieldProps, "type" | "size" | "ghost" | "variant">;
</script>

<script setup lang="ts">
import { useSlots } from "vue";
import InputField from "@/components/DataInput/InputField.vue";
import Label from "@/components/DataInput/Label.vue";
const slots = useSlots();

// Définition des types pour les props
const props = withDefaults(defineProps<LabelInputValidatorProps>(), {
  type: "floating-label",
  pattern: "[A-Za-z][A-Za-z0-9\-]*",
  required: false,
  placeholder: "",
  inputType: "text",
  disabled: false,
});
</script>

<template>
  <Label :class="[type, 'validator']">
    <slot name="before"></slot>
    <InputField
      :required="required"
      :pattern="pattern"
      :minlength="minlength"
      :maxlength="maxlength"
      :title="title"
      :type="inputType"
      :placeholder="placeholder"
      :disabled="disabled"
      :suggestionName="suggestionName"
      :suggestionList="suggestionList"
    />
    <slot name="after"></slot>
  </Label>
  <p class="validator-hint" v-if="slots.hint">
    <slot name="hint"></slot>
  </p>
</template>
