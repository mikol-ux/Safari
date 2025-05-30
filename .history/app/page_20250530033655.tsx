import Morph from "./components/animations/morph";
import HeroSection from "./section/Hero";
import Slide from "./section/ImageSlide";
import Live from "./section/Live";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Live />
			<Slide />
		</main>
	);
}
