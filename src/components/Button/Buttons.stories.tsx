import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Design System/Buttons",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "This is a button component. It should be used to trigger actions in your application.",
      },
    },
  },
  argTypes: {
    children: {
      control: "children",
      description: "The children that will be displayed on the button.",
    },
    disabled: {
      control: "boolean",
      description:
        "Disable the button. It will still be rendered, but it will be greyed out and not clickable.",
    },
    onClick: {
      action: "clicked",
      description:
        "The function that will be called when the button is clicked.",
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Button children={args.children} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  disabled: false,
  onClick: () => console.log("Button Clicked"),
};
