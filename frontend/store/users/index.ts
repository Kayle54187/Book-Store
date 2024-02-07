import { create } from "zustand";

type State = {
	email?: string;
};

type loginProps = {
	email: string;
	token: string;
};

type Actions = {
	logOut: () => void;
	logIn: ({ email }: loginProps) => void;
};

const userStore = create<State & Actions>((set) => ({
	email: undefined,
	logIn: ({ email, token }) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("authorization", token);
		}
		set((state) => ({
			email: email,
		}));
	},
	logOut: () => {
		localStorage.removeItem("authorization");
		set((state) => ({
			email: undefined,
		}));
	},
}));

export { userStore };
