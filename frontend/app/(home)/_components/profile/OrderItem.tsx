import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useGetBookById } from "@/services/books";
import { baseInstance } from "@/utils/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { TProduct, cartStore } from "@/store/cart";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

interface IOrderItemCardProps {
	bookId: string;
	orderId: string;
}

function OrderItemCard({ bookId, orderId }: IOrderItemCardProps) {
	const { data } = useGetBookById(bookId);
	const { toast } = useToast();
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation<string, string, string>({
		onSuccess: (data) => {
			toast({
				title: "Delete Successful",
			});
			queryClient.invalidateQueries({ queryKey: ["all-orders"] });
			queryClient.invalidateQueries({ queryKey: ["book-by-id"] });
		},
		onError: (data) => {
			toast({
				title: "Delete Failed",
				variant: "destructive",
			});
		},
		mutationFn: (data) =>
			baseInstance
				.put(`/Orders/cancel/${orderId}`)
				.then((res) => res.data),
	});

	return (
		<Card className="my-4">
			{!data && <h1>Loading...</h1>}
			{data && (
				<div className="flex">
					<CardHeader>
						<CardTitle className="flex items-start space-x-4 w-full">
							<div className="relative w-16 h-16">
								<Image
									src={data.coverImage}
									alt={data.title}
									fill
								/>
							</div>
							<div className="space-y-2">
								<h1>{data.title}</h1>
								<p className="text-sm font-normal">
									{data.price} Points
								</p>
							</div>
						</CardTitle>
					</CardHeader>
					<CardContent className="p-6">
						<div className="flex items-center space-x-2">
							<Button
								variant={"link"}
								onClick={() => mutate(bookId)}
							>
								Remove
							</Button>
						</div>
					</CardContent>
				</div>
			)}
		</Card>
	);
}

export default OrderItemCard;
