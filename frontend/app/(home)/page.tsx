"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BookCard from "./_components/books/BookCard";
import { useGetAllBooks } from "@/services/books";
import { useEffect, useState } from "react";
import { IBook } from "@/types/books";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
	const [query, setQuery] = useState<string | undefined>();
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	const [bookData, setBookData] = useState<IBook[]>([]);

	const { data, refetch } = useGetAllBooks({ search: query });

	useEffect(() => {
		//Filtering out books that aren't already there
		if (data) {
			const books: IBook[] = data;

			setBookData([
				...bookData,
				...books.filter(
					(book) => !bookData.find((item) => item === book)
				),
			]);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	//For Infinite Fetching

	useEffect(() => {
		if (inView) {
			refetch();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView]);

	return (
		<div>
			<div className="my-4 flex items-center space-x-2 p-4 w-full justify-center">
				<div className="w-full md:w-2/4 flex items-center space-x-2">
					<Input
						placeholder="Search For Book"
						onChange={(e) => setQuery(e?.target?.value)}
					/>
				</div>
			</div>
			<div className="p-4 space-y-2 md:space-y-0 space-x-0 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{bookData.length > 0 &&
					bookData?.map((book, index) => (
						<BookCard
							points={book.price}
							title={book.title}
							image={book.coverImage}
							writer={book.writer}
							id={book.id}
							key={book.id}
						/>
					))}
				{!data && <p>Loading Books</p>}
			</div>
		</div>
	);
}
