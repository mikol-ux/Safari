"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer, SplitText } from "gsap/all";
gsap.registerPlugin(Observer);

export default function Slide() {
	useEffect(() => {
		let sections = document.querySelectorAll("article"),
			images = document.querySelectorAll(".bg"),
			headings = gsap.utils.toArray(".section-heading"),
			outerWrappers = gsap.utils.toArray(".outer"),
			innerWrappers = gsap.utils.toArray(".inner");
		const splitHeading = headings.map((heading) => {
			if (heading instanceof HTMLElement) {
				new SplitText(heading, {
					type: "chars,words,lines",
					linesClass: "clip-text",
				});
			}
		});
		let currentIndex = -1;
		const wrap = gsap.utils.wrap(0, sections.length);
		let animating;

		gsap.set(outerWrappers, { yPercent: 100 });
		gsap.set(innerWrappers, { yPercent: -100 });

		const gotosection = (index: any, direction: any) => {
			index = wrap(index);
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
			}
		};
	}, []);
	return (
		<section className="h-screen text-white bg-black uppercase">
			<article className="first w-full h-full fixed top-0 hidden ">
				<div className="outer w-full h-full overflow-y-hidden">
					<div className="inner w-full h-full overflow-y-hidden">
						<div className="bg one flex justify-center items-center absolute w-full h-full top-0 bg-cover bg-center bg-[url(/zebra.jpg)]">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2 will-change-transform">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="second w-full h-full fixed top-0 hidden">
				<div className="outer w-full h-full overflow-y-hidden">
					<div className="inner w-full h-full overflow-y-hidden">
						<div className="bg flex justify-center items-center absolute w-full h-full top-0 bg-cover bg-center bg-[url(/safari.jpg)]">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2 will-change-transform">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="third w-full h-full fixed top-0 hidden">
				<div className="outer w-full h-full overflow-y-hidden">
					<div className="inner w-full h-full overflow-y-hidden">
						<div className="bg flex justify-center items-center absolute w-full h-full top-0 bg-cover bg-center bg-[url(/starlit.jpg)]">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2 will-change-transform">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="fourth w-full h-full fixed top-0 hidden">
				<div className="outer w-full h-full overflow-y-hidden">
					<div className="inner w-full h-full overflow-y-hidden">
						<div className="bg flex justify-center items-center absolute w-full h-full top-0 bg-cover bg-center bg-[url(/lovebirds.jpg)]">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2 will-change-transform">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="fifth w-full h-full fixed top-0 hidden">
				<div className="outer w-full h-full overflow-y-hidden">
					<div className="inner w-full h-full overflow-y-hidden">
						<div className="bg flex justify-center items-center absolute w-full h-full top-0 bg-cover bg-center bg-[url(/girafe.jpg)]">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2 will-change-transform">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
