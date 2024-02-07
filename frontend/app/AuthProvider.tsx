import { useGetCurrentUser } from "@/services/auth";
import { userStore } from "@/store/users";
import React, { useEffect } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
	const logIn = userStore((state) => state.logIn);
	const logOut = userStore((state) => state.logOut);

	const { data, error } = useGetCurrentUser();

	useEffect(() => {
		if (data) {
			logIn({
				email: data.email,
				token: data.accessToken,
			});
		}
		if (error) {
			logOut();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	return <>{children}</>;
}

export default AuthProvider;
