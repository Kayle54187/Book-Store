"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignUpFormSchema, TSignUpFormFields } from "@/types/auth/signUp";
import { baseInstance } from "@/utils/axios";
import { useToast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { userStore } from "@/store/users";

export default function SignUpForm() {
	const { toast } = useToast();
	const router = useRouter();

	const logIn = userStore((state) => state.logIn);

	const form = useForm<TSignUpFormFields>({
		resolver: zodResolver(SignUpFormSchema),
	});

	const { mutate: signUp, isPending } = useMutation<
		{
			email: string;
			token: string;
		},
		AxiosError<{ err: string }>,
		TSignUpFormFields
	>({
		onSuccess: (data) => {
			toast({
				title: "Sign-Up Successful",
				description: "Account created",
			});
			logIn({
				email: data.email,
				token: data.token,
			});
			router.push("/admin");
		},
		onError: (error) => {
			toast({
				title: "Sign-Up Failed",
				description: error.response?.data.err,
				variant: "destructive",
			});
		},
		mutationFn: (data) =>
			baseInstance.post("/users/signup", data).then((res) => res.data),
	});

	const onSubmit = (data: TSignUpFormFields) => {
		signUp(data);
	};

	return (
		<div className="w-full h-full">
			<Form {...form}>
				<form
					className="h-full flex flex-col"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem className="my-4">
								<FormLabel className="text-[#497CBF]">
									Email
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className="focus-visible:outline-[#497CBF] py-6"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="password"
						control={form.control}
						render={({ field }) => (
							<FormItem className="my-4">
								<FormLabel className="text-[#497CBF]">
									Password
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className="focus-visible:outline-[#497CBF] py-6"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="my-5">
						<p>
							Already have an account?
							<Link href={"/sign-in"}>
								<span className="text-[#497CBF]">
									{" "}
									Sign In here
								</span>
							</Link>
						</p>
					</div>
					<div className="flex items-center justify-center w-full my-5">
						<Button
							className="bg-[#497CBF] w-2/4  hover:bg-[#497cbfe0] p-6"
							disabled={isPending}
						>
							Create Account
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
