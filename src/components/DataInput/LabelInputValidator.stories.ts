import type { Meta, StoryObj } from "@storybook/vue3";
import LabelInputValidator from "@/components/DataInput/LabelInputValidator.vue";
import UserIcon from "../Icons/UserIcon.vue";

const meta: Meta<typeof LabelInputValidator> = {
  title: "Components/DataInput/LabelInputValidator",
  component: LabelInputValidator,
  argTypes: {},
};

export default meta;

// Username text input with icon and validator
const UserNameTextInputWithIconAndValidatorTplStr = `
<LabelInputValidator 
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
</LabelInputValidator>
`;

// USERNAME TEXT INPUT WITH ICON AND VALIDATOR
const UserNameTextInputWithIconAndValidatorTemplate: StoryObj = {
  render: (args) => ({
    components: { LabelInputValidator, UserIcon },
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
