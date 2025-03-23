import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

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

type BlogCardProps = ProductCardVariants & {
  id: number;
  name: string;
  image: string;
  description: string;
};

export default function BlogCard({
  id,
  image,
  name,
  description,
  size,
}: BlogCardProps) {
  return (
    <Link
      href={`/rice/${id}`}
      className="rounded-lg shadow-lg overflow-hidden border flex flex-col"
    >
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
        <h3 className="font-medium mb-1 line-clamp-2">{name}</h3>
        <p className="line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
