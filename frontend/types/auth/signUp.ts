import * as z from "zod";

export const SignUpFormSchema = z.object({
	email: z.string({
		required_error: "Email Is Required",
	}),
	password: z.string({
		required_error: "Password Is Required",
	}),
});

export type TSignUpFormFields = z.infer<typeof SignUpFormSchema>;
