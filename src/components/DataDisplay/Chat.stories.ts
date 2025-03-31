import type { Meta, StoryObj } from "@storybook/vue3";
import Chat from "./Chat.vue";
import ChatItem from "./ChatItem.vue";
import Badge from "@/components/DataDisplay/Badge.vue";

const meta = {
  title: "Components/DataDisplay/Chat",
  component: Chat,
  argTypes: {
    items: {
      control: "object",
      description:
        "Array of chat items with message, image, header, footer, placement and color properties",
    },
    placement: {
      control: { type: "select" },
      options: ["start", "end"],
      description: "Default placement for chat bubbles",
    },
    customClass: {
      control: "text",
      description: "Custom class to apply to all chat elements",
    },
  },
  args: {
    items: [
      {
        message: "Hello! How can I help you today?",
        header: "Assistant",
        footer: "Sent at 10:00",
        placement: "start",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        message: "I have a question about your customer service.",
        header: "You",
        footer: "Sent at 10:05",
        placement: "end",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        message:
          "Of course, I would be happy to help with that. What is your question?",
        header: "Assistant",
        footer: "Sent at 10:07",
        placement: "start",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
    ],
    placement: "start",
    customClass: "",
  },
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithColors: Story = {
  args: {
    items: [
      {
        message: "Message with primary color",
        placement: "start",
        color: "primary",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        message: "Message with secondary color",
        placement: "end",
        color: "secondary",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        message: "Message with accent color",
        placement: "start",
        color: "accent",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        message: "Message with info color",
        placement: "end",
        color: "info",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        message: "Message with success color",
        placement: "start",
        color: "success",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        message: "Message with warning color",
        placement: "end",
        color: "warning",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        message: "Message with error color",
        placement: "start",
        color: "error",
        image:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
    ],
  },
};

export const WithCustomSlots: Story = {
  render: (args) => ({
    components: { Chat, Badge },
    setup() {
      const items = [
        {
          message: "Message with custom slot",
          placement: "start",
          image:
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        },
        {
          message: "Another message with custom slot",
          placement: "end",
          image:
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        },
      ];

      return { items };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Chat :items="items">
          <template #header-0="{ item }">
            <div class="flex items-center gap-2">
              <span>User</span>
              <Badge variant="primary" size="sm">Online</Badge>
            </div>
          </template>
          <template #footer-0>
            <time class="text-xs opacity-50">12:45</time>
          </template>
          <template #header-1>
            <div class="flex items-center gap-2">
              <span>You</span>
              <Badge variant="success" size="sm">Verified</Badge>
            </div>
          </template>
        </Chat>
      </div>
    `,
  }),
};

export const ManualMode: Story = {
  render: (args) => ({
    components: { Chat, ChatItem, Badge },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Chat>
          <ChatItem placement="start" color="primary">
            <template #image>
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
            </template>
            <template #header>
              <div class="flex items-center gap-2">
                <span>Support</span>
                <Badge variant="primary" size="sm">Staff</Badge>
              </div>
            </template>
            <template #message>
              Hello! How can I help you today?
            </template>
            <template #footer>
              <time class="text-xs opacity-50">12:45</time>
            </template>
          </ChatItem>
          
          <ChatItem placement="end" color="secondary">
            <template #image>
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
            </template>
            <template #header>
              <span>You</span>
            </template>
            <template #message>
              I have a question about my recent order.
            </template>
            <template #footer>
              <time class="text-xs opacity-50">12:46</time>
            </template>
          </ChatItem>
          
          <ChatItem placement="start" color="primary">
            <template #image>
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
            </template>
            <template #message>
              Of course, I'd be happy to help with that. Can you provide your order number?
            </template>
            <template #footer>
              <time class="text-xs opacity-50">12:47</time>
            </template>
          </ChatItem>
        </Chat>
      </div>
    `,
  }),
};

export const WithoutImages: Story = {
  args: {
    items: [
      {
        message: "Message without image",
        header: "User",
        footer: "Sent at 10:00",
        placement: "start",
      },
      {
        message: "Reply without image",
        header: "You",
        footer: "Sent at 10:05",
        placement: "end",
      },
    ],
  },
};

export const SimpleChat: Story = {
  args: {
    items: [
      {
        message: "Simple message without header or footer",
        placement: "start",
        color: "primary",
      },
      {
        message: "Simple reply",
        placement: "end",
        color: "secondary",
      },
    ],
  },
};
