import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<section className="h-screen bg-[url('/landscape.jpg')] bg-cover bg-no-repeat bg-center">
			<div>
				<div></div>
				<div className="text-[69px] @min-xs:text-[90px] sm:text-[120px] lg:text-[150px] xl:text-[180px] 3xl:text-[215px]">
					<p>THE SAFARI</p>
					<p>nATURES BANK</p>
				</div>
			</div>
		</section>
	);
}
