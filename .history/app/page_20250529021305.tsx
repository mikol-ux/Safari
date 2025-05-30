export default function Home() {
	return (
		<section className="h-screen bg-[url('/landscape.jpg')] bg-cover bg-no-repeat bg-center text-white text-black">
			<div className="h-full w-full flex flex-col justify-between p-6">
				<div className="text-left space-y-2">
					<p className="text-xl uppercase">grand tour</p>
					<p className="text-xl uppercase">feel life</p>
				</div>
				<div className="text-right font-bold leading-none">
					<p className="text-[69px] min-[480px]:text-[90px] sm:text-[120px] lg:text-[150px] xl:text-[180px] 3xl:text-[215px]">
						THE SAFARI
					</p>
					<p className="text-[69px] min-[480px]:text-[90px] sm:text-[120px] lg:text-[150px] xl:text-[180px] 3xl:text-[215px]">
						NATURE’S BANK
					</p>
				</div>
			</div>
		</section>
	);
}
