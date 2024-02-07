import * as z from "zod";

export const SignUpFormSchema = z.object({
	email: z.string({
		required_error: "Email Is Required",
	}),
	password: z.string({
		required_error: "Password Is Required",
	}),
	firstName: z.string({
		required_error: "First Name Is Required",
	}),
	lastName: z.string({
		required_error: "Last Name Is Required",
	}),
});

export type TSignUpFormFields = z.infer<typeof SignUpFormSchema>;
