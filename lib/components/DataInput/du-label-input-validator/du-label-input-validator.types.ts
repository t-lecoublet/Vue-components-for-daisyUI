import { type LabelProps } from "../du-label/du-label.types";
import { type InputFieldProps, type InputFieldType } from "../du-input-field/du-input-field.types";

export interface LabelInputValidatorProps extends LabelProps, 
  Omit<InputFieldProps, "type" | "size" | "ghost" | "variant"> {
  pattern?: string;
  minlength?: number;
  maxlength?: number;
  title?: string;
  required?: boolean;
  inputType?: InputFieldType;
}