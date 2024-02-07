import * as z from "zod";

export const SignInFormSchema = z.object({
	email: z.string({
		required_error: "Email Is Required",
	}),
	password: z.string({
		required_error: "Password Is Required",
	}),
});

export type TSignInFormFields = z.infer<typeof SignInFormSchema>;
