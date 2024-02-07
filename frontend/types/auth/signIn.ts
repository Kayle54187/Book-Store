import * as z from "zod";

export const SignInFormSchema = z.object({
	email: z.string({
		required_error: "Email Is Required",
	}),
});

export type TSignInFormFields = z.infer<typeof SignInFormSchema>;
