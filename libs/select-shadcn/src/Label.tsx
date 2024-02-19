import { forwardRef } from "react";

import { cn } from "@citrus-poc-nx/tools";

const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ children, className, ...props }, ref) => (
  <label
    className={cn(
      "px-3 py-1 text-sm font-semibold text-label-text-color",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </label>
));

Label.displayName = "Label";

export default Label;
