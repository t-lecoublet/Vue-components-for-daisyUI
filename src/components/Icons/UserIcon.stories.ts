import type { Meta, StoryObj } from "@storybook/vue3";
import UserIcon from "@/components/Icons/UserIcon.vue";

const meta: Meta<typeof UserIcon> = {
  title: "Components/Icons/UserIcon",
  component: UserIcon,
};

export default meta;
export const Default = { ...UserIcon };
