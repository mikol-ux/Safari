"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
gsap.registerPlugin(Observer);

export default function Slide() {
	useEffect(() => {}, []);
	return (
		<section>
			<article className="">
				<div className="outer">
					<div className="inner">
						<div className="bg one">
							<h2 className="section-heading">Scroll down</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="">
				<div className="outer">
					<div className="inner">
						<div className="bg one">
							<h2 className="section-heading">Scroll down</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="">
				<div className="outer">
					<div className="inner">
						<div className="bg one">
							<h2 className="section-heading">Scroll down</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="">
				<div className="outer">
					<div className="inner">
						<div className="bg one">
							<h2 className="section-heading">Scroll down</h2>
						</div>
					</div>
				</div>
			</article>
			<article className="">
				<div className="outer">
					<div className="inner">
						<div className="bg one">
							<h2 className="section-heading">Scroll down</h2>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
