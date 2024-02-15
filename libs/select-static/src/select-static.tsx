import "./select.css";

export interface Option {
  label: string;
  value: string;
}

export interface SelectStaticProps
  extends React.HTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder: string;
  selectRef?: React.RefObject<HTMLSelectElement>;
}

export default function SelectStatic({
  options,
  placeholder,
  selectRef,
  ...props
}: SelectStaticProps): React.JSX.Element {
  return (
    <select className="citrus-poc-select-static" ref={selectRef} {...props}>
      <option disabled hidden value="">
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
