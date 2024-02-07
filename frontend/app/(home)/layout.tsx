import NavBar from "./_components/shared/NavBar";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<NavBar />
			{children}
		</main>
	);
}
