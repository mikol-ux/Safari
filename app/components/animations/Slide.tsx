"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type SlideProps = {
	id: string;
	images?: string[];
	direction?: string;
};

const Slide = ({ id, images = [], direction = "left" }: SlideProps) => {
	const [slides, setSlides] = useState<string[]>([]);
	const trackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setSlides([...images, ...images]); // Duplicate for infinite effect
	}, [images]);

	useEffect(() => {
		if (!trackRef.current || images.length === 0) return;

		const slideWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--slide-width")) || 320;
		const gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--slide-gap")) || 10;
		const totalWidth = (slideWidth + gap) * images.length; // Only original length

		const ctx = gsap.context(() => {
			gsap.fromTo(
				trackRef.current,
				{ x: direction === "left" ? 0 : -totalWidth },
				{
					x: direction === "left" ? -totalWidth : 0,
					duration: 50,
					ease: "none",
					repeat: -1,
				}
			);
		}, trackRef);

		return () => ctx.revert();
	}, [images, direction]);


	return (
		<div
			id={id}
			className="slider relative overflow-hidden w-full"
			style={{ height: "var(--slide-height)" }}
		>
			<div
				ref={trackRef}
				className="slider-track absolute top-0 left-0 flex gap-[var(--slide-gap)] overflow-hidden"
			>
				{slides.map((image, index) => (
					<div
						key={index}
						className="slide border border-[#4a7c59] overflow-hidden rounded-3xl"
						style={{
							width: "var(--slide-width)",
							height: "var(--slide-height)",
							flex: "0 0 auto",
						}}
					>
						<img
							src={image}
							alt={`Slide ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Slide;
