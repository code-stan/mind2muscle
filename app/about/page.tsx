import Approach from "@/components/approach/Approach";
import AboutHero from "@/components/hero/AboutHero";
import Philosophy from "@/components/philosophy/Philosophy";
import Recognition from "@/components/recognition/Recognition";
import React from "react";
import { Metadata } from "next";
import { PersonSchema, BreadcrumbSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
	title: "About - Our Training Philosophy & Approach",
	description: "Learn about Mind 2 Muscle's training philosophy and approach. Discover our evidence-based methods, personalized coaching style, and commitment to helping you achieve sustainable fitness results.",
	alternates: {
		canonical: "https://www.mind2muscle.site/about",
	},
	openGraph: {
		title: "About Mind 2 Muscle - Our Training Philosophy & Approach",
		description: "Discover our evidence-based training methods and personalized coaching approach designed to help you achieve sustainable fitness results.",
		url: "https://www.mind2muscle.site/about",
		type: "website",
		images: [
			{
				url: '/about-hero.webp',
				width: 1200,
				height: 630,
				alt: 'About Mind 2 Muscle Training',
			},
		],
	},
};

const page = () => {
	const breadcrumbItems = [
		{ name: "Home", url: "https://www.mind2muscle.site/" },
		{ name: "About", url: "https://www.mind2muscle.site/about" }
	];

	return (
		<>
			<PersonSchema />
			<BreadcrumbSchema items={breadcrumbItems} />
			<main className="about">
				<AboutHero />
				<Philosophy />
				<Approach />
				<Recognition />
			</main>
		</>
	);
};

export default page;
