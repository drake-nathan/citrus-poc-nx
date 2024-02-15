import type { Meta, StoryObj } from "@storybook/react";

import { type IOption, Select } from "@citrus/input-select";

const meta = {
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Citrus Select",
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const options: IOption<string>[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Eggplant", value: "eggplant" },
];

export const Basic = {
  args: {
    id: "citrus-select-static-story",
    label: "Select a Fruit",
    options,
    placeholder: "Select a Fruit",
  },
} satisfies Story;
