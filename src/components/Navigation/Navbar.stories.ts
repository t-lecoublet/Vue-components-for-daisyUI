import type { Meta, StoryObj } from "@storybook/vue3";
import Navbar from "@/components/Navigation/Navbar.vue";
import ButtonLink from "@/components/Navigation/ButtonLink.vue";
import Button from "@/components/Actions/Button.vue";
import EllipsisIcon from "@/components/Icons/EllipsisIcon.vue";
import MenuIcon from "@/components/Icons/MenuIcon.vue";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navigation/Navbar",
  component: Navbar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Navbar>;

const DefaultTplStr = `
<Navbar>
  <ButtonLink href="/" :ghost="true" >daisyUI</ButtonLink>
</Navbar>`;
const WithTitleAndIconTplStr = `
<Navbar>
  <div class="flex-1">
    <ButtonLink href="/" :ghost="true" >daisyUI</ButtonLink>
  </div>
  <div class="flex-none">
    <Button :ghost="true" :square="true" >
      <EllipsisIcon />
    </Button>
  </div>
</Navbar>`;
const WithIconAtStartAndEndTplStr = `
<Navbar>
  <div class="flex-none">
    <Button :ghost="true" :square="true" >
      <MenuIcon />
    </Button>
  </div>
  <div class="flex-1">
    <ButtonLink href="/" :ghost="true" >daisyUI</ButtonLink>
  </div>
  <div class="flex-none">
    <Button :ghost="true" :square="true" >
      <EllipsisIcon />
    </Button>
  </div>
</Navbar>`;
const NavbarWithMenuAndSubmenuTplStr = `
<Navbar>
  <div class="flex-1">
    <ButtonLink class="text-xl" :ghost="true">daisyUI</ButtonLink>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</Navbar>`;

// NAVBAR WITH TITLE ONLY

const NavbarWithTitleOnlyTemplate: Story = {
  render: (args) => ({
    components: { Navbar, ButtonLink },
    setup() {
      return { args };
    },
    template: DefaultTplStr,
  }),
};
export const NavbarWithTitleOnly = { ...NavbarWithTitleOnlyTemplate };

// NAVBAR WITH TITLE AND ICON

const NavbarWithTitleAndIconTemplate: Story = {
  render: (args) => ({
    components: { Navbar, ButtonLink, Button, EllipsisIcon },
    setup() {
      return { args };
    },
    template: WithTitleAndIconTplStr,
  }),
};
export const NavbarWithTitleAndIcon = { ...NavbarWithTitleAndIconTemplate };

// NAVBAR WITH ICON AT START AND END

const NavbarWithIconAtStartAndEndTemplate: Story = {
  render: (args) => ({
    components: { Navbar, ButtonLink, Button, EllipsisIcon, MenuIcon },
    setup() {
      return { args };
    },
    template: WithIconAtStartAndEndTplStr,
  }),
};
export const NavbarWithIconAtStartAndEnd = {
  ...NavbarWithIconAtStartAndEndTemplate,
};

// NAVBAR WITH MENU AND SUBMENU

const NavbarWithMenuAndSubmenuTemplate: Story = {
  render: (args) => ({
    components: { Navbar, ButtonLink },
    setup() {
      return { args };
    },
    template: NavbarWithMenuAndSubmenuTplStr,
  }),
};
export const NavbarWithMenuAndSubmenu = { ...NavbarWithMenuAndSubmenuTemplate };
