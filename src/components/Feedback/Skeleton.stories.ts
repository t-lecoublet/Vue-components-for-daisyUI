import type { Meta, StoryObj } from "@storybook/vue3";
import Skeleton from "@/components/Feedback/Skeleton.vue";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Feedback/Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

const defaultTplStr = `
<div class="inline-flex flex-col gap-2 items-center">
  <Skeleton class="w-32 h-32" />
  <hr>
  <div class="flex w-52 flex-col gap-4">
    <div class="flex items-center gap-4">
      <Skeleton class="h-16 w-16 shrink-0 rounded-full" />
      <div class="flex flex-col gap-4">
        <Skeleton class="h-4 w-20"/>
        <Skeleton class="h-4 w-28"/>
      </div>
    </div>
    <Skeleton class="h-32 w-full" />
  </div>
  <hr>
  <div class="flex w-52 flex-col gap-4">
    <Skeleton class="h-32 w-full" />
    <Skeleton class="h-4 w-28" />
    <Skeleton class="h-4 w-full" />
    <Skeleton class="h-4 w-full" />
  </div>
</div>
`;

const TemplateSkeleton: Story = {
  render: (args: any) => ({
    components: { Skeleton },
    template: defaultTplStr,
  }),
};
export const DefaultSkeleton = { ...TemplateSkeleton };
