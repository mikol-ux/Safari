"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SpotlightReveal() {
	const overlayRef = useRef<HTMLDivElement>(null);
	const mouse = useRef({ x: 0, y: 0 });
	const refId = useRef<number>(0);

	const animate = () => {
		if (!mouse.current) return;
		const { x, y } = mouse.current;

		gsap.to(overlayRef.current, {
			duration: 0.2,
			ease: "power2.out",
			css: {
				WebkitMaskImage: `radial-gradient(circle 150px at ${x}px ${y}px, transparent 90%, white 100%)`,
				maskImage: `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, white 100%)`,
			},
		});
		refId.current = requestAnimationFrame(animate);
	};
	const handleMouseMove = (e: React.MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect();

		mouse.current.x = e.clientX - rect.left;
		mouse.current.y = e.clientY - rect.top;
	};
	useEffect(() => {
		refId.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(refId.current);
	});
	return (
		<div
			className="relative w-full h-screen bg-cover bg-center"
			style={{ backgroundImage: "url('/acc2.jpg')" }}
			onMouseMove={handleMouseMove}
		>
			<div
				ref={overlayRef}
				className="absolute inset-0 bg-white pointer-events-none transition-all duration-300"
			/>
		</div>
	);
}
