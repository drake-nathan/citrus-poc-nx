import * as St from "./styles";

export interface Option {
  label: string;
  value: string;
}

export interface SelectBaseUiProps
  extends React.ComponentProps<typeof St.Select> {
  options: Option[];
}

export default function SelectBaseUi({
  defaultValue,
  options,
  ...props
}: SelectBaseUiProps): React.JSX.Element {
  return (
    <St.Select
      aria-label="Fruit"
      defaultValue={defaultValue ?? options[0].value}
      {...props}
      slots={{
        listbox: St.ListBox,
        popup: St.Popup,
        root: St.Trigger,
      }}
    >
      {options.map((option, i) => (
        <St.Item key={`${option.value}-${i}`} value={option.value}>
          {option.label}
        </St.Item>
      ))}
    </St.Select>
  );
}
