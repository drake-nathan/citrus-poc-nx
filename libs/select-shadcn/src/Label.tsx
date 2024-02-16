import { forwardRef } from "react";

import { cn } from "@citrus-poc-nx/tools";

const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ children, className, ...props }, ref) => (
  <label
    className={cn("text-label-textColor p-1 text-sm font-semibold", className)}
    ref={ref}
    {...props}
  >
    {children}
  </label>
));

Label.displayName = "Label";

export default Label;
