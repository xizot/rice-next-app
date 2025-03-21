import React from "react";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex mb-6">
      <h2
        className="text-2xl font-semibold text-primary border-t-2
     border-t-primary pt-2"
      >
        {title}
      </h2>
      <div className="bg-gray-200 h-0.5 flex-[1]"></div>
    </div>
  );
}
