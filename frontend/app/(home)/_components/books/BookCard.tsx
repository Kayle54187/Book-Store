"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { baseInstance } from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";

interface BookCardProps {
	id: string;
	title: string;
	points: number;
	image: string;
	writer: string;
	tags: string[];
}

export default function BookCard({
	id,
	title,
	points,
	image,
	writer,
	tags,
}: BookCardProps) {
	const { toast } = useToast();

	const { mutate: placeOrder } = useMutation<string, string, string>({
		onSuccess: (data) => {
			toast({
				title: "Placing Order Success",
			});
		},
		onError: (error) => {
			toast({
				title: "Placing Order Failed",
				variant: "destructive",
			});
		},
		mutationFn: (data) =>
			baseInstance.post(`/Orders/${id}`, data).then((res) => res.data),
	});

	return (
		<Card className="w-full h-[600px] p-2">
			<CardContent className="p-2 space-y-2">
				<h1 className="text-[#0B0F40] font-bold text-2xl">
					{title}{" "}
					<span className="italic font-light text-lg">~{writer}</span>
				</h1>
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
				<div>
					Required Points:
					<p className="text-[#0B0F40]">{points} Points</p>
				</div>
				<div>
					Tags:
					{tags.map((tag, index) => (
						<span key={index} className="m-2">
							{tag}
						</span>
					))}
				</div>
				<div>
					<Button onClick={() => placeOrder(id)}>Buy Book</Button>
				</div>
			</CardContent>
		</Card>
	);
}
