import HeaderAlert from "@/components/Common/Header/HeaderAlert";
import HeaderNavDesktop from "@/components/Common/Header/HeaderNavDesktop";
import HeaderNavMobile from "@/components/Common/Header/HeaderNavMobile";
import { APP_ROUTES } from "@/constants/app-route.constant";
import { NavRoute } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

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
    name: "Tư vấn đại lý",
    href: APP_ROUTES.AGENCY,
  },
];

export default function Header() {
  return (
    <>
      <HeaderAlert />
      <header className="sticky top-0 z-50 shadow-md py-4 bg-background border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={APP_ROUTES.HOME} className="flex items-center gap-x-2">
            <Image
              src={Logo}
              alt="Logo"
              width={48}
              height={48}
              className="max-sm:w-8 max-sm:h-8"
            />
            <h1 className="font-bold text-4xl max-lg:text-2xl mt-1 font-great-vibes text-amber-600 text-nowrap">
              Vựa gạo Phước Thịnh
            </h1>
          </Link>
          <HeaderNavDesktop navRoutes={navRoutes} />
          <HeaderNavMobile navRoutes={navRoutes} />
        </div>
      </header>
    </>
  );
}
