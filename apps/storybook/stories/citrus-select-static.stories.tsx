import type { Meta, StoryObj } from "@storybook/react";

import { type IOption, SelectStatic } from "@citrus/input-select";

const meta = {
  component: SelectStatic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Citrus Select Static",
} satisfies Meta<typeof SelectStatic>;

export default meta;
type Story = StoryObj<typeof SelectStatic>;

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
