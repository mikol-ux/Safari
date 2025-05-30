"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
const image = ["/landscape.jpg", "/lovebirds.jpg", "/zebra.jpg"];
export default function Live() {
	useEffect(() => {
		const container = document.getElementById("#container");
		let currentImgIndex = 0;
		let lastX = 0;
		let lastY = 0;
		let distancethreshold = window.innerWidth < 900 ? 100 : 100;
		window.addEventListener("resize", () => {
			distancethreshold = window.innerWidth < 900 ? 100 : 100
		window.addEventListener("mouseover", (e) => {
			const dx = e.clientX - lastX;
			const dy = e.clientY - lastY;
			const distance = Math.sqrt(dx * dx + dy * dy);
			if (distance > distancethreshold) {
				Trail(e.clientX, e.clientY);
				lastX = e.clientX;
				lastY = e.clientY;
			}
		});
		function Trail(x: any, y: any) {
			const img = document.createElement("img");
			img.classList.add(".img-hover");
			img.src = image[currentImgIndex];
			container?.appendChild(img);
			currentImgIndex = (currentImgIndex + 1) % image.length;

			gsap.set(img, {
				x: x,
				y: y,
				scale: 0,
				opacity: 0,
				rotation: gsap.utils.random(-20, 20),
			});

			gsap.to(img, {
				scale: 1,
				opacity: 1,
				duration: 0.4,
				ease: "power2.out",
			});
			gsap.to(img, {
				scale: 0.2,
				opacity: 0,
				duration: 1,
				delay: 0.3,
				ease: "power2.out",
				onComplete: () => {
					img.remove();
				},
			});
		}
	}, []);
	return (
		<section
			id="container"
			className="container h-screen w-full overflow-hidden"
		>
			<div className="header h-full w-full flex justify-center items-center">
				<p className="uppercase text-9xl">safari</p>
			</div>
		</section>
	);
}
