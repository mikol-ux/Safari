import Morph from "./components/animations/morph";
import SerengetiSection from "./section/Aboutus";
import Accordion from "./section/Accordion";
import Animal from "./section/Animal";
import Slider from "./section/Bento";
import HeroSection from "./section/Hero";
import Slide from "./section/ImageSlide";
import Live from "./section/Live";
import SpotlightReveal from "./section/Reveal";
import VisitingInfo from "./section/Visit";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Live />
			<SerengetiSection />
			<Slider />
			{/* <Slide /> */}
			<Accordion />
			<VisitingInfo />
			<Animal />
		</main>
	);
}
