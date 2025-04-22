import type { Meta, StoryObj } from "@storybook/vue3";
import Toast from "@/components/Feedback/Toast.vue";
import Alert from "@/components/Feedback/Alert.vue";
import Button from "@/components/Actions/Button.vue";
import { ref } from "vue";

const meta: Meta<typeof Toast> = {
  title: "Components/Feedback/Toast",
  component: Toast,
  argTypes: {
    horizontalPosition: {
      control: { type: "select" },
      options: ["start", "center", "end", undefined],
      description: "Horizontal position of the toast",
    },
    verticalPosition: {
      control: { type: "select" },
      options: ["top", "middle", "bottom", undefined],
      description: "Vertical position of the toast",
    },
    to: {
      control: { type: "text" },
      description: "Element where the toast will be teleported to.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

const defaultTplStr = `
<div class="h-96 w-full relative">
  <Toast v-bind="args">
    <Alert variant="info">
      <span>New message arrived.</span>
    </Alert>
  </Toast>
</div>
`;

const positionsTplStr = `
<div class="grid grid-cols-3 h-96 w-full relative">
  <div>
    <Toast horizontalPosition="start" verticalPosition="top">
      <Alert variant="info">
        <span>Top-Start</span>
      </Alert>
    </Toast>
  </div>
  <div>
    <Toast horizontalPosition="center" verticalPosition="top">
      <Alert variant="info">
        <span>Top-Center</span>
      </Alert>
    </Toast>
  </div>
  <div>
    <Toast horizontalPosition="end" verticalPosition="top">
      <Alert variant="info">
        <span>Top-End</span>
      </Alert>
    </Toast>
  </div>
  
  <div>
    <Toast horizontalPosition="start" verticalPosition="middle">
      <Alert variant="success">
        <span>Middle-Start</span>
      </Alert>
    </Toast>
  </div>
  <div>
    <Toast horizontalPosition="center" verticalPosition="middle">
      <Alert variant="success">
        <span>Middle-Center</span>
      </Alert>
    </Toast>
  </div>
  <div>
    <Toast horizontalPosition="end" verticalPosition="middle">
      <Alert variant="success">
        <span>Middle-End</span>
      </Alert>
    </Toast>
  </div>
  
  <div>
    <Toast horizontalPosition="start" verticalPosition="bottom">
      <Alert variant="warning">
        <span>Bottom-Start</span>
      </Alert>
    </Toast>
  </div>
  <div>
    <Toast horizontalPosition="center" verticalPosition="bottom">
      <Alert variant="warning">
        <span>Bottom-Center</span>
      </Alert>
    </Toast>
  </div>
  <div>
    <Toast horizontalPosition="end" verticalPosition="bottom">
      <Alert variant="warning">
        <span>Bottom-End</span>
      </Alert>
    </Toast>
  </div>
</div>
`;

const multipleToastsTplStr = `
<div class="h-96 w-full relative">
  <Toast horizontalPosition="end" verticalPosition="bottom">
    <Alert variant="info">
      <span>New message arrived.</span>
    </Alert>
    <Alert variant="success">
      <span>Your purchase has been confirmed.</span>
    </Alert>
    <Alert variant="warning">
      <span>Warning: Invalid email address!</span>
    </Alert>
  </Toast>
</div>
`;

const interactiveToastTplStr = `
<div class="h-96 w-full relative">
  <Toast horizontalPosition="end" verticalPosition="bottom" v-if="showToast">
    <Alert variant="success">
      <span>Your purchase has been confirmed.</span>
      <template #actions>
        <Button size="sm" variant="ghost" @click="showToast = false">Dismiss</Button>
      </template>
    </Alert>
  </Toast>
  
  <div class="fixed bottom-4 left-4">
    <Button @click="showToast = true">Show Toast</Button>
  </div>
</div>
`;

const toastStylesTplStr = `
<div class="h-96 w-full relative">
  <Toast horizontalPosition="end" verticalPosition="bottom">
    <Alert variant="info">
      <span>Default alert in toast</span>
    </Alert>
    <Alert variant="success" outline>
      <span>Outline success alert</span>
    </Alert>
    <Alert variant="warning" soft>
      <span>Soft warning alert</span>
    </Alert>
    <Alert variant="error" dash>
      <span>Dash error alert</span>
    </Alert>
  </Toast>
</div>
`;

const TemplateToast: Story = {
  render: (args: any) => ({
    components: { Toast, Alert },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
};
export const Default = { ...TemplateToast };

const ToastPositionsTemplate: Story = {
  render: () => ({
    components: { Toast, Alert },
    template: positionsTplStr,
  }),
};
export const ToastPositions = { ...ToastPositionsTemplate };

const MultipleToastsTemplate: Story = {
  render: () => ({
    components: { Toast, Alert },
    template: multipleToastsTplStr,
  }),
};
export const MultipleToasts = { ...MultipleToastsTemplate };

const ToastStylesTemplate: Story = {
  render: () => ({
    components: { Toast, Alert },
    template: toastStylesTplStr,
  }),
};
export const ToastStyles = { ...ToastStylesTemplate };

const InteractiveToastTemplate: Story = {
  render: () => ({
    components: { Toast, Alert, Button },
    setup() {
      const showToast = ref(true);
      return { showToast };
    },
    template: interactiveToastTplStr,
  }),
};
export const InteractiveToast = { ...InteractiveToastTemplate };
