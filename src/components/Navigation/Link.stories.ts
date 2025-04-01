import type { Meta, StoryObj } from "@storybook/vue3";
import { useVariantStoriesControl } from "@/composables/useVariantProps";
import Link from "@/components/Navigation/Link.vue";

const meta: Meta<typeof Link> = {
  title: "Components/Navigation/Link",
  component: Link,
  argTypes: {
    ...useVariantStoriesControl,
    onlyUnderlineOnHover: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

const defaultTplStr = `
<div class="flex gap-2 items-center">
  <Link v-bind="args" href="https://www.google.com">Click me</Link>
</div>
`;
const linkInParagraphTplStr = `
<div class="flex gap-2 items-center">
  <p>
    Tailwind CSS resets the style of links by default.
    <br />
    Add "link" class to make it look like a
    <Link v-bind="args" href="https://www.google.com">normal link</Link>
    again.
  </p>
</div>
`;
const colorsLinkTplStr = `
<div class="flex gap-2 items-center">
  <Link variant="primary" v-bind="args">Primary</Link>
  <Link variant="secondary" v-bind="args">Secondary</Link>
  <Link variant="accent" v-bind="args">Accent</Link>
  <Link variant="neutral" v-bind="args">Neutral</Link>
  <Link variant="info" v-bind="args">Info</Link>
  <Link variant="success" v-bind="args">Success</Link>
  <Link variant="warning" v-bind="args">Warning</Link>
  <Link variant="error" v-bind="args">Error</Link>
</div>`;

// DEFAULT LINK

const TemplateLink: Story = {
  render: (args: any) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
};
export const DefaultLink = { ...TemplateLink };
DefaultLink.args = {};

// LINK IN PARAGRAPH

const LinkInParagraphTemplate: Story = {
  render: (args: any) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: linkInParagraphTplStr,
  }),
};
export const LinkInParagraph = { ...LinkInParagraphTemplate };
LinkInParagraph.args = {};

// COLOR LINKS

const ColorsLinkTemplate: Story = {
  render: (args: any) => ({
    components: { Link },
    setup() {
      return { args };
    },
    template: colorsLinkTplStr,
  }),
};
export const ColorsLink = { ...ColorsLinkTemplate };
ColorsLink.args = {};

// SHOW UNDERLINE ONLY ON HOVER

export const ShowUnderlineOnlyOnHover = { ...TemplateLink };
ShowUnderlineOnlyOnHover.args = {
  onlyUnderlineOnHover: true,
};
