import Link from "next/link";

export default function NavBar() {
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
						<Link href="/profile">Profile</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
}
