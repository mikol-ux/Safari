"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
gsap.registerPlugin(Observer);

export default function Slide() {
	useEffect(() => {}, []);
	return (
		<section>
			<article className="first w-full h-full fixed top-0 hidden">
				<div className="outer">
					<div className="inner">
						<div className="bg one">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px]">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="second w-full h-full fixed top-0 hidden">
				<div className="outer">
					<div className="inner">
						<div className="bg">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px]">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="third w-full h-full fixed top-0 hidden">
				<div className="outer">
					<div className="inner">
						<div className="bg">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px]">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="fourth w-full h-full fixed top-0 hidden">
				<div className="outer">
					<div className="inner">
						<div className="bg">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px]">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="fifth w-full h-full fixed top-0 hidden">
				<div className="outer">
					<div className="inner">
						<div className="bg">
							<h2 className="section-heading text-center mr-[-0.5em] w-[90vw] max-w-[1200px]">
								Scroll down
							</h2>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
