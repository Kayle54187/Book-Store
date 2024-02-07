import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TProduct, cartStore } from "@/store/cart";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function CartItemCard({ image, name, price, quantity, product }: TProduct) {
  const updateQuantity = cartStore((state) => state.updateQuantity);
  const removeFromCart = cartStore((state) => state.removeFromCart);
  const totalPrice = cartStore((state) => state.totalPrice);

  const [currentQuantity, setCurrentQuantity] = useState<number>(quantity);

  return (
    <Card className="my-4">
      <div className="flex">
        <CardHeader>
          <CardTitle className="flex items-start space-x-4 w-full">
            <div className="relative w-16 h-16">
              <Image src={image} alt={name} fill />
            </div>
            <div className="space-y-2">
              <h1>{name}</h1>
              <p className="text-sm font-normal">{price} RWF</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2">
            <Button
              variant={"ghost"}
              className="p-0"
              disabled={currentQuantity <= 1}
              onClick={() => {
                setCurrentQuantity(
                  updateQuantity({
                    productId: product,
                    action: "REMOVE",
                  })
                );
              }}
            >
              <Minus />
            </Button>
            <span className="px-4 py-2 bg-gray-200 rounded-md">
              {currentQuantity}
            </span>
            <Button
              variant={"ghost"}
              className="p-0"
              onClick={() => {
                setCurrentQuantity(
                  updateQuantity({
                    productId: product,
                    action: "ADD",
                  })
                );
              }}
            >
              <Plus />
            </Button>
          </div>
          <div>
            <Button variant={"link"} onClick={() => removeFromCart(product)}>
              Remove
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default CartItemCard;
