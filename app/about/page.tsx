import Approach from "@/components/approach/Approach";
import AboutHero from "@/components/hero/AboutHero";
import Philosophy from "@/components/philosophy/Philosophy";
import React from "react";

const page = () => {
	return (
		<main className="about">
			<AboutHero />
			<Philosophy />
			<Approach />
		</main>
	);
};

export default page;
