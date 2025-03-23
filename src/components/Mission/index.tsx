import Section from "@/components/Section";
import Image from "next/image";
import MissionImg from "@/assets/images/mission/mission-1.jpg";

export default function Mission() {
  return (
    <Section
      title="Sứ mệnh của chúng tôi"
      className="bg-accent dark:border-t dark:border-b"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p>
            <b className="text-primary">Vựa gạo Thịnh Phát</b> được thành lập
            năm 2015 chuyên cung cấp tất cả các loại gạo tấm nếp cho các công ty
            nhà hàng quán ăn và các đại lý bán gạo,… Với sứ mệnh cung cấp các
            loại gạo sạch Miền Tây với giá rẻ cho mọi người.{" "}
            <b className="text-primary">Vựa gạo Thịnh Phát</b> tin rằng sẽ đáp
            ứng được không những gạo ngon gạo rẻ mà còn phải an toàn với sức
            khỏe của mọi người.
            <br />
            <br />
            Chúng tôi còn hỗ trợ các mạnh thường quân mua gạo từ thiện với chi
            phí rẻ mà chất lượng cho những người có hoàn cảnh khó khăn nhà chùa
            giao tận nơi hoàn toàn miễn phí. Rất mong được hợp tác với tất cả
            đối tác cần xa trao nhau những gói gạo đóng túi thơm ngon và bổ
            dưỡng nhất. Nếu có bất kỳ thắc mắc nào xin vui lòng liên hệ hotline:
            085 9888 905. Xin chân thành cảm ơn.
          </p>
        </div>
        <div className="relative">
          <Image
            src={MissionImg}
            alt=""
            height={280}
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>
      </div>
    </Section>
  );
}
