"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function HeroSection() {
	useEffect(() => {
		const tl = gsap.timeline();
		tl.to(".bigline", { opacity: 1, duration: 1, x: "0%" })
			.to(".introline", { opacity: 1, duration: 1, x: "0%" }, "+=0.3")
			.to(".bigline", { opacity: 1, y: "100%" })
			.to(".introline", { y: "-100%" })
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
		<section className="h-screen bg-[url('/zebra.jpg')] bg-cover bg-no-repeat bg-center text-black">
			<div className="h-full w-full flex flex-col justify-between p-6">
				<div className="text-left space-y-2">
					{/* <p className="text-xl uppercase">grand tour</p>
					<p className="text-xl uppercase">feel life</p> */}
				</div>
				<div className="text-right font-bold leading-none border-r-8 border-black overflow-hidden pr-[2%]">
					<p className="introline text-[50px] min-[480px]:text-[90px] sm:text-[120px] lg:text-[150px] xl:text-[180px] 3xl:text-[215px] opacity-0 translate-x-full">
						SERENGETI
					</p>
					<p className="bigline text-[50px] min-[480px]:text-[90px] sm:text-[120px] lg:text-[150px] xl:text-[180px] 3xl:text-[215px] opacity-0 translate-x-full">
						NATIONAL PARK
					</p>
				</div>
			</div>
		</section>
	);
}
