import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
  args: {
    placeholder: "Input",
  },
};

const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = { size: "small" };
export const Medium = Template.bind({});
Medium.args = { size: "medium", placeholder: "Medium size" };
export const Large = () => <Input size="large" placeholder="Large size" />;

Small.storyName = "Small Input";
