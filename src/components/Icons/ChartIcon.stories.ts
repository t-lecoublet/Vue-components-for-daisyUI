import type { Meta, StoryObj } from "@storybook/vue3";
import ChartIcon from "@/components/Icons/ChartIcon.vue";

const meta: Meta<typeof ChartIcon> = {
  title: "Components/Icons/ChartIcon",
  component: ChartIcon,
};

export default meta;
export const Default = { ...ChartIcon };
