"use client";

import Image from "next/image";

export default function SerengetiSection() {
	return (
		<section className="relative w-full bg-slate-900 py-16 px-6 sm:px-10 lg:px-20 flex items-center justify-center">
			<div className="max-w-5xl text-center flex flex-col items-center justify-center">
				<h2 className="text-6xl font-bold text-gray-700 mb-6">
					Serengeti National Park
				</h2>
				<p className="text-gray-600 leading-relaxed mb-6 text-2xl">
					Serengeti National Park, located in northern Tanzania, is one of the
					most iconic wildlife sanctuaries on Earth. Spanning over 14,700 square
					kilometers, its vast plains are home to Africa’s famed Big Five and the
					spectacular Great Migration — where over 1.5 million wildebeest and
					zebras journey across the land in search of fresh grazing.
				</p>
				<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-2xl">
					Declared a UNESCO World Heritage Site, the Serengeti is a testament to
					the raw beauty of the wild. Visitors can witness dramatic predator-prey
					interactions, serene landscapes, and a biodiversity that has remained
					untouched for centuries.
				</p>
				<button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
					Plan Your Visit
				</button>
			</div>

		</section>
	)
}
