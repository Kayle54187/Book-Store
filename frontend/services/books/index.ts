import { IBook } from "@/types/books";
import { objectToQueryParams } from "@/utils";
import { baseInstance } from "@/utils/axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

interface IAllBooksParams {
	search?: string;
}

export function useGetAllBooks({ search }: IAllBooksParams) {
	const queryParams = objectToQueryParams({ search });

	return useQuery<IBook[]>({
		queryKey: ["books", queryParams],
		queryFn: () =>
			baseInstance.get(`/Books?${queryParams}`).then((res) => res.data),
	});
}

export function useGetBookById(id: string) {
	return useQuery<IBook>({
		queryKey: ["book-by-id"],
		queryFn: () => baseInstance.get(`/Books/${id}`).then((res) => res.data),
	});
}
