import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function HeaderAlert() {
  return (
    <div className="bg-primary py-2 dark:bg-primary/40 max-lg:hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center">
          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-full">
              <MapPinIcon className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm font-semibold">
              197/9 Thạnh Lộc 31 Phường Thạnh Lộc Quận 12
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-full">
              <PhoneIcon className="w-4 h-4 text-primary" />
            </div>
            <p className="font-semibold text-sm">085 9888 905</p>
          </div>
        </div>
      </div>
    </div>
  );
}
