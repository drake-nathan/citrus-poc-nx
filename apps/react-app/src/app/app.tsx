// eslint-disable-next-line @nx/enforce-module-boundaries
import { SelectStatic } from "../../../../dist/select-static";

function App() {
  return (
    <div className="flex h-svh flex-col items-center gap-4 p-4">
      <h1>Welcome to react-app!</h1>

      <SelectStatic
        options={[
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Orange", value: "orange" },
          { label: "Watermelon", value: "watermelon" },
        ]}
        placeholder="Select a fruit"
      />
    </div>
  );
}

export default App;
