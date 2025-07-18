import Slide from "@/app/components/animations/Slide";

const slides = [
	{
		id: "1",
		images: ["/zebra.jpg", "/starlit.jpg", "/lovebirds.jpg", "/girafe.jpg"],
		direction: "left",
	},
	{
		id: "2",
		images: ["/zebra.jpg", "/starlit.jpg", "/lovebirds.jpg", "/girafe.jpg"],
		direction: "right",
	},
	{
		id: "3",
		images: ["/zebra.jpg", "/starlit.jpg", "/lovebirds.jpg", "/girafe.jpg"],
		direction: "left",
	},
];

export default function Slider() {
	return (
		<section className="w-full flex justify-center items-center py-10">
			<div className="w-full max-w-screen-xl flex flex-col gap-6 px-4">
				{slides.map((item) => (
					<Slide key={item.id} {...item} />
				))}
			</div>
		</section>
	);
}
