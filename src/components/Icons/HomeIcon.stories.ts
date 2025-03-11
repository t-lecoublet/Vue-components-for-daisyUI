import type { Meta, StoryObj } from "@storybook/vue3";
import HomeIcon from "@/components/Icons/HomeIcon.vue";

const meta: Meta<typeof HomeIcon> = {
  title: "Components/Icons/HomeIcon",
  component: HomeIcon,
};

export default meta;
export const Default = { ...HomeIcon };
