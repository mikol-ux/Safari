import Morph from "./components/animations/morph";
import HeroSection from "./section/Hero";
import Live from "./section/Live";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Live />
			<Morph />
		</main>
	);
}
