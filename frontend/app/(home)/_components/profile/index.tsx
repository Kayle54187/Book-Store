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

export default function ProfileModal() {
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
								<OrderItemCard
									points={100}
									title={"Jungle Book"}
									image={
										"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
									}
									writer={"Kayle Vermilion"}
									id="1"
								/>
								<OrderItemCard
									points={100}
									title={"Jungle Book"}
									image={
										"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
									}
									writer={"Kayle Vermilion"}
									id="1"
								/>
								<OrderItemCard
									points={100}
									title={"Jungle Book"}
									image={
										"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
									}
									writer={"Kayle Vermilion"}
									id="1"
								/>
								<OrderItemCard
									points={100}
									title={"Jungle Book"}
									image={
										"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
									}
									writer={"Kayle Vermilion"}
									id="1"
								/>
							</ScrollArea>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
