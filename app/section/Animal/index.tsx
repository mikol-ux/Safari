"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const data = [
	{
		id: "1",
		title: "birds of prey",
		image: "/acc1.jpg",
		className: "col-span-2 sm:col-span-2 lg:col-span-4 row-span-2 lg:row-span-3 rounded-3xl",
		string: "On the other hand, we denounce with righteous indignation..."
	},
	{
		id: "2",
		title: "stars",
		image: "/acc2.jpg",
		className: "col-span-2 sm:col-span-2 lg:col-span-5 row-span-1 rounded-3xl",
		string: "On the other hand, we denounce with righteous indignation..."
	},
	{
		id: "3",
		title: "birds",
		image: "/acc3.jpg",
		className: "col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 rounded-3xl",
		string: "On the other hand, we denounce with righteous indignation..."
	},
	{
		id: "4",
		title: "giraffes",
		image: "/acc4.jpg",
		className: "col-span-2 sm:col-span-2 lg:col-span-2 row-span-2 rounded-3xl",
		string: "On the other hand, we denounce with righteous indignation..."
	},
	{
		id: "5",
		title: "giraffes",
		image: "/acc5.jpg",
		className: "col-span-2 sm:col-span-2 lg:col-span-4 row-span-2 rounded-3xl",
		string: "On the other hand, we denounce with righteous indignation..."
	},
	{
		id: "6",
		title: "giraffes",
		image: "/acc6.jpg",
		className: "col-span-2 sm:col-span-2 lg:col-span-4 row-span-2 rounded-3xl",
		string: "On the other hand, we denounce with righteous indignation..."
	},
	{
		id: "7",
		title: "giraffes",
		image: "/acc6.jpg",
		className: "col-span-2 sm:col-span-4 lg:col-span-6 row-span-2 rounded-3xl",
		string: "On the other hand, we denounce with righteous indignation..."
	},
];

gsap.registerPlugin(SplitText);

export default function Live() {
	const outerRefs = useRef<HTMLDivElement[]>([]);
	const innerRefs = useRef<HTMLDivElement[]>([]);
	const paragraphRefs = useRef<HTMLParagraphElement[]>([]);

	useEffect(() => {
		data.forEach((_, i) => {
			const outer = outerRefs.current[i];
			if (!outer) return;

			gsap.fromTo(
				outer,
				{ opacity: 0, scale: 0.9 },
				{
					opacity: 1,
					scale: 1,
					duration: 0.8,
					delay: i * 0.1,
					ease: "power2.out",
				}
			);
		});
	}, []);

	const handleClick = (i: number) => {
		const outer = outerRefs.current[i];
		const inner = innerRefs.current[i];
		const text = paragraphRefs.current[i];

		if (!outer || !inner || !text) return;

		gsap.to(outer, {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100vh",
			backgroundColor: "#fff",
			zIndex: 50,
			borderRadius: 0,
			padding: "2rem",
			ease: "power2.out",
			duration: 1,
		});

		gsap.to(inner, {
			position: "absolute",
			top: "2rem",
			right: "2rem",
			width: "250px",
			height: "250px",
			scale: 1,
			opacity: 1,
			duration: 1,
			ease: "power2.out",
		});

		const split = new SplitText(text, { type: "lines" });
		gsap.fromTo(
			split.lines,
			{ y: 30, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				stagger: 0.05,
				ease: "power2.out",
				delay: 0.5,
			}
		);
	};

	return (
		<section className="relative flex h-screen w-full items-center justify-center bg-gray-100 p-6 dark:bg-slate-900 overflow-auto">
			<div className="relative grid w-full h-full gap-4 
				grid-cols-2 grid-rows-[repeat(7,minmax(100px,1fr))] 
				sm:grid-cols-4 sm:grid-rows-[repeat(5,minmax(100px,1fr))] 
				lg:grid-cols-10 lg:grid-rows-5">
				{data.map((item, i) => (
					<div
						key={item.id}
						className={`relative overflow-hidden bg-white shadow-xl cursor-pointer transition-transform w-full h-full ${item.className}`}
						onClick={() => handleClick(i)}
						ref={(el) => {
							if (el) outerRefs.current[i] = el;
						}}
					>
						<div
							className="w-full h-full bg-cover bg-center bg-no-repeat"
							style={{ backgroundImage: `url(${item.image})` }}
						/>

						<div
							ref={(el) => {
								if (el) innerRefs.current[i] = el;
							}}
							className="opacity-0 pointer-events-none"
							style={{
								backgroundImage: `url(${item.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								borderRadius: "1rem",
							}}
						/>

						<p
							ref={(el) => {
								if (el) paragraphRefs.current[i] = el;
							}}
							className="absolute left-6 top-6 max-w-[60%] text-black text-lg leading-relaxed opacity-0"
						>
							{item.string}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
