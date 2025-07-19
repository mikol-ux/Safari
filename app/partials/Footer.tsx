// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer id="footer" className=" py-12 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Logo + Description */}
				<div>
					<h2 className="text-4xl font-bold mb-4">Safari Reserve</h2>
					<p className="text-xl">
						Explore the wild, witness nature up close, and enjoy unforgettable safari moments with us.
					</p>
				</div>

				{/* Navigation Links */}
				<div>
					<h3 className="text-4xl font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2 text-2xl">
						<li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
						<li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
						<li><Link href="/visit" className="hover:text-yellow-400">Visit</Link></li>
						<li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
					</ul>
				</div>

				{/* Contact + Socials */}
				<div>
					<h3 className="text-4xl font-semibold mb-4">Contact Us</h3>
					<ul className="text-2xl text-gray-300 space-y-2">
						<li>📍 Safari Road, Wildlife State, NG</li>
						<li>📞 +234 801 234 5678</li>
						<li>✉️ info@safarireserve.ng</li>
					</ul>

					<div className="flex gap-4 mt-6 text-lg">
						<a href="#" aria-label="Instagram" className="hover:text-yellow-400"><FaInstagram /></a>
						<a href="#" aria-label="Facebook" className="hover:text-yellow-400"><FaFacebookF /></a>
						<a href="#" aria-label="Twitter" className="hover:text-yellow-400"><FaTwitter /></a>
					</div>
				</div>
			</div>

			<hr className="border-gray-700 my-8" />

			<p className="text-center text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Safari Reserve. All rights reserved.
			</p>
		</footer>
	);
}
