import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Dock from "@/components/Navigation/Dock.vue";
import { useSizeStoriesControl } from "@/composables/useSizeProps";
import HomeIcon from "@/components/Icons/HomeIcon.vue";
import DetailIcon from "@/components/Icons/DetailIcon.vue";
import ChartIcon from "@/components/Icons/ChartIcon.vue";

const meta: Meta<typeof Dock> = {
  title: "Components/Navigation/Dock",
  component: Dock,
  argTypes: {
    ...useSizeStoriesControl,
    items: {
      control: "object",
      description: "Array of dock items with icon and label properties",
    },
  },
  args: {
    items: [
      {
        icon: HomeIcon,
        label: "Home",
      },
      {
        icon: DetailIcon,
        label: "Info",
      },
      {
        icon: ChartIcon,
        label: "Stats",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutIcons: Story = {
  args: {
    items: [
      {
        label: "Home",
      },
      {
        label: "Info",
      },
      {
        label: "Stats",
      },
    ],
  },
};

export const WithoutLabels: Story = {
  args: {
    items: [
      {
        icon: HomeIcon,
      },
      {
        icon: DetailIcon,
      },
      {
        icon: ChartIcon,
      },
    ],
  },
};
export const WithEmitExposedAndCustomProps: Story = {
  render: (args: any) => ({
    components: { Dock, HomeIcon, DetailIcon, ChartIcon },
    setup() {
      const myDock = ref(null);
      const items = [
        {
          icon: HomeIcon,
          href: "/home",
          label: "Home",
        },
        {
          icon: DetailIcon,
          href: "/info",
          label: "Info",
        },
        {
          icon: ChartIcon,
          href: "/stats",
          label: "Stats",
        },
      ];
      args.items = items;
      return { args, myDock };
    },
    template: `
            <Dock v-bind="args" ref="myDock" @change="onClick" />
            <div class="mt-4">
                <p class="text-sm text-gray-500">Dock exposed props:</p>
                <pre class="bg-gray-100 p-2 ring-1 ring-gray-200 rounded">{{ myDock }}</pre>
            </div>
            <div class="mt-4">
                <p class="text-sm text-gray-500">Clicked item (item.label from $emit):</p>
                <pre class="bg-gray-100 p-2 ring-1 ring-gray-200 rounded">{{ clickedItem }}</pre>
            </div>
        `,
    data() {
      return {
        clickedItem: null,
      };
    },
    methods: {
      onClick(item: any) {
        this.clickedItem = item.label;
      },
    },
  }),
};

export const WithClickEventAgrs: Story = {
  args: {
    items: [
      {
        icon: HomeIcon,
        label: "Home",
        onClick: () => alert("Home clicked"),
      },
      {
        icon: DetailIcon,
        label: "Info",
        onClick: () => alert("Info clicked"),
      },
      {
        icon: ChartIcon,
        label: "Stats",
        onClick: () => alert("Stats clicked"),
      },
    ],
  },
};

export const WithCustomClass: Story = {
  args: {
    items: [
      {
        icon: HomeIcon,
        label: "Home",
        class: "text-red-500",
      },
      {
        icon: DetailIcon,
        label: "Info",
        class: "text-blue-500",
      },
      {
        icon: ChartIcon,
        label: "Stats",
        class: "text-green-500",
      },
    ],
  },
};

export const ManualMode: Story = {
  render: (args: any) => ({
    components: { Dock, HomeIcon, DetailIcon, ChartIcon },
    setup() {
      return { args };
    },
    template: `
            <Dock>
                <button class="dock-active">
                    <HomeIcon />
                    <span class="dock-label">Home</span>
                </button>
                <button>
                    <DetailIcon />
                    <span class="dock-label">Info</span>
                </button>
                <button>
                    <ChartIcon />
                    <span class="dock-label">Stats</span>
                </button>
            </Dock>
        `,
  }),
};
