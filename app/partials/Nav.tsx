'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header className="fixed top-2 left-0 w-full z-50 ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f9f9f6] rounded-2xl">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="text-2xl font-bold text-black">
						Serengeti.
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden md:flex space-x-8 text-xl font-medium text-gray-700">
						<Link href="#about" className="hover:text-black transition-colors">
							About
						</Link>
						<Link href="#visit" className="hover:text-black transition-colors">
							Visit
						</Link>
						<Link href="#gallery" className="hover:text-black transition-colors">
							Gallery
						</Link>
						<Link href="#contact" className="hover:text-black transition-colors">
							Contact
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden text-black"
						aria-label="Toggle menu"
						aria-expanded={isOpen}
					>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{isOpen && (
				<div className="md:hidden bg-white px-4 pb-4 text-lg border-t border-gray-200 rounded-2xl mt-1">
					<Link href="#about" className="block py-2 text-gray-700 hover:text-black transition-colors">
						About
					</Link>
					<Link href="#visit" className="block py-2 text-gray-700 hover:text-black transition-colors">
						Visit
					</Link>
					<Link href="#gallery" className="block py-2 text-gray-700 hover:text-black transition-colors">
						Gallery
					</Link>
					<Link href="#contact" className="block py-2 text-gray-700 hover:text-black transition-colors">
						Contact
					</Link>
				</div>
			)}
		</header>
	);
}
