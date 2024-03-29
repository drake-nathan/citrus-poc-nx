import type { Meta, StoryObj } from "@storybook/react";

import { type Option, SelectStatic } from "@citrus-poc/select-static";

const meta = {
  component: SelectStatic,
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25em" }}>
      <label htmlFor="select-static-story">Select a Fruit</label>
      <SelectStatic id="select-static-story" {...args} />
    </div>
  ),
  tags: ["autodocs"],
  title: "Select Static",
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
