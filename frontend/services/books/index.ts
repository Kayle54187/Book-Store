import { IBook } from "@/types/books";
import { objectToQueryParams } from "@/utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

interface IAllBooksParams {
	q?: string;
}

export function useGetAllBooks({ q }: IAllBooksParams) {
	const queryParams = objectToQueryParams({ q });

	return useInfiniteQuery<IBook[]>({
		queryKey: ["books", queryParams],
		queryFn: () =>
			fetch(`/api/books${queryParams}`).then((res) => res.json()),
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.length === 10 ? allPages.length : false;
		},
	});
}
