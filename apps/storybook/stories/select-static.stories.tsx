import type { Meta, StoryObj } from "@storybook/react";

import { type Option, SelectStatic } from "@citrus-poc/select-static";

const meta = {
  component: SelectStatic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Native Select",
} satisfies Meta<typeof SelectStatic>;

export default meta;
type Story = StoryObj<typeof SelectStatic>;

const options: Option[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Eggplant", value: "eggplant" },
];

export const Basic = {
  args: {
    options,
    placeholder: "Select a Fruit",
  },
} satisfies Story;
