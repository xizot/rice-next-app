import { ModeToggle } from "@/components/Common/ModeToggle";
import { NavRoute } from "@/types/common";
import Link from "next/link";
import React from "react";

type HeaderNavDesktopProps = {
  navRoutes: NavRoute[];
};

export default function HeaderNavDesktop({ navRoutes }: HeaderNavDesktopProps) {
  return (
    <ul className="gap-6 items-center hidden lg:flex">
      {navRoutes.map((route) => (
        <li key={route.href}>
          <Link href={route.href} className="nav-item">
            Trang chủ
          </Link>
        </li>
      ))}
      <li>
        <ModeToggle />
      </li>
    </ul>
  );
}
