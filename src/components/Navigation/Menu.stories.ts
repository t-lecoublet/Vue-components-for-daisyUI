import type { Meta, StoryObj } from "@storybook/vue3";
import Menu from "@/components/Navigation/Menu.vue";
import DetailIcon from "@/components/Icons/DetailIcon.vue";
import HomeIcon from "@/components/Icons/HomeIcon.vue";
import ChartIcon from "@/components/Icons/ChartIcon.vue";
import Tooltip from "@/components/Feedback/Tooltip.vue";
import Badge from "@/components/DataDisplay/Badge.vue";
import FileUserIcon from "@/components/Icons/FileUserIcon.vue";
import FolderClosedIcon from "@/components/Icons/FolderClosedIcon.vue";
import FileIcon from "@/components/Icons/FileIcon.vue";
import FileImageIcon from "@/components/Icons/FileImageIcon.vue";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta: Meta<typeof Menu> = {
  title: "Components/Navigation/Menu",
  component: Menu,
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["default", "vertical", "horizontal", "responsive"],
    },
    ...useSizeStoriesControl,
    rounded: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

const DefaultTplStr = `
<Menu v-bind="args" class="w-56">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</Menu>`;
const MenuWithIconsTplStr = `
<Menu v-bind="args">
  <li><a><HomeIcon /></a></li>
  <li><a><DetailIcon /></a></li>
  <li><a><ChartIcon /></a></li>
</Menu>`;
const MenuWithIconsAndTooltipsTplStr = `
<Menu v-bind="args">
  <li>
    <Tooltip position="right" data-tip="Home">
      <a><HomeIcon /></a>
    </Tooltip>
  </li>
  <li>
    <Tooltip position="right" data-tip="Details">
      <a><DetailIcon /></a>
    </Tooltip>
  </li>
  <li>
    <Tooltip position="right" data-tip="Stats">
      <a><ChartIcon /></a>
    </Tooltip>
  </li>
</Menu>
`;
const MenuWithIconsAndTooltipsHorizontalTplStr = `
<Menu v-bind="args" direction="horizontal" class="m-16">
  <li>
    <Tooltip data-tip="Home">
      <a><HomeIcon /></a>
    </Tooltip>
  </li>
  <li>
    <Tooltip data-tip="Details">
      <a><DetailIcon /></a>
    </Tooltip>
  </li>
  <li>
    <Tooltip data-tip="Stats">
      <a><ChartIcon /></a>
    </Tooltip>
  </li>
</Menu>`;
const MenuSizesTplStr = `
<div class="flex flex-col gap-4">
  <Menu v-bind="args" class="w-56" size="xs">
    <li><a>Xsmall 1</a></li>
    <li><a>Xsmall 2</a></li>
  </Menu>
  <Menu v-bind="args" class="w-56" size="sm">
    <li><a>Small 1</a></li>
    <li><a>Small 2</a></li>
  </Menu>
  <Menu v-bind="args" class="w-56" size="md">
    <li><a>Medium 1</a></li>
    <li><a>Medium 2</a></li>
  </Menu>
  <Menu v-bind="args" class="w-56" size="lg">
    <li><a>Large 1</a></li>
    <li><a>Large 2</a></li>
  </Menu>
  <Menu v-bind="args" class="w-56" size="xl">
    <li><a>Xlarge 1</a></li>
    <li><a>Xlarge 2</a></li>
  </Menu>
</div>`;
const MenuWithDisabledItemsTplStr = `
<Menu v-bind="args" class="w-56">
  <li><a>Enabled item</a></li>
  <li class="menu-disabled"><a>disabled item</a></li>
  <li class="menu-disabled"><a>disabled item</a></li>
</Menu>`;
const MenuWithIconsAndTextTplStr = `
<Menu v-bind="args" class="w-56">
  <li><a><HomeIcon /> Item 1</a></li>
  <li><a><DetailIcon /> Item 2</a></li>
  <li><a><ChartIcon /> Item 3</a></li>
</Menu>
`;
const MenuWithIconsAndBadgeResponsiveTplStr = `
<Menu direction="responsive" v-bind="args">
  <li>
    <a>
      <HomeIcon /> Inbox <Badge>99+</Badge>
    </a>
  </li>
  <li>
    <a>
      <DetailIcon /> Updates <Badge size="xs" variant="warning">NEW</Badge>
    </a>
  </li>
  <li>
    <a>
      <ChartIcon /> Stats <Badge size="xs" variant="info" />
    </a>
  </li>
</Menu>
`;
const MenuWithTitleTplStr = `
<Menu v-bind="args" class="w-56">
  <li class="menu-title">Title</li>
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</Menu>`;
const MenuWithTitleAsParentTplStr = `
<Menu v-bind="args" class="w-56">
  <li>
    <h2 class="menu-title">Title</h2>
    <ul>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </li>
</Menu>
`;
const SubMenuTplStr = `
<Menu v-bind="args" class="w-56">
  <li><a>Item 1</a></li>
  <li>
    <a>Parent</a>
    <ul>
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
      <li>
        <a>Parent</a>
        <ul>
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</Menu>
`;
const CollapsibleSubMenuTplStr = `
<Menu v-bind="args" class="w-56">
  <li><a>Item 1</a></li>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><a>Item 3</a></li>
</Menu>
`;
const CollapsibleSubMenuWithClassNamesTplStr = `
<div class="flex items-center justify-center gap-4 mt-8">
  <Menu v-bind="args" class="w-56">
    <li><a>Item 1</a></li>
    <li>
      <span class="menu-dropdown-toggle">Parent</span>
      <ul class="menu-dropdown">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </li>
  </Menu>
  <Menu v-bind="args" class="w-56">
    <li><a>Item 1</a></li>
    <li>
      <span class="menu-dropdown-toggle menu-dropdown-show">Parent</span>
      <ul class="menu-dropdown menu-dropdown-show">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </li>
  </Menu>
</div>
`;
const FileTreeTplStr = `
<Menu v-bind="args" class="max-w-xs w-full">
  <li><a><FileUserIcon /> resume.pdf</a></li>
  <li>
    <details open>
      <summary><FolderClosedIcon /> My Files</summary>
      <ul>
        <li><a><FileIcon /> Project-final.psd</a></li>
        <li><a><FileIcon /> Project-final-2.psd</a></li>
        <li>
          <details open>
            <summary><FolderClosedIcon /> Images</summary>
            <ul>
              <li><a><FileImageIcon /> Screenshot1.png</a></li>
              <li><a><FileImageIcon /> Screenshot2.png</a></li>
              <li>
                <details open>
                  <summary><FolderClosedIcon /> Others</summary>
                  <ul>
                    <li><a><FileImageIcon /> Screenshot3.png</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><a><FileUserIcon /> reports-final-2.pdf</a></li>
</Menu>
`;
const MenuWithActiveItemTplStr = `
<Menu v-bind="args" class="w-56">
  <li><a>Item 1</a></li>
  <li><a class="menu-active">Item 2</a></li>
  <li><a>Item 3</a></li>
</Menu>`;
const HorizontalSubMenuTplStr = `
<Menu v-bind="args" direction="horizontal">
  <li><a>Item 1</a></li>
  <li>
    <a>Parent</a>
    <ul>
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</Menu>`;
const MegaMenuWithSubMenuResponsiveTplStr = `
<Menu direction="responsive" v-bind="args" class="lg:min-w-max">
  <li>
    <a>Solutions</a>
    <ul>
      <li><a>Design</a></li>
      <li><a>Development</a></li>
      <li><a>Hosting</a></li>
      <li><a>Domain register</a></li>
    </ul>
  </li>
  <li>
    <a>Enterprise</a>
    <ul>
      <li><a>CRM software</a></li>
      <li><a>Marketing management</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </li>
  <li>
    <a>Products</a>
    <ul>
      <li><a>UI Kit</a></li>
      <li><a>WordPress themes</a></li>
      <li><a>WordPress plugins</a></li>
      <li>
        <a>Open source</a>
        <ul>
          <li><a>Auth management system</a></li>
          <li><a>VScode theme</a></li>
          <li><a>Color picker app</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <a>Company</a>
    <ul>
      <li><a>About us</a></li>
      <li><a>Contact us</a></li>
      <li><a>Privacy policy</a></li>
      <li><a>Press kit</a></li>
    </ul>
  </li>
</Menu>
`;
const CollapsibleWithSubMenuResponsiveTplStr = `
<Menu direction="responsive" v-bind="args">
  <li><a>Item 1</a></li>
  <li>
    <details open>
      <summary>Parent item</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li><a>item 1</a></li>
              <li><a>item 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><a>Item 3</a></li>
</Menu>
`;

// DEFAULT MENU

const DefaultMenuTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: DefaultTplStr,
  }),
};
export const DefaultMenu = { ...DefaultMenuTemplate };
DefaultMenu.args = {};

// RESPONSIVE MENU

export const ResponsiveMenu = { ...DefaultMenuTemplate };
ResponsiveMenu.args = {
  direction: "responsive",
};

// MENU WITH ICON ONLY

const MenuWithIconsTemplate: Story = {
  render: (args) => ({
    components: { Menu, HomeIcon, DetailIcon, ChartIcon },
    setup() {
      return { args };
    },
    template: MenuWithIconsTplStr,
  }),
};
export const MenuWithIcons = { ...MenuWithIconsTemplate };
MenuWithIcons.args = {};

// MENU WITH ICON ONLY (HORIZONTAL)

export const HorizontalMenuWithIcons = { ...MenuWithIconsTemplate };
HorizontalMenuWithIcons.args = {
  direction: "horizontal",
};

// MENU WITH ICON AND TOOLTIP

const MenuWithIconsAndTooltipsTemplate: Story = {
  render: (args) => ({
    components: { Menu, HomeIcon, DetailIcon, ChartIcon, Tooltip },
    setup() {
      return { args };
    },
    template: MenuWithIconsAndTooltipsTplStr,
  }),
};
export const MenuWithIconsAndTooltips = { ...MenuWithIconsAndTooltipsTemplate };
MenuWithIconsAndTooltips.args = {};

// MENU WITH ICON AND TOOLTIP HORIZONTAL

const MenuWithIconsAndTooltipsHorizontalTemplate: Story = {
  render: (args) => ({
    components: { Menu, HomeIcon, DetailIcon, ChartIcon, Tooltip },
    setup() {
      return { args };
    },
    template: MenuWithIconsAndTooltipsHorizontalTplStr,
  }),
};
export const MenuWithIconsAndTooltipsHorizontal = {
  ...MenuWithIconsAndTooltipsHorizontalTemplate,
};
MenuWithIconsAndTooltipsHorizontal.args = {};

// MENU SIZES

const MenuSizesTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: MenuSizesTplStr,
  }),
};
export const MenuSizes = { ...MenuSizesTemplate };
MenuSizes.args = {};

// MENU WITH DISABLED ITEMS

const MenuWithDisabledItemsTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: MenuWithDisabledItemsTplStr,
  }),
};
export const MenuWithDisabledItems = { ...MenuWithDisabledItemsTemplate };
MenuWithDisabledItems.args = {};

// MENU WITH ICONS AND TEXT

const MenuWithIconsAndTextTemplate: Story = {
  render: (args) => ({
    components: { Menu, HomeIcon, DetailIcon, ChartIcon },
    setup() {
      return { args };
    },
    template: MenuWithIconsAndTextTplStr,
  }),
};
export const MenuWithIconsAndText = { ...MenuWithIconsAndTextTemplate };
MenuWithIconsAndText.args = {};

// MENU WITH ICONS AND BADGE RESPONSIVE

const MenuWithIconsAndBadgeResponsiveTemplate: Story = {
  render: (args) => ({
    components: { Menu, HomeIcon, DetailIcon, ChartIcon, Badge },
    setup() {
      return { args };
    },
    template: MenuWithIconsAndBadgeResponsiveTplStr,
  }),
};
export const MenuWithIconsAndBadgeResponsive = {
  ...MenuWithIconsAndBadgeResponsiveTemplate,
};
MenuWithIconsAndBadgeResponsive.args = {};

// MENU WITHOUT PADDING AND BORDER RADIUS

export const MenuWithoutPaddingAndBorderRadius = {
  ...DefaultMenuTemplate,
};
MenuWithoutPaddingAndBorderRadius.args = {
  rounded: false,
};

// MENU WITH TITLE

const MenuWithTitleTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: MenuWithTitleTplStr,
  }),
};
export const MenuWithTitle = { ...MenuWithTitleTemplate };
MenuWithTitle.args = {};

// MENU WITH TITLE AS A PARENT

const MenuWithTitleAsParentTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: MenuWithTitleAsParentTplStr,
  }),
};
export const MenuWithTitleAsParent = { ...MenuWithTitleAsParentTemplate };
MenuWithTitleAsParent.args = {};

// SUBMENU

const SubMenuTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: SubMenuTplStr,
  }),
};
export const SubMenu = { ...SubMenuTemplate };
SubMenu.args = {};

// COLLAPSIBLE SUBMENU

const CollapsibleSubMenuTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: CollapsibleSubMenuTplStr,
  }),
};
export const CollapsibleSubMenu = { ...CollapsibleSubMenuTemplate };
CollapsibleSubMenu.args = {};

// COLLAPSIBLE SUBMENU WITH CLASS NAMES

const CollapsibleSubMenuWithClassNamesTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: CollapsibleSubMenuWithClassNamesTplStr,
  }),
};
export const CollapsibleSubMenuWithClassNames = {
  ...CollapsibleSubMenuWithClassNamesTemplate,
};
CollapsibleSubMenuWithClassNames.args = {};

// FILE TREE

const FileTreeTemplate: Story = {
  render: (args) => ({
    components: {
      Menu,
      FileUserIcon,
      FolderClosedIcon,
      FileIcon,
      FileImageIcon,
    },
    setup() {
      return { args };
    },
    template: FileTreeTplStr,
  }),
};
export const FileTree = { ...FileTreeTemplate };
FileTree.args = {};

// MENU WITH ACTIVE ITEM

const MenuWithActiveItemTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: MenuWithActiveItemTplStr,
  }),
};
export const MenuWithActiveItem = { ...MenuWithActiveItemTemplate };
MenuWithActiveItem.args = {};

// MENU HORIZONTAL

export const MenuHorizontal = { ...DefaultMenuTemplate };
MenuHorizontal.args = {
  direction: "horizontal",
};

// HORIZONTAL SUBMENU

const HorizontalSubMenuTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: HorizontalSubMenuTplStr,
  }),
};
export const HorizontalSubMenu = { ...HorizontalSubMenuTemplate };
HorizontalSubMenu.args = {};

// MEGA MEGAMENU WITH SUBMENU RESPONSIVE

const MegaMenuWithSubMenuResponsiveTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: MegaMenuWithSubMenuResponsiveTplStr,
  }),
};
export const MegaMenuWithSubMenuResponsive = {
  ...MegaMenuWithSubMenuResponsiveTemplate,
};
MegaMenuWithSubMenuResponsive.args = {};

// COLLAPSIBLE WITH SUBMENU RESPONSIVE

const CollapsibleWithSubMenuResponsiveTemplate: Story = {
  render: (args) => ({
    components: { Menu },
    setup() {
      return { args };
    },
    template: CollapsibleWithSubMenuResponsiveTplStr,
  }),
};
export const CollapsibleWithSubMenuResponsive = {
  ...CollapsibleWithSubMenuResponsiveTemplate,
};
CollapsibleWithSubMenuResponsive.args = {};
