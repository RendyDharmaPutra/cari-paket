import Form from "../form";

export default function Search(): JSX.Element {
	return (
		<section className="p-4 lg:p-5 xl:p-6 flex flex-col gap-4 w-full bg-white">
			<div className="w-full md:w-[38rem] ">
				<p className="text-sm text-gray-800">
					Nungguin paketmu tak kunjung datang? Cemas paketmu nyasar? Penasaran
					paketmu nyampe mana? Mari periksa status dan lokasi paketmu di sini!
				</p>
			</div>
			<Form />
		</section>
	);
}
