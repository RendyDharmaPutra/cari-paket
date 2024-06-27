export default function Form(): JSX.Element {
	return (
		<form className="flex flex-col sm:flex-row gap-3 ">
			<select className="p-3 w-full sm:w-[12rem] h-[3rem] outline-none border-2 border-slate-200 focus:border-primary rounded-xl bg-slate-200 hover:bg-white focus:bg-white transition-all">
				<option value="" disabled>
					Pilih Kurir
				</option>
			</select>
			<input
				type="text"
				placeholder="Masukkan Nomor Resi anda di sini"
				className="mb-3 sm:mb-0 p-3 w-full sm:w-[24rem] h-[3rem] outline-none border-2 border-slate-200 focus:border-primary rounded-xl bg-slate-200 hover:bg-white focus:bg-white transition-all"
			/>
			<button className="py-2 px-4 w-full sm:w-[4rem] h-[3rem] rounded-xl bg-primary hover:brightness-75 active:brightness-90 transition-all">
				<svg
					className="m-auto w-[1rem] h-[1rem]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
						fill="white"
					></path>
				</svg>
			</button>
		</form>
	);
}
