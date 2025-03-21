import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  image: string | StaticImageData;
  price: number;
};
