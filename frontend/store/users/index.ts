import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
	email?: string;
	token?: string;
};

type loginProps = {
	email: string;
	token: string;
};

type Actions = {
	logOut: () => void;
	logIn: ({ email }: loginProps) => void;
};

const userStore = create<State & Actions>()(
	persist(
		(set) => ({
			email: undefined,
			token: undefined,
			logIn: ({ email, token }) => {
				set((state) => ({
					email: email,
					token: token,
				}));
			},
			logOut: () => {
				set((state) => ({
					email: undefined,
					token: undefined,
				}));
			},
		}),
		{
			name: "auth-details",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);

export { userStore };
