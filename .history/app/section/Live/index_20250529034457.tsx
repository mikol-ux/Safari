"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
const image = ["/landscape.jpg", "/lovebirds.jpg", "/zebra.jpg"];
export default function Live() {
	return (
		<section className="h-screen w-full overflow-hidden">
			<div className="h-full w-full flex justify-center items-center">
				<p className="uppercase text-9xl">safari</p>
			</div>
		</section>
	);
}
