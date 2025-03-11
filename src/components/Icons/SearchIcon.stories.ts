import type { Meta, StoryObj } from "@storybook/vue3";
import SearchIcon from "@/components/Icons/SearchIcon.vue";

const meta: Meta<typeof SearchIcon> = {
  title: "Components/Icons/SearchIcon",
  component: SearchIcon,
};

export default meta;
export const Default = { ...SearchIcon };
