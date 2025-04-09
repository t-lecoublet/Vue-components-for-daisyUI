import type { Meta, StoryObj } from "@storybook/vue3";
import Navbar from "@/components/Navigation/Navbar.vue";
import ButtonLink from "@/components/Navigation/ButtonLink.vue";
import Button from "@/components/Actions/Button.vue";
import EllipsisIcon from "@/components/Icons/EllipsisIcon.vue";
import MenuIcon from "@/components/Icons/MenuIcon.vue";
import Avatar from "@/components/DataDisplay/Avatar.vue";
import Dropdown from "@/components/Actions/Dropdown.vue";
import Menu from "@/components/Navigation/Menu.vue";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navigation/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Navbar, ButtonLink },
    template: `
      <Navbar>
        <template #center>
          <ButtonLink href="/" :ghost="true">daisyUI</ButtonLink>
        </template>
      </Navbar>
    `,
  }),
};

export const WithTitleAndIcon: Story = {
  render: () => ({
    components: { Navbar, ButtonLink, Button, EllipsisIcon },
    template: `
      <Navbar>
        <template #start>
          <ButtonLink href="/" :ghost="true">daisyUI</ButtonLink>
        </template>
        <template #end>
          <Button :ghost="true" :square="true">
            <EllipsisIcon />
          </Button>
        </template>
      </Navbar>
    `,
  }),
};

export const WithIconAtStartAndEnd: Story = {
  render: () => ({
    components: { Navbar, ButtonLink, Button, EllipsisIcon, MenuIcon },
    template: `
      <Navbar>
        <template #start>
          <Button :ghost="true" :square="true">
            <MenuIcon />
          </Button>
        </template>
        <template #center>
          <ButtonLink href="/" :ghost="true">daisyUI</ButtonLink>
        </template>
        <template #end>
          <Button :ghost="true" :square="true">
            <EllipsisIcon />
          </Button>
        </template>
      </Navbar>
    `,
  }),
};

export const WithMenuAndSubmenu: Story = {
  render: () => ({
    components: { Navbar, ButtonLink },
    template: `
      <Navbar>
        <template #start>
          <ButtonLink class="text-xl" :ghost="true">daisyUI</ButtonLink>
        </template>
        <template #end>
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
        </template>
      </Navbar>
    `,
  }),
};

export const WithSearchAndAvatar: Story = {
  render: () => ({
    components: { Navbar, Button, Avatar, Dropdown, Menu },
    template: `
      <Navbar>
        <template #start>
          <Button variant="ghost" class="text-xl">daisyUI</Button>
        </template>
        <template #end>
          <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
            <Dropdown placement="end">
              <template #trigger>
                <Button class="m-1 overflow-hidden" :circle="true">
                  <Avatar>
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                  </Avatar>
                </Button>
              </template>
              <Menu class="w-56">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
              </Menu>
            </Dropdown>
        </template>
      </Navbar>
    `,
  }),
};
