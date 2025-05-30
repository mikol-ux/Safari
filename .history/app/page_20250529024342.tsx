"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Home() {
	useEffect(() => {
		gsap.set([".introline", ".bigline"], { x: "101%" });

		const tl = gsap.timeline();
		tl.to(".bigline", { duration: 1, x: "0%" })
			.to(".introline", { duration: 1, x: "0%" }, "+=0.3")
			.set(".bigline", { y: "100%" })
			.to(".introline", { y: "-100%" })
			.to(".bigline", { color: "transparent", y: "0%" })
			.to(".introline", {
				y: "0%",
				onStart: () => {
					document
						.querySelector(".bigline")
						?.classList.add("text-outline-white");
				},
			})
			.to(".bigline", {
				y: "0%",
				onStart: () => {
					document
						.querySelector(".bigline")
						?.classList.add("text-outline-white");
				},
			});
	}, []);
	return (
		<section className="h-screen bg-[url('/landscape.jpg')] bg-cover bg-no-repeat bg-center text-black">
			<div className="h-full w-full flex flex-col justify-between p-6">
				<div className="text-left space-y-2">
					<p className="text-xl uppercase">grand tour</p>
					<p className="text-xl uppercase">feel life</p>
				</div>
				<div className="text-right font-bold leading-none border-r-8 border-black overflow-hidden">
					<p className="introline text-[69px] min-[480px]:text-[90px] sm:text-[120px] lg:text-[150px] xl:text-[180px] 3xl:text-[215px]">
						THE SAFARI
					</p>
					<p className="bigline text-[69px] min-[480px]:text-[90px] sm:text-[120px] lg:text-[150px] xl:text-[180px] 3xl:text-[215px]">
						NATURE’S BANK
					</p>
				</div>
			</div>
		</section>
	);
}
