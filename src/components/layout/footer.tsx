import Link from "next/link";

export default function Footer(): JSX.Element {
	return (
		<div className="p-4 flex justify-center w-full bg-white">
			<p className="text-sm font-semibold">
				©2024 • Cari Paket <span className="font-normal">by</span>{" "}
				<Link
					href={`https://archilst-portofolio.vercel.app`}
					target="_blank"
					className="font-bold text-primary"
				>
					Archilst
				</Link>
			</p>
		</div>
	);
}
