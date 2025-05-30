"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
gsap.registerPlugin(Observer);

export default function Slide() {
	useEffect(() => {}, []);
	return (
		<section>
			<article className="first">
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
			<article className="second">
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
			<article className="third">
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
			<article className="fourth">
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
			<article className="fifth">
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
