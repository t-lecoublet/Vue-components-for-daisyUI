import type { Meta, StoryObj } from "@storybook/vue3";
import DuLabelInputValidator from "./du-label-input-validator.vue";
// Pour l'exemple, nous utilisons une icône temporaire puisque nous n'avons pas encore transformé toutes les icônes
import UserIcon from "../../../../src/components/Icons/UserIcon.vue";

const meta: Meta<typeof DuLabelInputValidator> = {
  title: "Components/DataInput/DuLabelInputValidator",
  component: DuLabelInputValidator,
  argTypes: {},
};

export default meta;

// Username text input with icon and validator
const UserNameTextInputWithIconAndValidatorTplStr = `
<DuLabelInputValidator 
  v-bind="args" 
  type="input" 
  pattern="[A-Za-z][A-Za-z0-9\\-]*"
  minlength="3"
  maxlength="30"
  placeholder="Username"
  required
  title="Only letters, numbers or dash"
>
  <template #before>
    <UserIcon class="h-[1em] opacity-50" />
  </template>
  <template #hint>
    Must be 3 to 30 characters
    <br/>containing only letters, numbers or dash
  </template>
</DuLabelInputValidator>
`;

// USERNAME TEXT INPUT WITH ICON AND VALIDATOR
const UserNameTextInputWithIconAndValidatorTemplate: StoryObj = {
  render: (args: any) => ({
    components: { DuLabelInputValidator, UserIcon },
    setup() {
      return { args };
    },
    template: UserNameTextInputWithIconAndValidatorTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const UserNameTextInputWithIconAndValidator = {
  ...UserNameTextInputWithIconAndValidatorTemplate,
}; 