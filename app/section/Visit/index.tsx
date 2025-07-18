// VisitingInfo.tsx
"use client";

import Link from "next/link";

export default function VisitingInfo() {
	return (
		<section className="w-full px-4 py-12 bg-white text-gray-800">
			<div className="max-w-5xl mx-auto space-y-10">
				<h2 className="text-3xl font-bold text-center">Visiting Information</h2>

				{/* Hours & Fees */}
				<div className="bg-gray-100 p-6 rounded-2xl shadow-md space-y-4">
					<h3 className="text-xl font-semibold">Opening Hours</h3>
					<p>Monday – Sunday: 6:00 AM – 6:00 PM</p>

					<h3 className="text-xl font-semibold">Entrance Fees</h3>
					<ul className="list-disc list-inside">
						<li>Adults: ₦2,000</li>
						<li>Children: ₦1,000</li>
						<li>Guided Tour: ₦5,000 per person</li>
					</ul>

					<h3 className="text-xl font-semibold">Rules & Safety</h3>
					<ul className="list-disc list-inside">
						<li>Stay inside your vehicle unless otherwise instructed</li>
						<li>Do not feed or disturb the animals</li>
						<li>Follow guide and posted signs at all times</li>
					</ul>
				</div>

				{/* Best Time Tips */}
				<div className="bg-green-50 p-6 rounded-2xl shadow-md space-y-3">
					<h3 className="text-xl font-semibold">Best Time to Visit</h3>
					<p>
						The best months are during the dry season (Nov – Mar), especially early mornings (6–9 AM) for active wildlife and cooler temperatures.
					</p>
				</div>

				{/* Booking CTA */}
				<div className="text-center">
					<Link href="/contact">
						<button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
							📅 Book a Guided Tour
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
