import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title?: string;
  className?: React.ComponentProps<"div">["className"];
}>;

export default function Section({ title, children, className }: SectionProps) {
  return (
    <div className={cn("py-8 lg:py-12", className)}>
      <div className="container mx-auto">
        {title && <SectionTitle title={title} />}
        {children}
      </div>
    </div>
  );
}
