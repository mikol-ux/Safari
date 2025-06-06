"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer, SplitText } from "gsap/all";

gsap.registerPlugin(Observer, SplitText);

export default function Slide() {
	useEffect(() => {
		let sections = document.querySelectorAll("article"),
			images = document.querySelectorAll(".bg"),
			headings = gsap.utils.toArray(".section-heading"),
			outerWrappers = gsap.utils.toArray(".outer"),
			innerWrappers = gsap.utils.toArray(".inner");

		const splitHeading = headings.map((heading) => {
			if (heading instanceof HTMLElement) {
				return new SplitText(heading, {
					type: "chars,words,lines",
					linesClass: "clip-text",
				});
			}
			return null;
		});

		let currentIndex = -1;
		let animating = false;
		const wrap = gsap.utils.wrap(0, sections.length);

		gsap.set(outerWrappers, { yPercent: 100 });
		gsap.set(innerWrappers, { yPercent: -100 });

		const gotosection = (index: number, direction: number) => {
			index = wrap(index);
			if (animating || index === currentIndex) return;

			animating = true;
			let fromTop = direction === -1;
			let dfactor = fromTop ? -1 : 1;

			const tl = gsap.timeline({
				defaults: { duration: 1.25, ease: "power1.inOut" },
				onComplete: () => {
					animating = false;
				},
			});

			if (currentIndex >= 0) {
				gsap.set(sections[currentIndex], { zIndex: 0 });
				tl.to(images[currentIndex], { yPercent: -15 * dfactor }).set(
					sections[currentIndex],
					{ autoAlpha: 0 }
				);
			}

			gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
			tl.fromTo(
				[outerWrappers[index], innerWrappers[index]],
				{
					yPercent: (i: number) => (i ? -100 * dfactor : 100 * dfactor),
				},
				{ yPercent: 0 },
				0
			);

			const split = splitHeading[index];
			if (split) {
				tl.fromTo(
					split.chars,
					{
						autoAlpha: 0,
						yPercent: 150 * dfactor,
					},
					{
						autoAlpha: 1,
						yPercent: 0,
						duration: 1,
						ease: "power2.out",
						stagger: {
							each: 0.02,
							from: "random",
						},
					},
					0.2
				);
			}

			currentIndex = index;
		};

		Observer.create({
			type: "wheel,touch,pointer",
			wheelSpeed: -1,
			onDown: () => gotosection(currentIndex - 1, -1),
			onUp: () => gotosection(currentIndex + 1, 1),
			tolerance: 10,
			preventDefault: true,
		});

		gotosection(0, 1);
	}, []);

	return (
		<section className="relative h-screen text-white bg-black uppercase">
			{[
				{ className: "first", image: "/zebra.jpg" },
				{ className: "third", image: "/starlit.jpg" },
				{ className: "fourth", image: "/lovebirds.jpg" },
				{ className: "fifth", image: "/girafe.jpg" },
			].map((section, i) => (
				<article
					key={i}
					className={`${section.className} w-full h-full fixed top-0 opacity-0 pointer-events-none`}
				>
					<div className="outer w-full h-full overflow-hidden">
						<div className="inner w-full h-full overflow-hidden">
							<div
								className={`bg flex justify-center items-center absolute w-full h-screen top-0 bg-cover bg-center`}
								style={{ backgroundImage: `url(${section.image})` }}
							>
								<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2 will-change-transform">
									Scroll down
								</h2>
							</div>
						</div>
					</div>
				</article>
			))}
		</section>
	);
}
