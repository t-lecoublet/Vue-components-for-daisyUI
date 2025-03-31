import type { Meta, StoryObj } from "@storybook/vue3";
import Card from "@/components/DataDisplay/Card.vue";
import Button from "@/components/Actions/Button.vue";
import Badge from "@/components/DataDisplay/Badge.vue";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta: Meta<typeof Card> = {
  title: "Components/DataDisplay/Card",
  component: Card,
  argTypes: {
    ...useSizeStoriesControl,
    bordered: { control: "boolean" },
    dash: { control: "boolean" },
    side: { control: "boolean" },
    imageFull: { control: "boolean" },
    responsive: { control: "boolean" },
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const defaultTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Card Image" /></figure>
    <div class="card-body">
      <h2 class="card-title">Titre de la carte</h2>
      <p>Si un poisson vivait sur terre, irait-il à la mer en vacances ?</p>
      <div class="card-actions justify-end">
        <Button variant="primary">Accepter</Button>
      </div>
    </div>
  </Card>
`;

const cardWithSlotsTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm">
    <template #figure>
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Card Image" /></figure>
    </template>
    <template #title>Titre avec slot</template>
    <p>Contenu de la carte utilisant des slots nommés.</p>
    <template #actions>
      <Button variant="primary" class="ml-auto">Action</Button>
    </template>
  </Card>
`;

const cardWithPropTitleTplStr = `
  <Card v-bind="args" title="Titre via prop" class="w-96 bg-base-100 shadow-sm">
    <template #figure>
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Card Image" /></figure>
    </template>
    <p>Cette carte utilise la prop title pour définir son titre.</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary">Action</Button>
      </div>
    </template>
  </Card>
`;

const cardWithBodySlotTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm">
    <template #figure>
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Card Image" /></figure>
    </template>
    <template #body>
      <div class="card-body">
        <h2 class="card-title">Titre personnalisé</h2>
        <p>Cette carte utilise le slot body pour un contrôle total du contenu.</p>
        <div class="card-actions justify-end">
          <Button variant="primary">Action personnalisée</Button>
        </div>
      </div>
    </template>
  </Card>
`;

const cardWithContentSlotTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm">
    <template #content>
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Card Image" /></figure>
      <div class="card-body">
        <h2 class="card-title">Contrôle total</h2>
        <p>Cette carte utilise le slot content pour un contrôle total de la structure.</p>
        <div class="card-actions justify-end">
          <Button variant="primary">Action</Button>
        </div>
      </div>
    </template>
  </Card>
`;

const pricingCardTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm">
    <template #body>
      <div class="card-body">
        <Badge variant="warning" size="xs">Most Popular</Badge>
        <div class="flex justify-between">
          <h2 class="text-3xl font-bold">Premium</h2>
          <span class="text-xl">$29/mo</span>
        </div>
        <ul class="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            <span>High-resolution image generation</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            <span>Customizable style templates</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            <span>Batch processing capabilities</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            <span>AI-driven image enhancements</span>
          </li>
          <li class="opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            <span class="line-through">Seamless cloud integration</span>
          </li>
          <li class="opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            <span class="line-through">Real-time collaboration tools</span>
          </li>
        </ul>
        <div class="mt-6">
          <Button variant="primary" block>Subscribe</Button>
        </div>
      </div>
    </template>
  </Card>
`;

const cardWithoutImageTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm" title="Titre de la carte">
    <p>Cette carte n'a pas d'image, mais elle a du contenu.</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary">Accepter</Button>
      </div>
    </template>
  </Card>
`;

const cardSideTplStr = `
  <Card v-bind="args" side class="w-96 bg-base-100 shadow-sm">
    <template #figure>
      <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie"/></figure>
    </template>
    <template #title>New movie is released!</template>
    <p>Click the button to watch on Jetflix app.</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary">Watch</Button>
      </div>
    </template>
  </Card>
`;

const cardImageFullTplStr = `
  <Card v-bind="args" imageFull class="w-96 bg-base-100 shadow-sm">
    <template #figure>
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Card Image" /></figure>
    </template>
    <template #title><span class="text-white">Image en plein écran</span></template>
    <p class="text-white">L'image couvre toute la carte et le texte est superposé.</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary">Accepter</Button>
      </div>
    </template>
  </Card>
`;

const cardWithBadgeTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm">
    <template #figure>
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
    </template>
    <template #title>
      Card Title
      <Badge variant="secondary">NEW</Badge>
    </template>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Badge outline>Fashion</Badge>
        <Badge outline class="ml-2">Products</Badge>
      </div>
    </template>
  </Card>
`;

const cardBottomImageTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm">
    <template #body>
      <div class="card-body">
        <h2 class="card-title">Card Title</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      </div>
    </template>
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
  </Card>
`;

const cardCenteredTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm">
    <template #figure>
      <figure class="px-10 pt-10">
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" class="rounded-xl" />
      </figure>
    </template>
    <template #body>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Card Title</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div class="card-actions">
          <Button variant="primary">Buy Now</Button>
        </div>
      </div>
    </template>
  </Card>
`;

const cardCustomColorTplStr = `
  <Card v-bind="args" class="w-96 bg-primary text-primary-content">
    <template #title>Card title!</template>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button>Buy Now</Button>
      </div>
    </template>
  </Card>
`;

const cardNeutralTplStr = `
  <Card v-bind="args" class="w-96 bg-neutral text-neutral-content">
    <template #body>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Cookies!</h2>
        <p>We are using cookies for no reason.</p>
        <div class="card-actions justify-end">
          <Button variant="primary">Accept</Button>
          <Button ghost>Deny</Button>
        </div>
      </div>
    </template>
  </Card>
`;

const cardActionTopTplStr = `
  <Card v-bind="args" class="w-96 bg-base-100 shadow-sm">
    <template #body>
      <div class="card-body">
        <div class="card-actions justify-end">
          <Button square size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </Button>
        </div>
        <p>We are using cookies for no reason.</p>
      </div>
    </template>
  </Card>
`;

const cardResponsiveTplStr = `
  <Card v-bind="args" responsive class="bg-base-100 shadow-sm">
    <template #figure>
      <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album"/></figure>
    </template>
    <template #title>New album is released!</template>
    <p>Click the button to listen on Spotiwhy app.</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary">Listen</Button>
      </div>
    </template>
  </Card>
`;

const cardSizesTplStr = `
<div class="flex flex-col gap-4">
  <Card v-bind="args" size="xs" class="w-96 bg-base-100 shadow-sm">
    <template #title>Xsmall Card</template>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary" size="xs">Buy Now</Button>
      </div>
    </template>
  </Card>
  
  <Card v-bind="args" size="sm" class="w-96 bg-base-100 shadow-sm">
    <template #title>Small Card</template>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary" size="sm">Buy Now</Button>
      </div>
    </template>
  </Card>
  
  <Card v-bind="args" size="md" class="w-96 bg-base-100 shadow-sm">
    <template #title>Medium Card</template>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary" size="md">Buy Now</Button>
      </div>
    </template>
  </Card>
  
  <Card v-bind="args" size="lg" class="w-96 bg-base-100 shadow-sm">
    <template #title>Large Card</template>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary" size="lg">Buy Now</Button>
      </div>
    </template>
  </Card>
  
  <Card v-bind="args" size="xl" class="w-96 bg-base-100 shadow-sm">
    <template #title>Xlarge Card</template>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary" size="xl">Buy Now</Button>
      </div>
    </template>
  </Card>
</div>
`;

const cardBorderedTplStr = `
  <Card v-bind="args" bordered class="w-96 bg-base-100">
    <template #title>Card Title</template>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary">Buy Now</Button>
      </div>
    </template>
  </Card>
`;

const cardDashTplStr = `
  <Card v-bind="args" dash class="w-96 bg-base-100">
    <template #title>Card Title</template>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <template #actions>
      <div class="justify-end flex w-full">
        <Button variant="primary">Buy Now</Button>
      </div>
    </template>
  </Card>
`;

// DEFAULT CARD

const TemplateCard: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const DefaultCard = { ...TemplateCard };

// CARD WITH SLOTS

const CardWithSlotsTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardWithSlotsTplStr,
  }),
  args: {},
};
export const CardWithSlots = { ...CardWithSlotsTemplate };

// CARD WITH PROP TITLE

const CardWithPropTitleTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardWithPropTitleTplStr,
  }),
  args: {
    title: "Titre via prop",
  },
};
export const CardWithPropTitle = { ...CardWithPropTitleTemplate };

// CARD WITH BODY SLOT

const CardWithBodySlotTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardWithBodySlotTplStr,
  }),
  args: {},
};
export const CardWithBodySlot = { ...CardWithBodySlotTemplate };

// CARD WITH CONTENT SLOT

const CardWithContentSlotTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardWithContentSlotTplStr,
  }),
  args: {},
};
export const CardWithContentSlot = { ...CardWithContentSlotTemplate };

// PRICING CARD

const PricingCardTemplate: Story = {
  render: (args) => ({
    components: { Card, Button, Badge },
    setup() {
      return { args };
    },
    template: pricingCardTplStr,
  }),
  args: {},
};
export const PricingCard = { ...PricingCardTemplate };

// CARD WITHOUT IMAGE

const CardWithoutImageTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardWithoutImageTplStr,
  }),
  args: {
    title: "Titre de la carte",
  },
};
export const CardWithoutImage = { ...CardWithoutImageTemplate };

// CARD WITH BADGE

const CardWithBadgeTemplate: Story = {
  render: (args) => ({
    components: { Card, Button, Badge },
    setup() {
      return { args };
    },
    template: cardWithBadgeTplStr,
  }),
  args: {},
};
export const CardWithBadge = { ...CardWithBadgeTemplate };

// CARD WITH BOTTOM IMAGE

const CardBottomImageTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardBottomImageTplStr,
  }),
  args: {},
};
export const CardBottomImage = { ...CardBottomImageTemplate };

// CARD CENTERED

const CardCenteredTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardCenteredTplStr,
  }),
  args: {},
};
export const CardCentered = { ...CardCenteredTemplate };

// CARD SIDE

const CardSideTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardSideTplStr,
  }),
  args: {
    side: true,
  },
};
export const CardSide = { ...CardSideTemplate };

// CARD IMAGE FULL

const CardImageFullTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardImageFullTplStr,
  }),
  args: {
    imageFull: true,
  },
};
export const CardImageFull = { ...CardImageFullTemplate };

// CARD CUSTOM COLOR

const CardCustomColorTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardCustomColorTplStr,
  }),
  args: {},
};
export const CardCustomColor = { ...CardCustomColorTemplate };

// CARD NEUTRAL

const CardNeutralTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardNeutralTplStr,
  }),
  args: {},
};
export const CardNeutral = { ...CardNeutralTemplate };

// CARD ACTION TOP

const CardActionTopTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardActionTopTplStr,
  }),
  args: {},
};
export const CardActionTop = { ...CardActionTopTemplate };

// CARD RESPONSIVE

const CardResponsiveTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardResponsiveTplStr,
  }),
  args: {
    responsive: true,
  },
};
export const CardResponsive = { ...CardResponsiveTemplate };

// CARD SIZES

const CardSizesTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardSizesTplStr,
  }),
  args: {},
};
export const CardSizes = { ...CardSizesTemplate };

// CARD BORDERED

const CardBorderedTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardBorderedTplStr,
  }),
  args: {
    bordered: true,
  },
};
export const CardBordered = { ...CardBorderedTemplate };

// CARD DASH

const CardDashTemplate: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup() {
      return { args };
    },
    template: cardDashTplStr,
  }),
  args: {
    dash: true,
  },
};
export const CardDash = { ...CardDashTemplate }; 