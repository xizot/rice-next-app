import { Button } from "@/components/ui/button";
import { CurrencyHelper } from "@/helpers/currency.helper";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";

const productCardVariants = cva("product-card", {
  variants: {
    size: {
      default: "p-6",
      small: "p-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type ProductCardVariants = VariantProps<typeof productCardVariants>;

type ProductCardProps = Pick<Product, "id" | "image" | "name" | "price"> &
  ProductCardVariants & {};

export default function ProductCard({
  image,
  name,
  price,
  size,
}: ProductCardProps) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden border flex flex-col">
      <div className="relative w-full pt-[75%]">
        <Image
          src={image}
          alt={name}
          fill
          className="w-full h-full absolute top-0 left-0 object-cover object-center"
        />
      </div>
      <div
        className={cn("flex flex-col flex-[1]", productCardVariants({ size }))}
      >
        <h3 className="font-medium mb-1">{name}</h3>
        <p className="text-2xl text-primary font-semibold mb-4">
          {CurrencyHelper.formatVND(price)}
        </p>
        <a href="tel:0859888905" className="block mt-auto">
          <Button className="w-full cursor-pointer">Liên hệ mua</Button>
        </a>
      </div>
    </div>
  );
}
