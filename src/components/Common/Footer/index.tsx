import Section from "@/components/Section";
import { APP_ROUTES } from "@/constants/app-route.constant";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

export default function Footer () {
  return (
    <Section className="bg-gray-100 dark:bg-background dark:border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          <div>
            <div className="mb-2">
              <Link
                href={APP_ROUTES.HOME}
                className="flex items-center gap-x-2"
              >
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
            </div>
            <p className="mb-4">
              Chuyên cung cấp tất cả các loại gạo tấm nếp sạch giá sỉ toàn miền
              Nam. Cung cấp gạo cho các công ty xí nghiệp với thuế VAT 0%. Cam
              kết giá sỉ rẻ nhất thị trường!
            </p>
            <p>
              <b>Địa Chỉ</b>:{" "}287 Phan Văn Hớn, Q.12, TP.HCM
            </p>
            <p>
              <b>SĐT</b>:{" "}
              <a href="tel:0859888905">085 9888 905</a>
            </p>
            <p>
              <b>Email</b>:{" "}
              <a href="mailto:nvnhat.17ck1@gmail.com">vuagaophuocthinh@gmail.com</a>
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-4 uppercase">
              Thông tin tài khoản
            </p>
            <p>
              <b>Ngân hàng</b>: Vietcombank
            </p>
            <p>
              <b>Chủ tài khoản</b>: Vựa gạo Phước Thịnh
            </p>
            <p>
              <b>Số tài khoản</b>: xxxxxxxxx
            </p>
            <p>
              <b>Chi nhánh</b>: TP.HCM
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-4 uppercase">Vị trí</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7360019013!2d106.60860767570364!3d10.831503858174036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bc94d8a45bd%3A0xc6a2a6e0028ed8d2!2zMjg3IFBoYW4gVsSDbiBI4bubbiwgVMOibiBUaOG7m2kgTmjhuqV0LCBRdeG6rW4gMTIsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1742546426209!5m2!1sen!2s"
              loading="lazy"
              className="w-full h-64 rounded-sm shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}
