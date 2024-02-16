/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jest/expect-expect */
import { Option as OptionBaseUi, Select as SelectBaseUi } from "@mui/base";
import { MenuItem, Select as SelectMui } from "@mui/material";
import * as Select from "@radix-ui/react-select";
import { render } from "@testing-library/react";
import { ChevronDownIcon } from "lucide-react";

import {
  Select as CitrusSelect,
  SelectStatic as CitrusSelectStatic,
} from "@citrus/input-select";
import { Citron } from "@citrus/user";

import { type Option, SelectStatic } from ".";

const options: Option[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Eggplant", value: "eggplant" },
];

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn(),
}));

describe("Select Render Tests", () => {
  const arr = [...Array(1000).keys()];

  test("1000 Native HTML Select renders", () => {
    const jsx = arr.map((i) => (
      <SelectStatic key={i} options={options} placeholder="Select a Fruit" />
    ));

    render(<>{jsx}</>);
  });

  test("1000 Citrus Select Static renders", () => {
    const jsx = arr.map((i) => (
      <Citron key={i}>
        <CitrusSelectStatic
          id={`citrus-select-static-${i}`}
          options={options}
          placeholder="Select a Fruit"
        />
      </Citron>
    ));

    render(<>{jsx}</>);
  });

  test("1000 Citrus Select Styled renders", () => {
    const jsx = arr.map((i) => (
      <Citron key={i}>
        <CitrusSelect
          id={`citrus-select-${i}`}
          options={options}
          placeholder="Select a Fruit"
        />
      </Citron>
    ));

    render(<>{jsx}</>);
  });

  test("1000 Radix Select renders", () => {
    const jsx = arr.map((i) => (
      <Select.Root key={i}>
        <Select.Trigger
          aria-label="Fruit"
          className="text-violet11 hover:bg-mauve3 data-[placeholder]:text-violet9 inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        >
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon className="text-violet11">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.Viewport className="p-[5px]">
              <Select.Group>
                {options.map((option) => (
                  <Select.Item key={option.value} value={option.value}>
                    {option.label}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    ));

    render(<>{jsx}</>);
  });

  test("1000 MUI (core) renders", () => {
    const jsx = arr.map((i) => (
      <SelectMui
        id="demo-simple-select"
        key={i}
        label="Fruit"
        value={options[0].value}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectMui>
    ));

    render(<>{jsx}</>);
  });

  test("1000 Base UI renders", () => {
    const jsx = arr.map((i) => (
      <SelectBaseUi defaultValue={options[0].value} key={i}>
        {options.map((option) => (
          <OptionBaseUi key={option.value} value={option.value}>
            {option.label}
          </OptionBaseUi>
        ))}
      </SelectBaseUi>
    ));

    render(<>{jsx}</>);
  });
});
