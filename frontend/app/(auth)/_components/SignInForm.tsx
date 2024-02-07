"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { userStore } from "@/store/users";
import { SignInFormSchema, TSignInFormFields } from "@/types/auth/signIn";
import { baseInstance } from "@/utils/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SignInForm() {
	const { toast } = useToast();
	const router = useRouter();

	const logIn = userStore((state) => state.logIn);

	const form = useForm<TSignInFormFields>({
		resolver: zodResolver(SignInFormSchema),
	});

	const { mutate: signIn, isPending } = useMutation<
		{
			email: string;
			token: string;
		},
		AxiosError<{ message: string }>,
		TSignInFormFields
	>({
		onSuccess: (data) => {
			toast({
				title: "Sign-in Successful",
				description: "You've been Logged In!",
			});
			logIn({
				email: data.email,
				token: data.token,
			});
			router.push("/");
		},
		onError: (error) => {
			toast({
				title: "Sign-In Failed",
				description: error.response?.data.message,
				variant: "destructive",
			});
		},
		mutationFn: (data) =>
			baseInstance.post("/users/signin", data).then((res) => res.data),
	});

	const onSubmit = (data: TSignInFormFields) => {
		signIn(data);
	};

	return (
		<div className="w-full h-full">
			<Form {...form}>
				<form
					className="h-full flex flex-col w-full"
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
							Do you have an account?
							<Link href={"/sign-up"}>
								<span className="text-[#497CBF]">
									{" "}
									Sign up here
								</span>
							</Link>
						</p>
					</div>
					<div className="flex items-center justify-center w-full my-5">
						<Button
							className="bg-[#497CBF] w-2/4  hover:bg-[#497cbfe0] p-6"
							disabled={isPending}
						>
							Login
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
