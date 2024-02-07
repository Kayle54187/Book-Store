import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { TProduct, cartStore } from "@/store/cart";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

interface IOrderItemCardProps {
	id: string;
	title: string;
	points: number;
	writer: string;
	image: string;
}

function OrderItemCard({
	id,
	title,
	points,
	writer,
	image,
}: IOrderItemCardProps) {
	return (
		<Card className="my-4">
			<div className="flex">
				<CardHeader>
					<CardTitle className="flex items-start space-x-4 w-full">
						<div className="relative w-16 h-16">
							<Image src={image} alt={title} fill />
						</div>
						<div className="space-y-2">
							<h1>{title}</h1>
							<p className="text-sm font-normal">
								{points} Points
							</p>
						</div>
					</CardTitle>
				</CardHeader>
				<CardContent className="p-6">
					<div className="flex items-center space-x-2">
						<Button variant={"link"}>Remove</Button>
					</div>
				</CardContent>
			</div>
		</Card>
	);
}

export default OrderItemCard;
