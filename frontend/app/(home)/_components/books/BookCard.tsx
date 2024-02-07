import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface BookCardProps {
	title: string;
	points: string;
	image: string;
	writer: string;
}

export default function BookCard({
	title,
	points,
	image,
	writer,
}: BookCardProps) {
	return (
		<Card className="w-full h-[400px] p-2">
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
			<CardContent className="p-2 space-y-2 flex items-center">
				Required Points
				<p className="text-[#0B0F40]">{points} Points</p>
			</CardContent>
		</Card>
	);
}
