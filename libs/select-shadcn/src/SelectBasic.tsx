import { cn } from "@citrus-poc-nx/tools";

import Footnote from "./Footnote";
import Label from "./Label";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "./shadcn";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  /** The `aria-label` attribute for the select */
  "aria-label"?: string;
  /** The `autoComplete` attribute for the select */
  autoComplete?: string;
  /** Additional classes to add */
  className?: string;
  /** Whether the select is open by default */
  defaultOpen?: boolean;
  /** The default value of the select */
  defaultValue?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** String for footnote value */
  footnote?: string;
  /** Unique identifier for the select */
  id?: string;
  /** String for label value */
  label: string;
  /** Name of the select */
  name?: string;
  /** Event handler called when the select opens or closes */
  onOpenChange?(open: boolean): void;
  /** Event handler called when the value changes */
  onValueChange?(value: string): void;
  /** Whether the select is open */
  open?: boolean;
  /** Array of options */
  options: Option[];
  /** This text is used before a value has been selected. It also serves as the `aria-label` if none is explicitly given */
  placeholder: string;
  /** Whether the field is required */
  required?: boolean;
  /** The value of the select */
  value?: string;
}

const SelectBasic = ({
  className,
  disabled,
  footnote,
  label,
  options,
  placeholder,
  ...props
}: SelectProps): React.JSX.Element => {
  return (
    <div
      className={cn("flex w-[300px] flex-col gap-1", className)}
      data-automation-id="select-basic-container"
    >
      {label && <Label>{label}</Label>}

      <SelectRoot {...props}>
        <SelectTrigger
          aria-label={placeholder}
          className={className?.includes("citrus-error") ? "citrus-error" : ""}
          disabled={disabled}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectRoot>

      {footnote && <Footnote>{footnote}</Footnote>}
    </div>
  );
};

export default SelectBasic;
