import React from "react";
import { cn } from "../../utils/cn";

export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-lg", className)} {...props} />
));
Card.displayName = "Card";

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("mb-4", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

export const CardContent = ({ className, ...props }) => (
  <div className={cn("flex-1 flex flex-col gap-2", className)} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = ({ className, ...props }) => (
  <div className={cn("mt-4", className)} {...props} />
);
CardFooter.displayName = "CardFooter"; 