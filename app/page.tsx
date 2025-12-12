import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/hero";
import Trainer from "@/components/trainer/Trainer";
import Slider from "@/components/slider/Slider"; // Import the Slider component
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home - Expert Personal Training Services",
	description: "Transform your fitness journey with Mind 2 Muscle. Expert personal training, mobile training, group sessions, and online coaching. Achieve your fitness goals with personalized programs designed for your success.",
	alternates: {
		canonical: "https://www.mind2muscle.site/",
	},
	openGraph: {
		title: "Mind 2 Muscle - Expert Personal Training Services",
		description: "Transform your fitness journey with professional personal training. In-person, mobile, group, and online coaching tailored to your goals.",
		url: "https://www.mind2muscle.site/",
		type: "website",
		images: [
			{
				url: '/hero.webp',
				width: 1200,
				height: 630,
				alt: 'Mind 2 Muscle Personal Training',
			},
		],
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
