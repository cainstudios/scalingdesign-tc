"use client";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const products = [
  {
    id: 1,
    name: "Interstellar Honeymoons: Love in the Cosmos",
    href: "#",
    price: "$256",
    description:
      "Love knows no bounds! Discover how couples are celebrating their love with romantic interstellar honeymoons among the stars.",
    options: "8 colors",
    imageSrc:
      "https://images.pexels.com/photos/8474706/pexels-photo-8474706.jpeg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Interstellar Honeymoons: Love in the Cosmos",
    href: "#",
    price: "$32",
    description:
      "Love knows no bounds! Discover how couples are celebrating their love with romantic interstellar honeymoons among the stars.",
    options: "Black",
    imageSrc:
      "https://images.pexels.com/photos/8474706/pexels-photo-8474706.jpeg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];
export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  height={400}
                  width={400}
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h4 className="text-sm font-medium text-gray-900">CATEGORY</h4>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
