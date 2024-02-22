import { Option as ItemBase, Select as SelectBase } from "@mui/base";
import { styled } from "@mui/system";

import { tokens } from "./tokens";

export const Select = styled(SelectBase)`
  min-width: 250px;
  border: 1px solid ${tokens.selectInputBorderColor};
  background-color: ${tokens.selectInputBackgroundColor};
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Trigger = styled("button")`
  padding-inline: 0.75rem;
  padding-block: 0.5rem;
  text-align: left;
  cursor: pointer;
`;

export const Item = styled(ItemBase)`
  cursor: pointer;
  color: var(--select-input-text-color);
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ListBox = styled("ul")`
  background-color: #fff;
  padding: 0.25rem;
  border: 1px solid ${tokens.selectInputBorderColor};
  border-radius: 0.5rem;
  margin-top: 0.25rem;
`;

export const Popup = styled("div")`
  width: 250px;
`;
