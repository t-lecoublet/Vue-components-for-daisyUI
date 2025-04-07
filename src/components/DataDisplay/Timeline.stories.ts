import type { Meta, StoryObj } from "@storybook/vue3";
import Timeline from "@/components/DataDisplay/Timeline.vue";
import TimelineItem from "@/components/DataDisplay/TimelineItem.vue";
import Button from "@/components/Actions/Button.vue";

const meta = {
  title: "Components/DataDisplay/Timeline",
  component: Timeline,
  argTypes: {
    items: {
      control: "object",
      description:
        "Array of timeline items with start, middle, and end properties",
    },
    direction: {
      control: { type: "select" },
      options: ["timeline-vertical", "timeline-horizontal"],
      description: "Direction of the timeline (vertical or horizontal)",
    },
    modifier: {
      control: { type: "select" },
      options: [
        undefined,
        "timeline-snap-icon",
        "timeline-box",
        "timeline-compact",
      ],
      description: "Optional modifier class for the timeline",
    },
    customClass: {
      control: "text",
      description: "Custom class to apply to the timeline element",
    },
    responsive: {
      control: "boolean",
      description:
        "Whether the timeline should be responsive (vertical on mobile, horizontal on large screens)",
    },
    validItems: {
      control: "object",
      description:
        "Array of boolean values indicating whether each item is valid",
    },
    hrClasses: {
      control: "object",
      description: "Array of CSS classes to apply to hr elements between items",
    },
  },
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
      {
        start: "2007",
        end: "iPhone",
      },
      {
        start: "2015",
        end: "Apple Watch",
      },
    ],
    direction: "timeline-vertical",
    modifier: undefined,
    customClass: "",
    responsive: false,
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    direction: "timeline-horizontal",
    items: [
      {
        start: "1984",
        end: "First Macintosh",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
    ],
  },
};

export const WithSnapIcon: Story = {
  args: {
    modifier: "timeline-snap-icon",
  },
};

export const WithBox: Story = {
  args: {
    modifier: "timeline-box",
  },
};

export const Compact: Story = {
  args: {
    modifier: "timeline-compact",
  },
};

export const Responsive: Story = {
  args: {
    responsive: true,
    items: [
      {
        start: "1984",
        end: "First Macintosh",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
    ],
  },
};

export const WithValidItems: Story = {
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
        valid: true,
      },
      {
        start: "1998",
        end: "iMac",
        valid: true,
      },
      {
        start: "2001",
        end: "iPod",
        valid: false,
      },
      {
        start: "2007",
        end: "iPhone",
      },
    ],
  },
};

export const WithValidItemsArray: Story = {
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
      {
        start: "2007",
        end: "iPhone",
      },
    ],
    validItems: [true, true, false, undefined],
  },
};

export const WithCustomHrClasses: Story = {
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
      },
      {
        start: "1998",
        end: "iMac",
      },
      {
        start: "2001",
        end: "iPod",
      },
      {
        start: "2007",
        end: "iPhone",
      },
    ],
    hrClasses: ["bg-primary", "bg-secondary", "bg-accent"],
  },
};

export const WithItemHrClasses: Story = {
  args: {
    items: [
      {
        start: "1984",
        end: "First Macintosh computer",
        hrClass: "bg-primary",
      },
      {
        start: "1998",
        end: "iMac",
        hrClass: "bg-secondary",
      },
      {
        start: "2001",
        end: "iPod",
        hrClass: "bg-accent",
      },
      {
        start: "2007",
        end: "iPhone",
        hrClass: "bg-error",
      },
    ],
  },
};

export const WithCustomMiddle: Story = {
  render: (args: any) => ({
    components: { Timeline },
    setup() {
      const items = [
        {
          start: "1984",
          end: "First Macintosh computer",
          valid: true,
        },
        {
          start: "1998",
          end: "iMac",
          valid: true,
        },
        {
          start: "2001",
          end: "iPod",
          valid: false,
        },
      ];

      return { items };
    },
    template: `
      <div>
        <Timeline :items="items" direction="timeline-vertical">
          <template #middle="{ index, item }">
            <div :class="['rounded-full w-6 h-6 flex items-center justify-center', item.valid ? 'bg-primary text-primary-content' : 'bg-error text-error-content']">
              {{ index + 1 }}
            </div>
          </template>
        </Timeline>
      </div>
    `,
  }),
};

export const WithCustomSlots: Story = {
  render: (args: any) => ({
    components: { Timeline, Button },
    setup() {
      const items = [
        {
          start: "1984",
          end: "First Macintosh computer",
        },
        {
          start: "1998",
          end: "iMac",
        },
        {
          start: "2001",
          end: "iPod",
        },
      ];

      return { items };
    },
    template: `
      <div>
        <Timeline :items="items" direction="timeline-vertical">
          <template #start-0="{ item }">
            <div class="badge badge-primary">{{ item.start }}</div>
          </template>
          <template #end-0="{ item }">
            <div class="flex flex-col gap-2">
              <p>{{ item.end }}</p>
              <Button variant="primary" size="xs">More info</Button>
            </div>
          </template>
        </Timeline>
      </div>
    `,
  }),
};

export const WithGlobalSlots: Story = {
  render: (args: any) => ({
    components: { Timeline, Button },
    setup() {
      const items = [
        {
          start: "1984",
          end: "First Macintosh computer",
        },
        {
          start: "1998",
          end: "iMac",
        },
        {
          start: "2001",
          end: "iPod",
        },
      ];

      return { items };
    },
    template: `
      <div>
        <Timeline :items="items" direction="timeline-vertical">
          <template #start="{ item, index }">
            <div class="badge badge-primary">{{ item.start }}</div>
          </template>
          <template #end="{ item, index }">
            <div class="flex flex-col gap-2">
              <p>{{ item.end }}</p>
              <p class="text-sm text-gray-500">Item {{ index + 1 }}</p>
              <Button variant="primary" size="xs">More info</Button>
            </div>
          </template>
        </Timeline>
      </div>
    `,
  }),
};

export const ColorfulTimeline: Story = {
  render: (args: any) => ({
    components: { Timeline },
    setup() {
      const items = [
        {
          start: "",
          end: "First Macintosh computer",
          hrClass: "bg-primary",
          valid: true,
        },
        {
          end: "iMac",
          hrClass: "bg-primary",
          valid: true,
        },
        {
          start: "",
          end: "iPod",
          hrClass: "bg-primary",
          valid: true,
        },
        {
          end: "iPhone",
          valid: false,
        },
        {
          start: "",
          end: "Apple Watch",
        },
      ];

      return { items };
    },
    template: `
      <div>
        <Timeline :items="items" modifier="timeline-box">
          <template #middle="{ item }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" :class="['w-5 h-5', item.valid === true ? 'text-primary' : (item.valid === false ? 'text-error' : '')]">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
            </svg>
          </template>
        </Timeline>
      </div>
    `,
  }),
};

export const ManualMode: Story = {
  render: (args: any) => ({
    components: { Timeline, TimelineItem, Button },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Timeline direction="timeline-vertical">
          <TimelineItem hrClass="bg-primary">
            <template #start>
              <div class="badge badge-primary">1984</div>
            </template>
            <template #middle>
              <div class="bg-primary text-primary-content rounded-full w-6 h-6 flex items-center justify-center">
                1
              </div>
            </template>
            <template #end>
              <div class="flex flex-col gap-2">
                <p>First Macintosh computer</p>
                <Button variant="primary" size="xs">Details</Button>
              </div>
            </template>
          </TimelineItem>
          
          <TimelineItem :valid="true" hrClass="bg-primary">
            <template #start>
              <div class="badge badge-secondary">1998</div>
            </template>
            <template #end>
              <p>iMac</p>
            </template>
          </TimelineItem>
          
          <TimelineItem :valid="false" hrClass="bg-error">
            <template #start>
              <div class="badge badge-accent">2001</div>
            </template>
            <template #end>
              <p>iPod</p>
            </template>
          </TimelineItem>
        </Timeline>
      </div>
    `,
  }),
};
