"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const data = [
	{
		id: "1",
		title: "birds of prey",
		image: "/acc1.jpg",
		className: "col-span-4 row-span-3 rounded-3xl",
	},
	{
		id: "2",
		title: "stars",
		image: "/acc2.jpg",
		className: "col-span-5 row-span-1 rounded-3xl",
	},
	{
		id: "3",
		title: "birds",
		image: "/acc3.jpg",
		className: "col-span-1 row-span-1 rounded-3xl rounded-3xl",
	},
	{
		id: "4",
		title: "giraffes",
		image: "/acc4.jpg",
		className: "col-span-2 row-span-2 rounded-3xl rounded-3xl",
	},
	{
		id: "5",
		title: "giraffes",
		image: "/acc5.jpg",
		className: "col-span-4 row-span-2 rounded-3xl rounded-3xl",
	},
	{
		id: "6",
		title: "giraffes",
		image: "/acc6.jpg",
		className: "col-span-4 row-span-2 rounded-3xl rounded-3xl",
	},
	{
		id: "7",
		title: "giraffes",
		image: "/acc6.jpg",
		className: "col-span-6 row-span-2 rounded-3xl",
	},
];

export default function Live() {
	const outerRefs = useRef<HTMLDivElement[]>([]);
	const innerRefs = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		// Optional: initial animation when components mount
		data.forEach((_, i) => {
			const outer = outerRefs.current[i];
			const inner = innerRefs.current[i];

			if (!outer || !inner) return;

			gsap.fromTo(
				outer,
				{ opacity: 0, scale: 0.8 },
				{
					opacity: 1,
					scale: 1,
					duration: 1,
					delay: i * 0.1,
					ease: "power2.out",
				}
			);
		});
	}, []);

	const handleClick = (i: number) => {
		const outer = outerRefs.current[i];
		const inner = innerRefs.current[i];

		if (!outer || !inner) return;

		// Animate outer container
		gsap.to(outer, {
			duration: 1.2,
			backgroundColor: "rgba(0, 0, 0, 0.7)",
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			zIndex: 10,
			borderRadius: 0,
			ease: "power1.out",
		});

		// Animate inner image
		gsap.to(inner, {
			duration: 1,
			scale: 1.2,
			width: "30%",
			height: "30%",
			borderRadius: "50%",
			ease: "elastic.out(1, 0.3)",
		});

		// Optional reset after delay
		gsap.to(inner, {
			delay: 1.5,
			duration: 0.8,
			scale: 1,
			borderRadius: "0%",
			ease: "power2.inOut",
		});
	};

	return (
		<section className="relative flex h-screen w-full flex-col items-center justify-center rounded-lg p-6 dark:bg-slate-900">
			<div className="relative grid h-full w-full grid-cols-10 grid-rows-5 gap-4">
				{data.map((item, i) => (
					<div
						key={item.id}
						onClick={() => handleClick(i)}
						className={`bg-white rounded-xl shadow-xl flex items-center justify-center cursor-pointer transition-transform w-full h-full ${item.className}`}
					>
						<div
							ref={(el) => {
								if (el) outerRefs.current[i] = el;
							}}
							className={`bg-white rounded-xl shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-105 w-full h-full ${item.className} overflow-hidden`}
						>
							<div
								ref={(el) => {
									if (el) innerRefs.current[i] = el;
								}}
								className="w-full h-full bg-cover bg-no-repeat bg-center rounded-lg hover:scale-105 transition-all delay-100 duration-300 ease-in-out"
								style={{ backgroundImage: `url(${item.image})` }}
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
