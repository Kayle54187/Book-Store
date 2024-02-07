import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BookCard from "./_components/books/BookCard";

export default function HomePage() {
	return (
		<div>
			<div className="my-4 flex items-center space-x-2 p-4 w-full justify-center">
				<div className="w-full md:w-2/4 flex items-center space-x-2">
					<Input placeholder="Search For Book" />
					<Button>Search</Button>
				</div>
			</div>
			<div className="p-4 space-y-2 md:space-y-0 space-x-0 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<BookCard
					points="100"
					title={"Jungle Book"}
					image={
						"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
					}
					writer={"Kayle Vermilion"}
					id="1"
				/>
				<BookCard
					points="100"
					title={"Jungle Book"}
					image={
						"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
					}
					writer={"Kayle Vermilion"}
					id="2"
				/>
				<BookCard
					points="100"
					title={"Jungle Book"}
					image={
						"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
					}
					writer={"Kayle Vermilion"}
					id="3"
				/>
				<BookCard
					points="100"
					title={"Jungle Book"}
					image={
						"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
					}
					writer={"Kayle Vermilion"}
					id="4"
				/>
			</div>
		</div>
	);
}
