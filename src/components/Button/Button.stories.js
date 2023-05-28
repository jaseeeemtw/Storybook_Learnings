import React from "react";
import Center from "../Center/Center";
import Button from "./Button";

export default {
  title: "Form/button",
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => <Button {...args} />;

export const Primary = () => <Button varient="primary">Primary</Button>;
export const Secondary = () => <Button varient="secondar">Secondary</Button>;

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  varient: "secondary",
  children: "Secondary A",
};
