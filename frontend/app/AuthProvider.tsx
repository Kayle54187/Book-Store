import { useGetCurrentUser } from "@/services/auth";
import { userStore } from "@/store/users";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
	const [token, setToken] = useState<string | undefined | null>();

	const logIn = userStore((state) => state.logIn);
	const email = userStore((state) => state.email);

	const { data } = useGetCurrentUser(email ? true : false);

	const router = useRouter();

	const pathName = usePathname();

	useEffect(() => {
		if (data) {
			logIn({
				email: data?.email,
			});
		}
		// if (!email) router.push("/sign-in");

		// pathName.endsWith("/") && !email ? "" :
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	return <>{children}</>;
}

export default AuthProvider;
