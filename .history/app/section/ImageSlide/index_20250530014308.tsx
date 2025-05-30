"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
gsap.registerPlugin(Observer);

export default function Slide() {
	useEffect(() => {}, []);
	return (
		<section>
			<article className="first w-full h-full fixed top-0 hidden ">
				<div className="outer w-full h-full overflow-y-hidden">
					<div className="inner w-full h-full overflow-y-hidden">
						<div className="bg one flex justify-center items-center absolute w-full h-full top-0 bg-cover bg-center bg-[url(/zebra.jpg)]">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2">
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
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2">
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
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2">
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
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2">
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
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px] z-2">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
