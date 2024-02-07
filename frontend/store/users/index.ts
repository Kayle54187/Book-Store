import { create } from "zustand";

type State = {
	email?: string;
};

type loginProps = {
	email: string;
};

type Actions = {
	logOut: () => void;
	logIn: ({ email }: loginProps) => void;
};

const userStore = create<State & Actions>((set) => ({
	email: undefined,
	logIn: ({ email }) =>
		set((state) => ({
			email: email,
		})),
	logOut: () => {
		localStorage.removeItem("authorization");
		set((state) => ({
			email: undefined,
		}));
	},
}));

export { userStore };
