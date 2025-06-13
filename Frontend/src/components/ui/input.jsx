import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef(
  ({ className, type = "text", ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm transition duration-150 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";
