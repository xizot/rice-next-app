import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import CharityImg1 from "@/assets/images/charity/charity-1.jpg";
import { Button } from "@/components/ui/button";

export default function Agency() {
  return (
    <div>
      <Section>
        <p>
          Bạn cần nguồn gạo chất lượng, giá sỉ để kinh doanh? Chúng tôi cung cấp
          gạo sạch, đa dạng (tấm, nếp, trắng), đóng túi sẵn 5kg, 10kg, 25kg, phù
          hợp mọi nhu cầu đại lý.
        </p>

        <h3 className="mt-6 mb-2 text-2xl font-medium text-primary">
          Vựa gạo Phước Thịnh
        </h3>
        <p>
          - Gạo ngon, an toàn, không pha trộn.
          <br />
          - Giá cạnh tranh, chiết khấu hấp dẫn.
          <br />- Giao hàng miễn phí từ 200kg (nội thành TP.HCM).
        </p>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative min-h-64">
            <Image
              src={CharityImg1}
              fill
              alt="Gạo cho đại lý"
              className="rounded-md shadow-md object-cover"
            />
          </div>
          <div>
            <p>
              Hơn 8 năm kinh nghiệm, chúng tôi cam kết hỗ trợ đại lý tối đa: tư
              vấn sản phẩm, chính sách giá sỉ, vận chuyển linh hoạt. Hãy cùng
              mang gạo ngon đến mọi nhà!
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-accent dark:border-t">
        <div className="lg:flex justify-between items-center">
          <div>
            <p className="text-3xl font-medium text-primary mb-2">
              Trở thành đại lý ngay!
            </p>
            <p>Gọi ngay để nhận tư vấn và báo giá tốt nhất.</p>
          </div>
          <a href="tel:0859888905">
            <Button className="mt-4">Liên hệ ngay</Button>
          </a>
        </div>
      </Section>
    </div>
  );
}
