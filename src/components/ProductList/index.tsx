import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import React from "react";

type ProductListProps = {
  products: Product[];
  className?: React.ComponentProps<"div">["className"];
  title?: string;
};
export default function ProductList({
  products,
  className,
  title,
}: ProductListProps) {
  return (
    <Section title={title}>
      <div
        className={cn(
          "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
          className
        )}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </Section>
  );
}
