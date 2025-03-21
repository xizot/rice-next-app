"use client";

import { ModeToggle } from "@/components/Common/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavRoute } from "@/types/common";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

type HeaderNavMobileProps = {
  navRoutes: NavRoute[];
};

export default function HeaderNavMobile({ navRoutes }: HeaderNavMobileProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="gap-4 items-center flex lg:hidden">
      <ModeToggle />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Bars3Icon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <h2>Trang</h2>
            </SheetTitle>
          </SheetHeader>
          <div className="p-4 overflow-auto">
            <div className="space-y-4">
              {navRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="nav-item block"
                  onClick={() => setOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
