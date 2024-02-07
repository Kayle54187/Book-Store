import { IOrder } from "@/types/orders";
import { baseInstance } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

export function useGetAllOrders() {
	return useQuery<IOrder[]>({
		queryKey: ["all-orders"],
		queryFn: () => baseInstance.get("/Orders").then((res) => res.data),
	});
}
