import type { Meta, StoryObj } from "@storybook/vue3";
import Badge from "@/components/DataDisplay/Badge.vue";
import { useSizeStoriesControl } from "@/composables/useSizeProps";
import { useVariantStoriesControl } from "@/composables/useVariantProps";

const meta: Meta<typeof Badge> = {
  title: "Components/DataDisplay/Badge",
  component: Badge,
  argTypes: {
    ...useVariantStoriesControl,
    ...useSizeStoriesControl,
    soft: { control: "boolean" },
    outline: { control: "boolean" },
    dash: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

const defaultTplStr = `
  <Badge v-bind="args">Badge</Badge>
`;

const BadgeSizesTplStr = `
  <div class="flex gap-2 items-center">
    <Badge size="xs">Xsmall</Badge>
    <Badge size="sm">Small</Badge>
    <Badge size="md">Medium</Badge>
    <Badge size="lg">Large</Badge>
    <Badge size="xl">Xlarge</Badge>
  </div>
`;

const BadgeColorsTplStr = `
  <div class="flex gap-2 items-center">
    <Badge variant="primary" v-bind="args">Primary</Badge>
    <Badge variant="secondary" v-bind="args">Secondary</Badge>
    <Badge variant="accent" v-bind="args">Accent</Badge>
    <Badge variant="neutral" v-bind="args">Neutral</Badge>
    <Badge variant="info" v-bind="args">Info</Badge>
    <Badge variant="success" v-bind="args">Success</Badge>
    <Badge variant="warning" v-bind="args">Warning</Badge>
    <Badge variant="error" v-bind="args">Error</Badge>
  </div>
`;

const EmptyBadgeTplStr = `
  <div class="flex gap-2 items-center">
    <Badge size="lg" v-bind="args"></Badge>
    <Badge size="md" v-bind="args"></Badge>
    <Badge size="sm" v-bind="args"></Badge>
    <Badge size="xs" v-bind="args"></Badge>
  </div>
`;

const BadgeWithIconTplStr = `
  <div class="flex gap-2 items-center">
    <Badge variant="info" v-bind="args">Info</Badge>
    <Badge variant="success" v-bind="args">Success</Badge>
    <Badge variant="warning" v-bind="args">Warning</Badge>
    <Badge variant="error" v-bind="args">Error</Badge>
  </div>
`;

const BadgeInATextTplStr = `
<div class="flex flex-col gap-2">
    <h1 class="text-xl font-semibold">
        Heading 1 <Badge size="xl" v-bind="args">Badge</Badge>
    </h1>
    <h2 class="text-lg font-semibold">
        Heading 2 <Badge size="lg" v-bind="args">Badge</Badge>
    </h2>
    <h3 class="text-base font-semibold">
      Heading 3 <Badge size="md" v-bind="args">Badge</Badge>
    </h3>
    <h4 class="text-sm font-semibold">
      Heading 4 <Badge size="sm" v-bind="args">Badge</Badge>
    </h4>
    <h5 class="text-xs font-semibold">
      Heading 5 <Badge size="xs" v-bind="args">Badge</Badge>
    </h5>
    <p class="text-xs">
      Paragraph <Badge size="xs" v-bind="args">Badge</Badge>
    </p>
</div>`;

const BadgeInAButtonTplStr = `
<div class="flex justify-center gap-2">
    <button class="btn">
        Inbox <Badge size="sm" v-bind="args">+99</Badge>
    </button>
    <button class="btn">
        Inbox <Badge size="sm" variant="secondary" v-bind="args">+99</Badge>
    </button>
`;

// BADGE

const TemplateBadge: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const DefaultBadge = { ...TemplateBadge };
DefaultBadge.args = {};

// BADGE SIZES

const BadgeSizesTemplate: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: BadgeSizesTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const BadgeSizes = { ...BadgeSizesTemplate };
BadgeSizes.args = {};

// BADGE COLORS

const BadgeColorsTemplate: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: BadgeColorsTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const BadgeColors = { ...BadgeColorsTemplate };
BadgeColors.args = {};

// BADGE WITH SOFT STYLE

export const BadgeWithSoftStyle = { ...BadgeColorsTemplate };
BadgeWithSoftStyle.args = {
  soft: true,
};

// BADGE WITH OUTLINE STYLE

export const BadgeWithOutlineStyle = { ...BadgeColorsTemplate };
BadgeWithOutlineStyle.args = {
  outline: true,
};

// BADGE WITH DASH STYLE

export const BadgeWithDashStyle = { ...BadgeColorsTemplate };
BadgeWithDashStyle.args = {
  dash: true,
};

// BADGE GHOST

export const BadgeGhost = { ...TemplateBadge };
BadgeGhost.args = {
  ghost: true,
};

// EMPTY BADGE

const EmptyBadgeTemplate: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: EmptyBadgeTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const EmptyBadge = { ...EmptyBadgeTemplate };
EmptyBadge.args = {
  variant: "primary",
};

// BADGE WITH ICON

const BadgeWithIconTemplate: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: BadgeWithIconTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const WithIconBadge = { ...BadgeWithIconTemplate };
WithIconBadge.args = {
  icon: true,
};

// BADGE IN A TEXT

const BadgeInATextTemplate: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: BadgeInATextTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const BadgeInAText = { ...BadgeInATextTemplate };
BadgeInAText.args = {};

// BADGE IN A BUTTON

const BadgeInAButtonTemplate: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: BadgeInAButtonTplStr,
  }),
};
export const BadgeInAButton = { ...BadgeInAButtonTemplate };
BadgeInAButton.args = {};
