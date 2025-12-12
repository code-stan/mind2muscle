import ContactHero from "@/components/hero/ContactHero";
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
	title: "Contact - Get Started with Personal Training",
	description: "Ready to transform your fitness? Contact Mind 2 Muscle today to schedule your consultation. Get personalized training programs designed for your goals. Start your fitness journey now.",
	alternates: {
		canonical: "https://www.mind2muscle.site/contact",
	},
	openGraph: {
		title: "Contact Mind 2 Muscle - Start Your Fitness Journey",
		description: "Ready to transform your fitness? Contact us today to schedule your consultation and start your personalized training program.",
		url: "https://www.mind2muscle.site/contact",
		type: "website",
		images: [
			{
				url: '/contact-hero-img.webp',
				width: 1200,
				height: 630,
				alt: 'Contact Mind 2 Muscle',
			},
		],
	},
};

const page = () => {
	const breadcrumbItems = [
		{ name: "Home", url: "https://www.mind2muscle.site/" },
		{ name: "Contact", url: "https://www.mind2muscle.site/contact" }
	];

	return (
		<>
			<BreadcrumbSchema items={breadcrumbItems} />
			<main className="contact">
				<ContactHero />
			</main>
		</>
	);
};

export default page;
