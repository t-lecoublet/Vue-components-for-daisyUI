/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  // viteFinal: (config) => {
  //   config.css = {
  //     preprocessorOptions: {
  //       postcss: true,
  //     },
  //   };
  //   return config;
  // },
};
export default config;
