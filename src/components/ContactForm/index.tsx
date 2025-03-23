import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function ContactForm() {
  return (
    <Section className="bg-[#80b435] dark:bg-accent dark:border-t">
      <form className="bg-white dark:bg-background w-[40rem] max-w-full mx-auto p-6 rounded-lg space-y-4 shadow-lg">
        <p className="text-2xl font-medium mb-4">ĐĂNG KÝ NHẬN BÁO GIÁ</p>
        <p>
          Điền vào form bên cạnh nếu quý khách cần mua gạo với số lượng lớn
          (&gt;100kg) để được giá chiết khấu hấp dẫn. Gạo Sạch Online. Xin cám
          ơn!
        </p>
        <Input placeholder="Họ và tên" />
        <Input placeholder="Số điện thoại" />
        <Input placeholder="Số lượng sản phẩm" type="number" />
        <Input placeholder="Địa chỉ giao hàng" />
        <Button className="max-sm:w-full min-w-[250px] mx-auto block">
          Gửi
        </Button>
      </form>
    </Section>
  );
}
