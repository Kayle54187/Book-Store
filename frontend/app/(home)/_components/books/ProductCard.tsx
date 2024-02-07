import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TProduct, cartStore } from "@/store/cart";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

export default function ProductCard({
  name,
  image,
  price,
  product,
  quantity,
}: TProduct) {
  const addToCart = cartStore((state) => state.addToCart);
  const cart = cartStore((state) =>
    state.cart.find((item) => item.product === product)
  );

  return (
    <Card className="w-full h-[600px] m-4 p-2">
      <CardContent className="p-2 space-y-2">
        <p className="text-[#0B0F40]">{name}</p>
      </CardContent>
      <CardHeader className="relative w-full h-2/3">
        <Image
          alt="Product Image"
          src={image}
          fill
          className="w-full h-full rounded-lg"
          objectFit="cover"
        />
      </CardHeader>
      <CardContent className="p-2 space-y-2">
        <p className="text-[#0B0F40] text-2xl font-bold">{price} RWF</p>
        <p className="font-bold text-[#0B0F40] flex items-center space-x-2">
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
        </p>
        <div className="flex items-center justify-between">
          <Button
            onClick={() => {
              addToCart({
                image: image,
                name: name,
                price: price,
                product: product,
                quantity: quantity,
              });
            }}
            disabled={cart !== undefined}
          >
            {cart === undefined ? "Add To Cart" : "Item In Cart"}
          </Button>
          <Heart fill="black" />
        </div>
      </CardContent>
    </Card>
  );
}
