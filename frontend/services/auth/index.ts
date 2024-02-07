import { IUser } from "@/types/users";
import { baseInstance } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

export function useGetCurrentUser() {
	return useQuery<IUser>({
		queryKey: ["current-user"],
		queryFn: () =>
			baseInstance.get("/users/current").then((res) => {
				return res.data;
			}),
	});
}
