"use client";


export default function VisitingInfo() {
	return (
		<section id="visit" className="w-full px-4 py-12 bg-white text-gray-800 flex items-center">
			<div className="mx-auto max-w-7xl space-y-10">
				<h2 className="text-3xl md:text-4xl font-bold text-center">Visiting Information</h2>

				{/* Hours & Fees + Rules */}
				<div className="w-full flex flex-col md:flex-row md:gap-12 items-start md:items-stretch justify-between">
					{/* Opening Hours */}
					<div className="md:w-1/2 space-y-6">
						<h3 className="text-2xl font-semibold">Opening Hours</h3>
						<p className="text-xl font-light">Monday – Sunday: <strong>6:00 AM – 6:00 PM</strong></p>

						<h3 className="text-2xl font-semibold ">Best Time to Visit</h3>
						<p className="text-xl font-extralight">
							We recommend visiting during the <strong>dry season</strong> (November to March), especially in the <strong>early morning</strong> for the best wildlife sightings.
						</p>
					</div>

					{/* Fees & Rules */}
					<div className="md:w-1/2 space-y-10 mt-10 md:mt-0">
						<div>
							<h3 className="text-4xl font-semibold mb-2">Entrance Fees</h3>
							<ul className="list-disc list-inside text-2xl font-light space-y-1">
								<li>Adults: ₦2,000</li>
								<li>Children: ₦1,000</li>
								<li>Guided Tour: ₦5,000 per person</li>
							</ul>
						</div>
						<div>
							<h3 className="text-4xl font-semibold mb-2">Rules & Safety</h3>
							<ul className="list-disc list-inside text-2xl font-light space-y-1">
								<li>Stay inside your vehicle unless otherwise instructed</li>
								<li>Do not feed or disturb the animals</li>
								<li>Follow guide and posted signs at all times</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
