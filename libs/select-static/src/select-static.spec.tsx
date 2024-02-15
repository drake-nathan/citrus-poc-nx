/* eslint-disable jest/expect-expect */
import { render } from "@testing-library/react";

import {
  Select as CitrusSelect,
  SelectStatic as CitrusSelectStatic,
} from "@citrus/input-select";

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
  test("1000 Select Static renders", () => {
    const start = performance.now();

    const arr = Array.from({ length: 1000 }, (_, i) => i);
    const jsx = arr.map((i) => (
      <SelectStatic key={i} options={options} placeholder="Select a Fruit" />
    ));

    render(<>{jsx}</>);

    const end = performance.now();
    console.log(
      `Select Static: Rendering 1000 components took ${Math.round(end - start)} ms`,
    );
  });

  test("1000 Citrus Select Static renders", () => {
    const start = performance.now();

    const arr = Array.from({ length: 1000 }, (_, i) => i);
    const jsx = arr.map((i) => (
      <CitrusSelectStatic
        id={`citrus-select-static-${i}`}
        key={i}
        options={options}
        placeholder="Select a Fruit"
      />
    ));

    render(<>{jsx}</>);

    const end = performance.now();
    console.log(
      `Citrus Select Static: Rendering 1000 components took ${Math.round(end - start)} ms`,
    );
  });

  test("1000 Select renders", () => {
    const start = performance.now();

    const arr = Array.from({ length: 1000 }, (_, i) => i);
    const jsx = arr.map((i) => (
      <CitrusSelect
        id={`citrus-select-${i}`}
        key={i}
        options={options}
        placeholder="Select a Fruit"
      />
    ));

    render(<>{jsx}</>);

    const end = performance.now();
    console.log(
      `Citrus Select: Rendering 1000 components took ${Math.round(end - start)} ms`,
    );
  });
});
