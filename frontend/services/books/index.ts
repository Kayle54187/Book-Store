import { IBook } from "@/types/books";
import { objectToQueryParams } from "@/utils";
import { useQuery } from "@tanstack/react-query";

interface IAllBooksParams {
	q?: string;
}

export function useGetAllBooks({ q }: IAllBooksParams) {
	const queryParams = objectToQueryParams({ q });

	return useQuery<IBook[]>({
		queryKey: ["books", queryParams],
		queryFn: () =>
			fetch(`/api/books${queryParams}`).then((res) => res.json()),
	});
}
