import type { Meta, StoryObj } from "@storybook/vue3";
import DetailIcon from "@/components/Icons/DetailIcon.vue";

const meta: Meta<typeof DetailIcon> = {
  title: "Components/Icons/DetailIcon",
  component: DetailIcon,
};

export default meta;
export const Default = { ...DetailIcon };
