import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserIcon } from "lucide-react";
import OrderItemCard from "./OrderItem";
import { useGetAllOrders } from "@/services/orders";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileModal() {
	const { data, refetch } = useGetAllOrders();

	return (
		<div>
			<Dialog>
				<DialogTrigger>
					<UserIcon />
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Greetings, Kayle</DialogTitle>
						<DialogDescription>
							<div>
								<p>{"Here's"} A List of all your Orders</p>
							</div>
							<div className="m-2">
								<h1 className="text-black">Orders</h1>
							</div>
							<ScrollArea className="h-[400px]">
								{data
									?.filter(
										(order) => order.status !== "CANCELLED"
									)
									.map((book, index) => (
										<OrderItemCard
											orderId={book.id}
											bookId={book.bookId}
											key={book.status}
										/>
									))}
							</ScrollArea>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
