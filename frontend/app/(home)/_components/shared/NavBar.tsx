"use client";

import Link from "next/link";
import ProfileModal from "../profile";
import { userStore } from "@/store/users";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
	const email = userStore((state) => state.email);
	const router = useRouter();

	return (
		<header className="bg-slate-900 text-white w-full">
			<div className="m-auto w-11/12 p-4 flex items-center justify-between">
				<div>
					<Link href={"/"} className="text-2xl font-bold">
						Book Shop
					</Link>
				</div>
				<nav className="flex items-center space-x-4">
					<ul className="flex items-center">
						<Link href="/add-book">Add Book</Link>
					</ul>
					<ul className="flex items-center">
						{!email && (
							<Button
								onClick={() => router.push("/sign-in")}
								className="bg-blue-900"
							>
								<LogIn />
							</Button>
						)}
						{email && <ProfileModal />}
					</ul>
				</nav>
			</div>
		</header>
	);
}
