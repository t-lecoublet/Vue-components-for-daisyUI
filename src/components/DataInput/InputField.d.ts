import type { Size } from "@/composables/useSizeProps";
import type { Variant } from "@/composables/useVariantProps";

export type InputFieldType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "datetime-local"
  | "week"
  | "month"
  | "tel"
  | "url"
  | "search"
  | "time";

export type InputFieldValidatorProps = {
  pattern?: string;
  minlength?: number;
  maxlength?: number;
  title?: string;
};

export type InputFieldProps = {
  type?: InputFieldType;
  placeholder?: string;
  size?: Size;
  ghost?: boolean;
  variant?: Variant;
  disabled?: boolean;
  suggestionName?: string;
  suggestionList?: string[];
  required?: boolean;
} & InputFieldValidatorProps;
