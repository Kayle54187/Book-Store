import * as z from "zod";

export const SignUpFormSchema = z.object({
	email: z.string({
		required_error: "Email Is Required",
	}),
});

export type TSignUpFormFields = z.infer<typeof SignUpFormSchema>;
