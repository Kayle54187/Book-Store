import { useGetCurrentUser } from "@/services/auth";
import { userStore } from "@/store/users";
import React, { useEffect } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
	const logIn = userStore((state) => state.logIn);

	const { data } = useGetCurrentUser();

	useEffect(() => {
		if (data) {
			logIn({
				email: data.email,
				token: data.token,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	return <>{children}</>;
}

export default AuthProvider;
