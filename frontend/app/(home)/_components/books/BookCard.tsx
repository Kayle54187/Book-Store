"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { baseInstance } from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";

interface BookCardProps {
	id: string;
	title: string;
	points: string;
	image: string;
	writer: string;
}

export default function BookCard({
	id,
	title,
	points,
	image,
	writer,
}: BookCardProps) {
	const { mutate: buyBook } = useMutation<string, string, string>({
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (error) => {
			console.log(error);
		},
		mutationFn: (data) =>
			baseInstance.post(`/buy/book/${id}`, data).then((res) => res.data),
	});

	return (
		<Card className="w-full h-[500px] p-2">
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
					<Button onClick={() => buyBook(id)}>Buy Book</Button>
				</div>
			</CardContent>
		</Card>
	);
}
