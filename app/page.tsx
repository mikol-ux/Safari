import Morph from "./components/animations/morph";
import Accordion from "./section/Accordion";
import Animal from "./section/Animal";
import HeroSection from "./section/Hero";
import Slide from "./section/ImageSlide";
import Live from "./section/Live";
import SpotlightReveal from "./section/Reveal";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Live />
			{/* <Slide /> */}
			<Accordion />
			<Animal />
			{/* <SpotlightReveal /> */}
		</main>
	);
}
