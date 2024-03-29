"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { BookSchema, BooksFields } from "@/types/books/books";
import { baseInstance } from "@/utils/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

export default function AddBook() {
	const { toast } = useToast();

	const form = useForm<BooksFields>({
		resolver: zodResolver(BookSchema),
	});

	const { mutate: addBook, isPending } = useMutation<
		BooksFields,
		AxiosError<{ message: string }>,
		BooksFields
	>({
		onSuccess: (data) => {
			toast({
				title: "Adding Book Successful",
			});
		},
		onError: (error) => {
			toast({
				title: "Adding Book Failed",
				variant: "destructive",
			});
		},
		mutationFn: (data) =>
			baseInstance.post("/Books", data).then((res) => res.data),
	});

	const onSubmit = (data: BooksFields) => {
		addBook(data);
	};

	return (
		<div className="w-full h-full md:w-2/4">
			<Form {...form}>
				<form
					className="h-full flex flex-col w-full"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						name="title"
						control={form.control}
						render={({ field }) => (
							<FormItem className="my-4">
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="writer"
						control={form.control}
						render={({ field }) => (
							<FormItem className="my-4">
								<FormLabel>Writer</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="tags"
						control={form.control}
						render={({ field }) => (
							<FormItem className="my-4">
								<FormLabel>Tags</FormLabel>
								<FormControl>
									<Input
										onChange={(e) =>
											form.setValue(
												"tags",
												e.target.value.split(",")
											)
										}
										placeholder="Separate tags with comma"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="price"
						control={form.control}
						render={({ field }) => (
							<FormItem className="my-4">
								<FormLabel>Points</FormLabel>
								<FormControl>
									<Input
										onChange={(e) =>
											form.setValue(
												"price",
												Number(e?.target?.value)
											)
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="coverImage"
						control={form.control}
						render={({ field }) => (
							<FormItem className="my-4">
								<FormLabel>Image Url (Cover Image)</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Image URL" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex items-center justify-center w-full my-5">
						<Button className="p-6" disabled={isPending}>
							Add Book
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
