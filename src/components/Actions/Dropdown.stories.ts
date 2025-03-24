import type { Meta, StoryObj } from "@storybook/vue3";
import Dropdown from "@/components/Actions/Dropdown.vue";
import Button from "@/components/Actions/Button.vue";
import Menu from "@/components/Navigation/Menu.vue";


const meta: Meta<typeof Dropdown> = {
  title: "Components/Actions/Dropdown",
  component: Dropdown,
  argTypes: {
    hover: { control: "boolean" },
    open: { control: "boolean" },
    placement: {
      control: { type: "select" },
      options: ["start", "center", "end", "top", "bottom", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const defaultTplStr = `
  <Dropdown v-bind="args">
    <template #trigger>
      <Button class="m-1">Click me !</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </Menu>
  </Dropdown>
`;

const placementsTplStr = `
<div class="flex flex-wrap gap-4 justify-center p-16">
  <Dropdown v-bind="args" placement="top">
    <template #trigger>
      <Button class="m-1">Top</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown v-bind="args" placement="bottom">
    <template #trigger>
      <Button class="m-1">Bottom</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown v-bind="args" placement="left">
    <template #trigger>
      <Button class="m-1">Left</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown v-bind="args" placement="right">
    <template #trigger>
      <Button class="m-1">Right</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
</div>
`;

const alignmentsTplStr = `
<div class="flex flex-wrap gap-4 justify-center p-16">
  <Dropdown v-bind="args" placement="start">
    <template #trigger>
      <Button class="m-1">Start</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown v-bind="args" placement="center">
    <template #trigger>
      <Button class="m-1">Center</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
  
  <Dropdown v-bind="args" placement="end">
    <template #trigger>
      <Button class="m-1">End</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
</div>
`;

const hoverTplStr = `
<div class="flex justify-center p-16">
  <Dropdown v-bind="args" hover>
    <template #trigger>
      <Button class="m-1">Hover me !</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
</div>
`;

const openTplStr = `
<div class="flex justify-center p-16">
  <Dropdown v-bind="args" open>
    <template #trigger>
      <Button class="m-1">Always open</Button>
    </template>
    <Menu v-bind="args" class="w-56">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </Menu>
  </Dropdown>
</div>
`;

// DEFAULT DROPDOWN

const TemplateDropdown: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const DefaultDropdown = { ...TemplateDropdown };

// DROPDOWN PLACEMENTS

const DropdownPlacementsTemplate: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return { args };
    },
    template: placementsTplStr,
  }),
  args: {},
};
export const DropdownPlacements = { ...DropdownPlacementsTemplate };

// DROPDOWN ALIGNMENTS

const DropdownAlignmentsTemplate: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return { args };
    },
    template: alignmentsTplStr,
  }),
  args: {},
};
export const DropdownAlignments = { ...DropdownAlignmentsTemplate };

// DROPDOWN HOVER

const DropdownHoverTemplate: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return { args };
    },
    template: hoverTplStr,
  }),
  args: {},
};
export const DropdownHover = { ...DropdownHoverTemplate };

// DROPDOWN OPEN

const DropdownOpenTemplate: Story = {
  render: (args) => ({
    components: { Dropdown, Button, Menu },
    setup() {
      return { args };
    },
    template: openTplStr,
  }),
  args: {},
};
export const DropdownOpen = { ...DropdownOpenTemplate };