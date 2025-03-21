import Footer from "@/components/Common/Footer";
import Hero from "@/components/Common/Hero";
import ContactForm from "@/components/ContactForm";
import Mission from "@/components/Mission";
import ProductList from "@/components/ProductList";
import {
  packagedRices,
  specialtyRices,
  topSellingRices,
} from "@/configs/mock-data.config";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductList
        title="Gạo đóng túi"
        products={packagedRices}
        className="lg:grid-cols-3"
      />
      <Mission />
      <ProductList title="Gạo đặc sản" products={specialtyRices} />
      <ProductList title="Sản phẩm bán chạy" products={topSellingRices} />
      <ContactForm />
      <Footer />
    </div>
  );
}
