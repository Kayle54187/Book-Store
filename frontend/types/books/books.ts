import { z } from "zod";

export const BookSchema = z.object({
	title: z.string({
		required_error: "Title is required",
	}),
	writer: z.string({
		required_error: "Writer is required",
	}),
	tags: z.array(
		z.string({
			required_error: "Tags is required",
		})
	),
	price: z.number({
		required_error: "Points is required",
	}),
	coverImage: z.string({
		required_error: "Image is required",
	}),
});

export type BooksFields = z.infer<typeof BookSchema>;
