"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
gsap.registerPlugin(Observer);

export default function Slide() {
	useEffect(() => {}, []);
	return (
		<section>
			<article className=""></article>
			<article className=""></article>
			<article className=""></article>
			<article className=""></article>
			<article className=""></article>
		</section>
	);
}
