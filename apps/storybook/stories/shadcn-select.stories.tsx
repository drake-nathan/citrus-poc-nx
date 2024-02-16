import type { Meta, StoryObj } from "@storybook/react";

import { type Option, SelectBasic } from "@citrus-poc/select-shadcn";

const meta = {
  component: SelectBasic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Shadcn Select",
} satisfies Meta<typeof SelectBasic>;

export default meta;
type Story = StoryObj<typeof SelectBasic>;

const options: Option[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Eggplant", value: "eggplant" },
];

export const Basic = {
  args: {
    label: "Select a Fruit",
    options,
    placeholder: "Select a Fruit",
  },
} satisfies Story;
