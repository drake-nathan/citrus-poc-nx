import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "@citrus-poc/select-shadcn";

function App() {
  return (
    <div className="flex h-svh flex-col items-center gap-4 p-4">
      <SelectRoot>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </SelectRoot>
    </div>
  );
}

export default App;
