"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const images = ["/landscape.jpg", "/lovebirds.jpg", "/zebra.jpg"];

export default function Live() {
	const containerRef = useRef<HTMLDivElement>(null);
	const currentImgIndex = useRef(0);
	const lastX = useRef(0);
	const lastY = useRef(0);
	const threshold = useRef(100); // Set a safe default

	useEffect(() => {
		if (typeof window === "undefined") return; // safety check

		// Now it's safe to access window
		threshold.current = window.innerWidth < 900 ? 100 : 100;

		const handleResize = () => {
			threshold.current = window.innerWidth < 900 ? 100 : 100;
		};

		const handleMouseMove = (e: MouseEvent) => {
			const dx = e.clientX - lastX.current;
			const dy = e.clientY - lastY.current;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance > threshold.current) {
				createTrail(e.clientX, e.clientY);
				lastX.current = e.clientX;
				lastY.current = e.clientY;
			}
		};

		const createTrail = (x: number, y: number) => {
			const img = document.createElement("img");
			img.classList.add("img-hover");
			img.src = images[currentImgIndex.current];
			currentImgIndex.current = (currentImgIndex.current + 1) % images.length;

			if (containerRef.current) {
				containerRef.current.appendChild(img);
			}

			gsap.set(img, {
				x,
				y,
				scale: 0,
				opacity: 0,
				rotation: gsap.utils.random(-20, 20),
				position: "absolute",
				pointerEvents: "none",
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
				onComplete: () => img.remove(),
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative h-screen w-full overflow-hidden"
		>
			<div className="header h-full w-full flex justify-center items-center">
				<p className="uppercase text-9xl pointer-events-none">safari</p>
			</div>
		</section>
	);
}
