import type { Meta, StoryObj } from "@storybook/react";

import { type Option, SelectBaseUi } from "@citrus-poc/select-baseui";

const meta = {
  component: SelectBaseUi,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Base UI Select",
} satisfies Meta<typeof SelectBaseUi>;

export default meta;
type Story = StoryObj<typeof SelectBaseUi>;

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
  },
} satisfies Story;
