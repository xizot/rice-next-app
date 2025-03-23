import HeaderAlert from "@/components/Common/Header/HeaderAlert";
import HeaderNavDesktop from "@/components/Common/Header/HeaderNavDesktop";
import HeaderNavMobile from "@/components/Common/Header/HeaderNavMobile";
import { APP_ROUTES } from "@/constants/app-route.constant";
import { NavRoute } from "@/types/common";
import Link from "next/link";

const navRoutes: NavRoute[] = [
  {
    name: "Trang chủ",
    href: APP_ROUTES.HOME,
  },
  {
    name: "Sản phẩm",
    href: APP_ROUTES.SHOP,
  },
  {
    name: "Gạo từ thiện",
    href: APP_ROUTES.CHARITY,
  },
  {
    name: "Các loại gạo ngon",
    href: APP_ROUTES.RICE,
  },
  {
    name: "Bảng giá gạo",
    href: APP_ROUTES.PRICE,
  },
  {
    name: "Tư vấn đại lý",
    href: APP_ROUTES.AGENCY,
  },
  {
    name: "Liên hệ",
    href: APP_ROUTES.CONTACT_US,
  },
];

export default function Header() {
  return (
    <>
      <HeaderAlert />
      <header className="sticky top-0 z-50 bg-white shadow-md py-4  dark:bg-accent">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-foreground">
            LOGO
          </Link>
          <HeaderNavDesktop navRoutes={navRoutes} />
          <HeaderNavMobile navRoutes={navRoutes} />
        </div>
      </header>
    </>
  );
}
