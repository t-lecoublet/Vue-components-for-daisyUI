import type { Meta, StoryObj } from "@storybook/vue3";
import Carousel from "@/components/DataDisplay/Carousel.vue";
import CarouselItem from "@/components/DataDisplay/CarouselItem.vue";
import Button from "@/components/Actions/Button.vue";

const meta: Meta<typeof Carousel> = {
  title: "Components/DataDisplay/Carousel",
  component: Carousel,
  argTypes: {
    start: { control: "boolean", description: "Snap elements to start" },
    center: { control: "boolean", description: "Snap elements to center" },
    end: { control: "boolean", description: "Snap elements to end" },
    vertical: { control: "boolean", description: "Use vertical layout" },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const basicCarouselTplStr = `
  <Carousel v-bind="args">
    <CarouselItem>
      <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      alt="Cone" />
    </CarouselItem>
    <CarouselItem>
          <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Grape" />
    </CarouselItem>
    <CarouselItem>
      <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Lemon" />
    </CarouselItem>
    <CarouselItem>
      <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      alt="Pineapple" />
    </CarouselItem>
    <CarouselItem>
      <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      alt="Cherry" />
    </CarouselItem>
    <CarouselItem>
      <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Strawberry" />
    </CarouselItem>
  </Carousel>
`;

const carouselWithNavigationTplStr = `
  <Carousel v-bind="args" class="w-full">
    <CarouselItem id="slide1" class="relative w-full">
      <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" class="w-full" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </CarouselItem>
    <CarouselItem id="slide2" class="relative w-full">
      <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" class="w-full" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </CarouselItem>
    <CarouselItem id="slide3" class="relative w-full">
      <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" class="w-full" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide4" class="btn btn-circle">❯</a>
      </div>
    </CarouselItem>
    <CarouselItem id="slide4" class="relative w-full">
      <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" class="w-full" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </CarouselItem>
  </Carousel>
`;

const verticalCarouselTplStr = `
  <Carousel v-bind="args" vertical class="h-96 rounded-box">
    <CarouselItem class="h-full">
      <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Carousel image" />
    </CarouselItem>
    <CarouselItem class="h-full">
      <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Carousel image" />
    </CarouselItem>
    <CarouselItem class="h-full">
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Carousel image" />
    </CarouselItem>
    <CarouselItem class="h-full">
      <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Carousel image" />
    </CarouselItem>
    <CarouselItem class="h-full">
      <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Carousel image" />
    </CarouselItem>
  </Carousel>
`;

const centeredCarouselTplStr = `
  <Carousel v-bind="args" center class="py-4 w-full">
    <CarouselItem class="mx-4 ml-[calc(1/3_*_100%)] w-1/3">
      <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Carousel image" class="rounded-box" />
    </CarouselItem>
    <CarouselItem class="mx-4 w-1/3">
      <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Carousel image" class="rounded-box" />
    </CarouselItem>
    <CarouselItem class="mx-4 w-1/3">
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Carousel image" class="rounded-box" />
    </CarouselItem>
    <CarouselItem class="mx-4 w-1/3">
      <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Carousel image" class="rounded-box" />
    </CarouselItem>
    <CarouselItem class="mx-4 mr-[calc(1/3_*_100%)] w-1/3">
      <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Carousel image" class="rounded-box" />
    </CarouselItem>
  </Carousel>
`;

const cardCarouselTplStr = `
  <Carousel v-bind="args" center class="py-4 w-full">
    <CarouselItem class="mx-2 w-1/3">
      <div class="card bg-base-100 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Card 1" /></figure>
        <div class="card-body">
          <h2 class="card-title">Card 1</h2>
          <p>A nice example of a card in a carousel.</p>
          <div class="card-actions justify-end">
            <Button variant="primary">Learn more</Button>
          </div>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem class="mx-2 w-1/3">
      <div class="card bg-base-100 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Card 2" /></figure>
        <div class="card-body">
          <h2 class="card-title">Card 2</h2>
          <p>A nice example of a card in a carousel.</p>
          <div class="card-actions justify-end">
            <Button variant="primary">Learn more</Button>
          </div>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem class="mx-2 w-1/3">
      <div class="card bg-base-100 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Card 3" /></figure>
        <div class="card-body">
          <h2 class="card-title">Card 3</h2>
          <p>A nice example of a card in a carousel.</p>
          <div class="card-actions justify-end">
            <Button variant="primary">Learn more</Button>
          </div>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem class="mx-2 w-1/3">
      <div class="card bg-base-100 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Card 4" /></figure>
        <div class="card-body">
          <h2 class="card-title">Card 4</h2>
          <p>A nice example of a card in a carousel.</p>
          <div class="card-actions justify-end">
            <Button variant="primary">Learn more</Button>
          </div>
        </div>
      </div>
    </CarouselItem>
  </Carousel>
`;

export const Basic: Story = {
  args: {
    start: true,
    center: false,
    end: false,
    vertical: false,
  },
  render: (args) => ({
    components: { Carousel, CarouselItem },
    setup() {
      return { args };
    },
    template: basicCarouselTplStr,
  }),
};

export const WithNavigation: Story = {
  args: {
    start: true,
    center: false,
    end: false,
    vertical: false,
  },
  render: (args) => ({
    components: { Carousel, CarouselItem },
    setup() {
      return { args };
    },
    template: carouselWithNavigationTplStr,
  }),
};

export const VerticalCarousel: Story = {
  args: {
    start: true,
    center: false,
    end: false,
    vertical: true,
  },
  render: (args) => ({
    components: { Carousel, CarouselItem },
    setup() {
      return { args };
    },
    template: verticalCarouselTplStr,
  }),
};

export const CenteredCarousel: Story = {
  args: {
    start: false,
    center: true,
    end: false,
    vertical: false,
  },
  render: (args) => ({
    components: { Carousel, CarouselItem },
    setup() {
      return { args };
    },
    template: centeredCarouselTplStr,
  }),
};

export const CardCarousel: Story = {
  args: {
    start: false,
    center: true,
    end: false,
    vertical: false,
  },
  render: (args) => ({
    components: { Carousel, CarouselItem, Button },
    setup() {
      return { args };
    },
    template: cardCarouselTplStr,
  }),
};
