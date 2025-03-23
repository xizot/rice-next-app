import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

import CharityImg1 from "@/assets/images/charity/charity-1.jpg";
import CharityImg2 from "@/assets/images/charity/charity-2.jpg";
import { Button } from "@/components/ui/button";

export default function Charity() {
  return (
    <div>
      <Section>
        <p>
          Phát gạo từ thiện là một hình động đẹp đẽ mang tính nhân văn nhất của
          con người. Bởi cuộc sống này là một vòng trong“ Sống là phải biết cho
          đi thì cuộc sống mới có giá trị và ý nghĩa”. Chúng ta làm điều tốt thì
          sớm hoặc muộn cũng sẽ được đáp lại, còn nếu cứ ích kỷ với người xung
          quanh mai sau sẽ nhận lấy nhiều thiệt thòi. Vậy là gì để nâng cao tính
          nhân văn này?
          <br />
          <br />
          Giúp đỡ người có hoàn cảnh khó khăn hơn mình bằng những chuyến từ
          thiện do mình tự lập ra. Hoặc nếu bây giờ bạn chưa có điều kiện nhiều
          thì có thể đóng góp và những chuyến đi cứu trợ tập thể. Hoặc có thể
          dùng tài năng của mình để giúp đỡ hoặc động viên cổ vũ tinh thần để
          cùng nhau vượt khó.
        </p>

        <h3 className="mt-6 mb-2 text-2xl font-medium text-primary">
          Gạo từ thiện sẻ chia yêu thương
        </h3>
        <p>
          Tùy vào ngân sách của từng đối tượng hoặc đơn vị tổ thường mà các phần
          quà được chuẩn bị lớn hoặc nhỏ khác nhau. Có thể giá trị mỗi phần quà
          không giống nhau nhưng đều thể hiện được tình đoàn kết và yêu thương
          dân tộc.
          <br />
          <br />
          Quà phát từ thiện có thể là bánh kẹo, quần áo, chăn, mền, mì tôm,
          gạo,… Trong đó mặt hàng gạo phát từ thiện là sự lựa hàng đầu của các
          mạnh thường quân. Bởi vì trong bất cứ hoàn cảnh khó khăn nào cũng luôn
          ao ước một bữa cơm trọn. Chỉ cần một người còn sống thêm một người
          trên đời là niềm vui và hạnh phúc. Vậy nên dù trên tay có nhiều quà
          bánh hay quần áo đẹp cũng không thể quý bằng một bát cơm.
          <br />
          <br />
          Hiểu được điều đó nên ngày nay các hoạt động từ thiện lưu ưu tiên lựa
          chọn gạo là quà tặng chính cho các chuyến đi của mình. Gạo từ thiện có
          thể được phân nhỏ thành từng túi 5kg hoặc 10kg sẵn. Sau đó vận chuyển
          đến các địa điểm tập trung như trường học, trại trẻ mồ côi, nhà dưỡng
          lão, Ủy ban xã, chùa,… Mỗi người một phần có thể kèm theo các phần quà
          nho nhỏ khác.
        </p>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative min-h-64">
            <Image
              src={CharityImg1}
              fill
              alt=""
              className="rounded-md shadow-md object-cover"
            />
          </div>
          <div>
            <h3 className="mt-6 mb-2 text-2xl font-medium text-primary">
              Vựa gạo Phước Thịnh
            </h3>
            <p>
              Chuyên cung cấp các loại gạo tấm nếp và các loại gạo đóng túi cho
              các mạnh thường quân để đi làm từ thiện. Gạo từ thiện từ công ty
              chúng tôi cam kết bán giá sỉ nhưng gạo đúng chất lượng để có thể
              đảm bảo có bữa cơm ngon cho người được trao tặng.
            </p>
          </div>
        </div>
        <h3 className="mt-6 mb-2 text-2xl font-medium text-primary">
          Nên mua gạo từ thiện ở đâu là an toàn nhất
        </h3>
        <p>
          Dù là mua gạo ăn gia đình hay mua gạo phát từ thiện thì cũng cần chọn
          gạo chất lượng. Giá cả phù hợp với ngân sách có thể tìm mua gạo rẻ
          nhưng phải sạch và an toàn thực phẩm. Để đảm bảo sức khỏe cho bản thân
          cũng như đảm bảo sức khỏe cho người khác. Bạn sẽ cần trang bị thêm cho
          mình những kiến thức cơ bản về gạo. Hiểu rõ tính chất lượng sản phẩm
          mình tìm kiếm. Như vậy khi mua hàng có thể tự kiểm tra xem có đúng
          gạo, đúng chất lượng hay không. Vì gạo cũng như những sản phẩm thông
          thường khác trên thị trường. Sản phẩm nào được khách hàng dùng nhiều
          thì sẽ có nhiều “bản sao” tương tự xuất hiện. Lợi dụng lòng tin của
          khách hàng vào sản phẩm những đối tượng không màng đến sức khỏe con
          người có thể dùng mọi cách để rao bán với giá rẻ hơn. Mà người Việt
          chúng ta thì lại vô cùng thích dùng hàng giá rẻ, cùng một cái tên
          nhưng rẻ hơn thì được chọn
        </p>
        <h3 className="mt-6 mb-2 text-2xl font-medium text-primary">
          Tránh Mua Nhầm Gạo Kém Chất Lượng
        </h3>
        <p>
          Gạo là một mặt hàng có thể nói là khó có thể phân biệt nhất trong các
          loại thực phẩm. Bởi hình dáng và kích thước các loại gạo khác nhau có
          thể tương tự nhau. Chỉ cần trộn đều một chút là có thể đánh lừa người
          dùng bằng mắt. Sau khi được pha trộn lại với nhau thì giá cả sẽ có sự
          chệnh lệch rõ rệt. Chỉ khi mua về và nấu lên ăn và từ từ cảm nhận mới
          có phân biệt gạo nào ngon hơn. Vậy nên khi mua gạo bạn đừng quá chú
          trọng về giá cả mà hãy quan tâm nhiều hơn về chất lượng. Gạo là nguyên
          liệu chính để chế biến bữa ăn mỗi ngày. Và bạn phải dùng hết ngày này
          đến ngày nọ nên hãy chọn những hạt gạo nào ngon và tốt cho cơ thể của
          mình. Một túi gạo ngon mang nhiều dinh dưỡng có thêm vài chục nghìn mà
          tốt cho cả gia đình thì hoàn toàn xứng đáng phải không.
        </p>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p>
            Hiện nay có rất nhiều của hàng bán gạo trôi nổi trên mạng mà không
            có giấy phép rõ ràng cũng như nguồn gốc xuất xứ. Vì thế, nếu bạn
            muốn có loại gạo đi từ thiện phù hợp với túi tiền mà đảm bảo chất
            lượng cho người nhận thì hãy nhất máy gọi để chúng tôi tư vấn. Tránh
            trường hợp chỉ so đo về giá mà lại mua nhầm loại không chất lượng ẩm
            mốc làm mất giá trị của món quà. Chúng tôi với kinh nghiệm hơn 8 năm
            tự tin là một trong những công ty phân phối gạo chất lượng tại
            Tp.HCM và các khu vực lân cận.
          </p>
          <div className="relative min-h-64">
            <Image
              src={CharityImg2}
              fill
              alt=""
              className="rounded-md shadow-md object-cover object-top"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-4 rounded-md dark:bg-background dark:border">
            <p className="text-2xl text-primary font-medium mb-2">
              Tư Vấn Báo Giá
            </p>
            <p>
              Chúng tôi tiếp nhận thông tin sau đó tư vấn loại gạo phù hợp với
              ngân sách của cá nhân hoạc tổ chức.
              <br />
              Đảm bảo với nguồn ngân sách hiện có quý khách có thể chọn được
              loại gạo chất lượng nhất với số lượng nhiều nhất có thể.
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-md dark:bg-background dark:border">
            <p className="text-2xl text-primary font-medium mb-2">
              Quy Trình Thanh Toán
            </p>
            <p>
              Chún tôi nhận thanh toán bằng chuyển khoản hoặc tiền mặt trước
              30%-50% giá trị đơn hàng. Vì mặt hàng gạo từ thiện đóng túi không
              có sẵn nên chúng tôi sẽ tiến hành đóng túi ngay khi nhận được tiền
              cọc thanh toán. Với biên nhận từ công ty rõ ràng nên quý khách yên
              tâm.
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-md dark:bg-background dark:border">
            <p className="text-2xl text-primary font-medium mb-2">
              Quy Trình Vận Chuyển
            </p>
            <p>
              Chúng tôi hỗ trợ vận chuyển tận nơi miễn phí. Có hỗ trợ giao nhiều
              địa chỉ với điều kiện ở mỗi địa chỉ phải có số lượng &gt;=200kg.
              <br />
              Đảm bảo vận chuyển đúng ngày giờ mà khách hàng đã đặt ra.
            </p>
          </div>
        </div>
      </Section>
      <Section className="bg-accent dark:border-t">
        <div className="lg:flex justify-between items-center">
          <div>
            <p className="mt-6 text-3xl font-medium text-primary mb-2">
              Hãy để chúng tôi giúp bạn
            </p>
            <p className="text-lg">
              Để được tư vấn và hỗ trợ tốt nhất trong việc mua gạo từ thiện hãy
              liên hệ ngay với chúng tôi.
            </p>
          </div>
          <a href="tel:0859888905">
            <Button className="mt-4">Liên hệ ngay</Button>
          </a>
        </div>
      </Section>
    </div>
  );
}
