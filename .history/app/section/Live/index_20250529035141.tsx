"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
const image = ["/landscape.jpg", "/lovebirds.jpg", "/zebra.jpg"];
export default function Live() {
	useEffect(() => {
		const container = document.getElementsByClassName(".container");
		const currentImgIndex = 0;
		let lastX = 0;
		let lastY = 0;
		let distance = 100;
		const img = document.createElement("img");
		img.classList.add(".img-hover");
	}, []);
	return (
		<section className="container h-screen w-full overflow-hidden">
			<div className="header h-full w-full flex justify-center items-center">
				<p className="uppercase text-9xl">safari</p>
			</div>
		</section>
	);
}
