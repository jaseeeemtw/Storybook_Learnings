/** @type { import('@storybook/react').Preview } */
import Center from "../src/components/Center/Center";
//adding global decorators
export const decorators = [(story) => <Center>{story()}</Center>];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
