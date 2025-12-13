"use client";

import React from "react";
import styles from "./AboutHero.module.scss";
import ScrollyImage from "../common/ScrollyImage";
import CopySplit from "../CopySplit";

const AboutHero = () => {
	return (
		<section className={styles["hero"]}>
			<div className={styles["hero__top-content"]}>
				<CopySplit>
					<h2>Like many people, I spent years working out without really understanding what I was doing. I followed programs I found online, copied exercises from fitness influencers, and pushed through workouts that looked impressive but weren't actually aligned with my goals. I was putting in the effort, but the results were inconsistent at best.</h2>
				</CopySplit>
			</div>
			<div className={styles["hero__bottom-content"]}>
				<CopySplit delay={0.2}>
					<p>
						Everything changed when I started asking "why?"
						<br />
						Why this exercise instead of that one? Why this rep range? Why does form matter so much? Why do some people progress faster than others?
						<br />
						The more I learned, the more I realized that fitness isn't just about showing up and sweating—it's about understanding how your body works, how muscles respond to stimulus, and how to create an intelligent, sustainable approach to training.
						<br />
						That's when I stopped just working out and started truly training. And that's when everything clicked.
					</p>
				</CopySplit>
				<ScrollyImage>
					<img src="/about-hero.webp" alt="A picture of kashami sitting" width={522} height={640} />
				</ScrollyImage>
			</div>
		</section>
	);
};

export default AboutHero;
