import { Button } from "@mui/material";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "MUI Button",
  Component: Button,
  //  argTypes: {
  //    onClick: { action: "clicked" },
  //  },
};

const Template = (args) => (
  <Button {...args} onClick={action("button-click")} />
);
const Template1 = (args) => (
  <Button {...args} {...actions("onClick", "onMouseOver")} />
);

export const PrimaryButtonA = Template.bind({});
PrimaryButtonA.args = {
  variant: "contained",
  children: "Mui Button",
};
export const PrimaryButtonB = Template1.bind({});
PrimaryButtonB.args = {
  variant: "contained",
  children: "Mui Button",
};

export const PrimaryButton = () => (
  <Button variant="contained">MUI Primary Button</Button>
);

PrimaryButton.storyName = "mui-primary";
