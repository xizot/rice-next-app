import { Button } from "@/components/ui/button";
import { CurrencyHelper } from "@/helpers/currency.helper";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardProps = Pick<Product, "id" | "image" | "name" | "price"> & {};
export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden border">
      <div className="relative w-full pt-[75%]">
        <Image
          src={image}
          alt={name}
          fill
          className="w-full h-full absolute top-0 left-0 object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="font-medium mb-1">{name}</h3>
        <p className="text-2xl text-primary font-semibold mb-4">
          {CurrencyHelper.formatVND(price)}
        </p>
        <Link href="tel:0859888905" className="block cursor-pointer">
          <Button className="w-full">Liên hệ mua</Button>
        </Link>
      </div>
    </div>
  );
}
