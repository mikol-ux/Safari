import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<section className="h-screen bg-[url('/landscape.jpg')] bg-cover bg-no-repeat bg-center">
			<div className="flex flex-col justify-between">
				<div>
					<p>grand tour</p>
					<p>feel life</p>
				</div>
				<div className="text-right text-[69px] @min-xs:text-[90px] sm:text-[120px] lg:text-[150px] xl:text-[180px] 3xl:text-[215px]">
					<p>THE SAFARI</p>
					<p>NATURES BANK</p>
				</div>
			</div>
		</section>
	);
}
