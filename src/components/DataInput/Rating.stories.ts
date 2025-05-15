import type { Meta, StoryObj } from "@storybook/vue3";
import Rating from "@/components/DataInput/Rating.vue";
import RatingItem from "@/components/DataInput/RatingItem.vue";
import { useSizeStoriesControl } from "@/composables/useSizeProps";
import { ref } from "vue";

const meta: Meta<typeof Rating> = {
  title: "Components/DataInput/Rating",
  component: Rating,
  argTypes: {
    ...useSizeStoriesControl,
    modelValue: { control: { type: "number" } },
    count: { control: { type: "number" } },
    halfStar: { control: "boolean" },
    clearable: { control: "boolean" },
    disabled: { control: "boolean" },
    shape: {
      control: { type: "select" },
      options: ["star", "star-2", "heart", "circle"],
    },
    color: { control: "text" },
    customClass: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

const defaultTplStr = `
  <div class="flex flex-col gap-4 w-80">
    <Rating v-bind="args" v-model="ratingValue" />
    <div class="text-center">Valeur: {{ ratingValue }}</div>
  </div>
`;

const TemplateRating: Story = {
  render: (args: any) => ({
    components: { Rating },
    setup() {
      const ratingValue = ref(args.modelValue || 0);
      return { args, ratingValue };
    },
    template: defaultTplStr,
  }),
  args: {
    modelValue: 3,
    count: 5,
    halfStar: false,
    clearable: false,
    disabled: false,
    shape: "star-2",
  },
};
export const Default = { ...TemplateRating };

const RatingSizesTplStr = `
<div class="flex flex-col gap-6 w-80">
  <div class="flex flex-col gap-2">
    <span>XS</span>
    <Rating size="xs" v-model="values.xs" />
  </div>
  <div class="flex flex-col gap-2">
    <span>SM</span>
    <Rating size="sm" v-model="values.sm" />
  </div>
  <div class="flex flex-col gap-2">
    <span>MD</span>
    <Rating size="md" v-model="values.md" />
  </div>
  <div class="flex flex-col gap-2">
    <span>LG</span>
    <Rating size="lg" v-model="values.lg" />
  </div>
  <div class="flex flex-col gap-2">
    <span>XL</span>
    <Rating size="xl" v-model="values.xl" />
  </div>
</div>
`;

const RatingSizesTemplate: Story = {
  render: () => ({
    components: { Rating },
    setup() {
      const values = ref({
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
      });
      return { values };
    },
    template: RatingSizesTplStr,
  }),
};
export const RatingSizes = { ...RatingSizesTemplate };

const RatingShapesTplStr = `
<div class="flex flex-col gap-6 w-80">
  <div class="flex flex-col gap-2">
    <span>Star</span>
    <Rating shape="star" v-model="values.star" />
  </div>
  <div class="flex flex-col gap-2">
    <span>Star-2</span>
    <Rating shape="star-2" v-model="values.star2" />
  </div>
  <div class="flex flex-col gap-2">
    <span>Heart</span>
    <Rating shape="heart" v-model="values.heart" />
  </div>
  <div class="flex flex-col gap-2">
    <span>Circle</span>
    <Rating shape="circle" v-model="values.circle" />
  </div>
</div>
`;

const RatingShapesTemplate: Story = {
  render: () => ({
    components: { Rating },
    setup() {
      const values = ref({
        star: 3,
        star2: 3,
        heart: 3,
        circle: 3,
      });
      return { values };
    },
    template: RatingShapesTplStr,
  }),
};
export const RatingShapes = { ...RatingShapesTemplate };

const RatingColorsTplStr = `
<div class="flex flex-col gap-6 w-80">
  <div class="flex flex-col gap-2">
    <span>Primary</span>
    <Rating color="bg-primary" v-model="values.primary" />
  </div>
  <div class="flex flex-col gap-2">
    <span>Secondary</span>
    <Rating color="bg-secondary" v-model="values.secondary" />
  </div>
  <div class="flex flex-col gap-2">
    <span>Orange</span>
    <Rating color="bg-orange-500" v-model="values.orange" />
  </div>
  <div class="flex flex-col gap-2">
    <span>Red</span>
    <Rating color="bg-red-500" v-model="values.red" />
  </div>
  <div class="flex flex-col gap-2">
    <span>Green</span>
    <Rating color="bg-green-500" v-model="values.green" />
  </div>
</div>
`;

const RatingColorsTemplate: Story = {
  render: () => ({
    components: { Rating },
    setup() {
      const values = ref({
        primary: 3,
        secondary: 3,
        orange: 3,
        red: 3,
        green: 3,
      });
      return { values };
    },
    template: RatingColorsTplStr,
  }),
};
export const RatingColors = { ...RatingColorsTemplate };

const HalfStarRatingTplStr = `
<div class="flex flex-col gap-4 w-80">
  <Rating halfStar v-model="halfStarValue" />
  <div class="text-center">Value: {{ halfStarValue }}</div>
</div>
`;

const HalfStarRatingTemplate: Story = {
  render: () => ({
    components: { Rating },
    setup() {
      const halfStarValue = ref(3.5);
      return { halfStarValue };
    },
    template: HalfStarRatingTplStr,
  }),
};
export const HalfStarRating = { ...HalfStarRatingTemplate };

const ClearableRatingTplStr = `
<div class="flex flex-col gap-4 w-80">
  <Rating clearable v-model="clearableValue" />
  <div class="text-center">Value: {{ clearableValue }} (click on the same star to clear)</div>
</div>
`;

const ClearableRatingTemplate: Story = {
  render: () => ({
    components: { Rating },
    setup() {
      const clearableValue = ref(3);
      return { clearableValue };
    },
    template: ClearableRatingTplStr,
  }),
};
export const ClearableRating = { ...ClearableRatingTemplate };

const DisabledRatingTplStr = `
<div class="flex flex-col gap-2 w-80">
  <span>Rating disabled</span>
  <Rating disabled v-model="disabledValue" />
</div>
`;

const DisabledRatingTemplate: Story = {
  render: () => ({
    components: { Rating },
    setup() {
      const disabledValue = ref(3);
      return { disabledValue };
    },
    template: DisabledRatingTplStr,
  }),
};
export const DisabledRating = { ...DisabledRatingTemplate };

const ManualRatingTplStr = `
<div class="flex flex-col gap-4 w-80">
  <Rating v-model="manualValue">
    <RatingItem :value="1" :checked="manualValue === 1" @change="manualValue = $event" color="bg-red-500"/>
    <RatingItem :value="2" :checked="manualValue === 2" @change="manualValue = $event" color="bg-orange-500" />
    <RatingItem :value="3" :checked="manualValue === 3" @change="manualValue = $event" color="bg-yellow-500" />
    <RatingItem :value="4" :checked="manualValue === 4" @change="manualValue = $event" color="bg-lime-500" />
    <RatingItem :value="5" :checked="manualValue === 5" @change="manualValue = $event" color="bg-green-500" />
  </Rating>
  <div class="text-center">Value: {{ manualValue }}</div>
</div>
`;

const ManualRatingTemplate: Story = {
  render: () => ({
    components: { Rating, RatingItem },
    setup() {
      const manualValue = ref(3);
      return { manualValue };
    },
    template: ManualRatingTplStr,
  }),
};
export const ManualRating = { ...ManualRatingTemplate }; 