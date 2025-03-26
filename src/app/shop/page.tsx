import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { topSellingRices } from "@/configs/mock-data.config";
import { FilterIcon } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Gạo thơm",
  },
  {
    id: 2,
    name: "Gạo nếp",
  },
  {
    id: 3,
    name: "Gạo lứt",
  },
  {
    id: 4,
    name: "Gạo tẻ",
  },
  {
    id: 5,
    name: "Gạo nâu",
  },
  {
    id: 6,
    name: "Gạo đỏ",
  },
  {
    id: 7,
    name: "Gạo sát",
  },
  {
    id: 8,
    name: "Gạo hạt ngắn",
  },
  {
    id: 9,
    name: "Gạo hạt dài",
  },
  {
    id: 10,
    name: "Gạo hữu cơ",
  },
];

export default function ShopPage () {
  return (
    <div className="container mx-auto flex max-md:pt-6 max-md:!px-0">
      <div className="hidden md:block w-[295px] bg-background border-r pr-6">
        <div className="space-y-6 pt-6">
          <p className="mb-2 font-medium">Gõ tên gạo vào đây</p>
          <Input placeholder="Tìm kiếm" type="search" />
          <div className="space-y-2">
            <p className="mb-2 font-medium">Các loại gạo khác</p>
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={category.name} />
                <label htmlFor={category.name}>{category.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-[1] md:pl-6 md:pt-6">
        <div className="flex justify-end gap-2 max-md:px-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sắp xếp" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sắp xếp theo: </SelectLabel>
                <SelectItem value="apple">Giá tăng dần</SelectItem>
                <SelectItem value="banana">Giá gảm dần</SelectItem>
                <SelectItem value="blueberry">Tên A - Z</SelectItem>
                <SelectItem value="grapes">Tên Z - A</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <FilterIcon className="h-4 w-4" />
                <span className="ml-2">Lọc</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Bộ lọc</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 p-4">
                <p className="mb-2 font-medium">Gõ tên gạo vào đây</p>
                <Input placeholder="Tìm kiếm" type="search" />
                <div className="space-y-2">
                  <p className="mb-2 font-medium">Các loại gạo khác</p>
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox id={category.name} />
                      <label htmlFor={category.name}>{category.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <ProductList
          products={[...topSellingRices, ...topSellingRices]}
          size="small"
          className="lg:grid-cols-3"
          sectionClassName="py-4 lg:py-6"
        />
      </div>
    </div>
  );
}
