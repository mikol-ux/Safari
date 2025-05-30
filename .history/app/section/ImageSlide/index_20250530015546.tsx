"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer, SplitText } from "gsap/all";
gsap.registerPlugin(Observer);

export default function Slide() {
	useEffect(() => {
		let sections = document.querySelectorAll("section"),
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
