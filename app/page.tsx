
import Footer from "./partials/Footer";
import SerengetiSection from "./section/Aboutus";
import Accordion from "./section/Accordion";

import HeroSection from "./section/Hero";
import Live from "./section/Live";
import VisitingInfo from "./section/Visit";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Live />
			<main>
				<SerengetiSection />
			</main>
			{/* <Slide /> */}
			<Accordion />
			<VisitingInfo />
			<Footer />
		</main>
	);
}
