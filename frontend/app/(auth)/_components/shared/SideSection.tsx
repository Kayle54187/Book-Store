import Image from "next/image";
import cartIcon from "@/app/(auth)/_assets/cart.svg";
import bgIcon from "@/app/(auth)/_assets/auth-bg.svg";

export default function SideSection() {
	return (
		<div className="p-10 flex flex-col items-center justify-between bg-[#497CBF] h-full">
			<div className="flex items-center justify-between space-x-4 relative">
				<h1 className="font-bold text-5xl text-white">
					Books Shopping Libary
				</h1>
				<Image
					src={cartIcon}
					className="w-[64px] h-[64px]"
					alt="Card Image"
				/>
			</div>
			<div className=" flex-1 w-3/4 my-4 relative">
				<Image
					src={bgIcon}
					alt="Woman Shopping"
					className="w-full h-full"
				/>
			</div>
			<div className="text-center">
				<p className="text-white text-lg">Get Books that you loved</p>
			</div>
		</div>
	);
}
