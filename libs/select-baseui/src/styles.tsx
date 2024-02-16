import { Option as ItemBase, Select as SelectBase } from "@mui/base";
import { styled } from "@mui/system";

import { tokens } from "./tokens";

export const Select = styled(SelectBase)`
  min-width: 120px;
  border: 1px solid ${tokens.selectInputBorderColor};
  background-color: ${tokens.selectInputBackgroundColor};
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Item = styled(ItemBase)`
  cursor: pointer;
  color: var(--select-input-text-color);

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ListBox = styled("ul")`
  background-color: #fff;
`;
