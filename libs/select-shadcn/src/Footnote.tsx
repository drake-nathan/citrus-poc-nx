import { forwardRef } from "react";

import { cn } from "@citrus-poc-nx/tools";

const Footnote = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
  <p
    className={cn("text-footnote-textColor p-1 text-xs", className)}
    ref={ref}
    {...props}
  >
    {children}
  </p>
));

Footnote.displayName = "Footnote";

export default Footnote;
