import type { Meta, StoryObj } from "@storybook/vue3";
import Tabs from "@/components/Navigation/Tabs.vue";
import { useSizeStoriesControl } from "@/composables/useSizeProps";
import HomeIcon from "@/components/Icons/HomeIcon.vue";
import DetailIcon from "@/components/Icons/DetailIcon.vue";
import ChartIcon from "@/components/Icons/ChartIcon.vue";
import Button from "@/components/Actions/Button.vue";

const meta: Meta<typeof Tabs> = {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  argTypes: {
    ...useSizeStoriesControl,
    type: {
      control: { type: "select" },
      options: ["lift", "border", "box"],
      description: "Type of the tabs",
    },
    bottom: {
      control: { type: "boolean" },
      description: "Place tabs at bottom",
    },
    name: {
      control: { type: "text" },
      description: "Name attribute for radio inputs",
    },
    items: {
      control: "object",
      description: "Tab items configuration",
    },
  },
  args: {
    size: "default",
    type: undefined,
    bottom: false,
    name: "my_tabs",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Tab 1", active: true },
      { label: "Tab 2" },
      { label: "Tab 3" },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: "Home", icon: HomeIcon, class: "gap-2", active: true },
      { label: "Light Mode", icon: DetailIcon, class: "gap-2" },
      { label: "Dark Mode", icon: ChartIcon, class: "gap-2" },
    ],
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { Tabs },
    setup() {
      const tabItems = [
        { label: "Tab 1", active: true },
        { label: "Tab 2" },
        { label: "Tab 3" },
      ];
      return { args, tabItems };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div>
          <h3 class="text-sm font-medium mb-2">Extra Small (xs)</h3>
          <Tabs :items="tabItems" size="xs" />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-2">Small (sm)</h3>
          <Tabs :items="tabItems" size="sm" />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-2">Medium (md)</h3>
          <Tabs :items="tabItems" size="md" />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-2">Large (lg)</h3>
          <Tabs :items="tabItems" size="lg" />
        </div>
      </div>
    `,
  }),
};

export const Types: Story = {
  render: (args) => ({
    components: { Tabs },
    setup() {
      const tabItems = [
        { label: "Tab 1", active: true },
        { label: "Tab 2" },
        { label: "Tab 3" },
      ];
      return { args, tabItems };
    },
    template: `
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-medium mb-2">Default</h3>
          <Tabs :items="tabItems" />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-2">Lifted</h3>
          <Tabs :items="tabItems" type="lift" />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-2">Bordered</h3>
          <Tabs :items="tabItems" type="border" />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-2">Box</h3>
          <Tabs :items="tabItems" type="box" />
        </div>
      </div>
    `,
  }),
};

export const BottomTabs: Story = {
  args: {
    items: [
      { label: "Tab 1", active: true },
      { label: "Tab 2" },
      { label: "Tab 3" },
    ],
    bottom: true,
  },
};

export const WithContent: Story = {
  args: {
    items: [
      {
        label: "Tab 1",
        active: true,
        content: "This is the content for Tab 1",
      },
      {
        label: "Tab 2",
        content: "This is the content for Tab 2",
      },
      {
        label: "Tab 3",
        content: "This is the content for Tab 3",
      },
    ],
    type: "border",
  },
};

export const WithCustomContent: Story = {
  render: (args) => ({
    components: { Tabs, Button },
    setup() {
      const tabItems = [
        { label: "Tab 1", active: true, content: "Custom content for Tab 1" },
        { label: "Tab 2", content: "Custom content for Tab 2" },
        { label: "Tab 3", content: "Custom content for Tab 3" },
      ];
      return { args, tabItems };
    },
    template: `
      <Tabs :items="tabItems" type="border">
        <template #content-0="{ item }">
          <div class="p-4 bg-blue-100 rounded">
            {{ item.content }}
            <Button variant="primary" size="xs">Button only in tab 1</Button>
          </div>
        </template>
        <template #content-1="{ item }">
          <div class="p-4 bg-green-100 rounded">
            {{ item.content }}
             No button here
          </div>
        </template>
        <template #content-2="{ item }">
          <div class="p-4 bg-red-100 rounded">
            Nothing here
          </div>
        </template>
      </Tabs>
    `,
  }),
};

export const WithCustomMarkup: Story = {
  render: (args) => ({
    components: { Tabs },
    template: `
      <Tabs role="tablist">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </Tabs>
    `,
  }),
};

export const WithEvents: Story = {
  args: {
    items: [
      {
        label: "Tab 1",
        onClick: () => alert("Tab 1 clicked!"),
      },
      {
        label: "Tab 2",
        onClick: () => alert("Tab 2 clicked!"),
      },
      {
        label: "Tab 3",
        onClick: () => alert("Tab 3 clicked!"),
      },
    ],
  },
};
