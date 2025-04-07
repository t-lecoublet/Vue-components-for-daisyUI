import type { Meta, StoryObj } from '@storybook/vue3'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs.vue'

const meta = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    items: {
      control: 'object',
      description: 'List of breadcrumb items'
    },
    separator: {
      control: 'text',
      description: 'Separator between breadcrumb items'
    }
  }
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/Products' },
      { label: 'Details' }
    ]
  }
}

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Products', href: '/Products', icon: '📦' },
      { label: 'Details', icon: '🔍' }
    ]
  }
}

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/Products' },
      { label: 'Details' }
    ],
    separator: '/'
  }
}