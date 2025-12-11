import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/hero";
import Trainer from "@/components/trainer/Trainer";
import Slider from "@/components/slider/Slider"; // Import the Slider component
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mind 2 Muscle",
	description: "Parallel Lab is a creative agency dedicated to creating exceptional digital experiences. We transform ideas into visually stunning and functionally robust web solutions.",
	alternates: {
		canonical: "https://www.studioparallel.site/",
	},
	openGraph: {
		title: "Mind 2 Muscle",
		description: "A creative agency specializing in digital design, development, product, and everything in between.",
		url: "https://www.studioparallel.site/",
		type: "website",
	},
};

export default function Home() {
	return (
		<main className="homepage">
			<Hero />
			<Trainer />
			<Benefits />
			<Slider />
		</main>
	);
}
