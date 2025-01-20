import { Button } from "@/components/ui/Button";
import { ProductList } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";

export default function TabContent({ data }: { data: ProductList[] }) {
  const [sliceEnd, setSliceEnd] = useState<number>(10);

  const slicedData = data.slice(0, sliceEnd);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 mx-auto mt-6 ">
        {slicedData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col  items-center text-center bg-gray-100 p-6 rounded-lg"
          >
            <Image
              src={product.img}
              alt={product.name}
              className="object-cover w-[200px] h-[200px] rounded-md"
            />
            <h3 className="mt-2 font-medium">{product.name}</h3>
          </div>
        ))}
      </div>

      {data.length > sliceEnd && (
        <div className="justify-self-center mt-10">
          <Button onClick={() => setSliceEnd((prev) => prev + 6)}>
            Load more
          </Button>
        </div>
      )}
    </>
  );
}
