import Approach from "@/components/approach/Approach";
import AboutHero from "@/components/hero/AboutHero";
import Philosophy from "@/components/philosophy/Philosophy";
import Recognition from "@/components/recognition/Recognition";
import React from "react";

const page = () => {
	return (
		<main className="about">
			<AboutHero />
			<Philosophy />
			<Approach />
			<Recognition />
		</main>
	);
};

export default page;
