import type { Meta, StoryObj } from "@storybook/vue3";
import Table from "@/components/DataDisplay/Table.vue";
import TableItem from "@/components/DataDisplay/TableItem.vue";
import Badge from "@/components/DataDisplay/Badge.vue";
import Button from "@/components/Actions/Button.vue";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta = {
  title: "Components/DataDisplay/Table",
  component: Table,
  argTypes: {
    ...useSizeStoriesControl,
    columns: {
      control: "object",
      description:
        "Array of column definitions with key, label and optional customClass",
    },
    rows: {
      control: "object",
      description:
        "Array of row data objects with id and values corresponding to column keys",
    },
    zebra: {
      control: "boolean",
      description: "Apply zebra-striping to table rows",
    },
    pinRows: {
      control: "boolean",
      description: "Pin header and footer rows",
    },
    pinCols: {
      control: "boolean",
      description: "Pin first column",
    },
    customClass: {
      control: "text",
      description: "Custom class to apply to the table",
    },
  },
  args: {
    columns: [
      { key: "name", label: "Name" },
      { key: "job", label: "Job" },
      { key: "status", label: "Status" },
      { key: "action", label: "Action" },
    ],
    rows: [
      {
        id: 1,
        name: "Cy Ganderton",
        job: "Quality Control Specialist",
        status: "active",
      },
      {
        id: 2,
        name: "Hart Hagerty",
        job: "Desktop Support Technician",
        status: "inactive",
      },
      {
        id: 3,
        name: "Brice Swyre",
        job: "Tax Accountant",
        status: "active",
      },
    ],
    zebra: false,
    pinRows: false,
    pinCols: false,
    size: "default",
    customClass: "",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Zebra: Story = {
  args: {
    zebra: true,
  },
};

export const PinnedRows: Story = {
  args: {
    pinRows: true,
  },
  render: (args: any) => ({
    components: { Table },
    setup() {
      return { args };
    },
    template: `
                <Table v-bind="args" class="h-28"></Table>
        `,
  }),
};

export const PinnedColumns: Story = {
  args: {
    pinCols: true,
  },
};

export const CompactSize: Story = {
  args: {
    size: "xs",
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg",
  },
};

export const WithCustomCells: Story = {
  render: (args: any) => ({
    components: { Table, Badge, Button },
    setup() {
      const columns = [
        { key: "name", label: "Name" },
        { key: "job", label: "Job" },
        { key: "status", label: "Status" },
        { key: "action", label: "Action" },
      ];

      const rows = [
        {
          id: 1,
          name: "Cy Ganderton",
          job: "Quality Control Specialist",
          status: "active",
        },
        {
          id: 2,
          name: "Hart Hagerty",
          job: "Desktop Support Technician",
          status: "inactive",
        },
        {
          id: 3,
          name: "Brice Swyre",
          job: "Tax Accountant",
          status: "active",
        },
      ];

      return { columns, rows };
    },
    template: `
      <Table :columns="columns" :rows="rows" zebra>
        <template #cell-status="{ value }">
          <Badge 
            :variant="value === 'active' ? 'success' : 'error'" 
            size="sm"
          >
            {{ value }}
          </Badge>
        </template>
        <template #cell-action>
          <Button variant="primary" size="xs">View</Button>
        </template>
      </Table>
    `,
  }),
};

export const WithFooter: Story = {
  args: {
    footer: true,
  },
};

export const ManualMode: Story = {
  render: (args: any) => ({
    components: { Table, TableItem, Badge, Button },
    setup() {
      return { args };
    },
    template: `
      <Table zebra size="md">
        <thead>
          <tr>
            <TableItem isHeader>Name</TableItem>
            <TableItem isHeader>Job</TableItem>
            <TableItem isHeader>Status</TableItem>
            <TableItem isHeader>Action</TableItem>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableItem>Cy Ganderton</TableItem>
            <TableItem>Quality Control Specialist</TableItem>
            <TableItem>
              <Badge variant="success" size="sm">active</Badge>
            </TableItem>
            <TableItem>
              <Button variant="primary" size="xs">View</Button>
            </TableItem>
          </tr>
          <tr>
            <TableItem>Hart Hagerty</TableItem>
            <TableItem>Desktop Support Technician</TableItem>
            <TableItem>
              <Badge variant="error" size="sm">inactive</Badge>
            </TableItem>
            <TableItem>
              <Button variant="primary" size="xs">View</Button>
            </TableItem>
          </tr>
          <tr>
            <TableItem>Brice Swyre</TableItem>
            <TableItem>Tax Accountant</TableItem>
            <TableItem>
              <Badge variant="success" size="sm">active</Badge>
            </TableItem>
            <TableItem>
              <Button variant="primary" size="xs">View</Button>
            </TableItem>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <TableItem colspan="4" customClass="text-right font-bold">
              Total Employees: 3
            </TableItem>
          </tr>
        </tfoot>
      </Table>
    `,
  }),
};

export const ComplexTable: Story = {
  render: (args: any) => ({
    components: { Table, TableItem, Badge },
    setup() {
      return { args };
    },
    template: `
      <Table zebra size="sm" customClass="border border-base-300">
        <thead>
          <tr>
            <TableItem isHeader customClass="bg-primary text-primary-content">Product</TableItem>
            <TableItem isHeader customClass="bg-primary text-primary-content">Category</TableItem>
            <TableItem isHeader customClass="bg-primary text-primary-content">Price</TableItem>
            <TableItem isHeader customClass="bg-primary text-primary-content">Stock</TableItem>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableItem>Smartphone XYZ</TableItem>
            <TableItem>Electronics</TableItem>
            <TableItem>$599</TableItem>
            <TableItem>
              <Badge variant="success" size="sm">In stock</Badge>
            </TableItem>
          </tr>
          <tr>
            <TableItem>Laptop ABC</TableItem>
            <TableItem>Electronics</TableItem>
            <TableItem>$1299</TableItem>
            <TableItem>
              <Badge variant="warning" size="sm">Limited stock</Badge>
            </TableItem>
          </tr>
          <tr>
            <TableItem>Headphones DEF</TableItem>
            <TableItem>Accessories</TableItem>
            <TableItem>$199</TableItem>
            <TableItem>
              <Badge variant="error" size="sm">Out of stock</Badge>
            </TableItem>
          </tr>
          <tr>
            <TableItem>Smartwatch GHI</TableItem>
            <TableItem>Accessories</TableItem>
            <TableItem>$299</TableItem>
            <TableItem>
              <Badge variant="success" size="sm">In stock</Badge>
            </TableItem>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <TableItem colspan="4" customClass="text-right">
              <div class="flex justify-between">
                <span>Updated: 06/01/2023</span>
                <span class="font-bold">Total products: 4</span>
              </div>
            </TableItem>
          </tr>
        </tfoot>
      </Table>
    `,
  }),
};
