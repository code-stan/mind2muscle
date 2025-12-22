"use client";

import React from "react";
import styles from "./style.module.scss";
import ScrollyImage from "../common/ScrollyImage";
import CopySplit from "../CopySplit";

const Benefits = () => {
	return (
		<section className={styles.benefits}>
			<div className={styles["benefits__heading"]}>
				<CopySplit>
					<h2>More Than Just a Workout</h2>
				</CopySplit>
				<CopySplit delay={0.2}>
					<p>While many trainers tell you what to do, we focus on why. At Mind2Muscle, we believe real transformation happens when you understand the connection between your mind and muscles.</p>
				</CopySplit>
			</div>
			<div className={styles["benefits__content"]}>
				<div className={styles.benefit}>
					<CopySplit delay={0.3}>
						<h3>Knowledge-Driven Training</h3>
					</CopySplit>
					<CopySplit delay={0.3}>
						<p>Learn the science behind every exercise. Understand what muscles you're targeting, why form matters, and how your body adapts. Leave every session smarter and stronger.</p>
					</CopySplit>
				</div>
				<div className={styles.benefit}>
					<CopySplit delay={0.4}>
						<h3>Holistic Approach</h3>
					</CopySplit>
					<CopySplit delay={0.4}>
						<p>Your fitness journey isn't just about the gym. We take a comprehensive approach that considers your lifestyle, goals, experience level, and unique challenges to create a plan that actually works for you.</p>
					</CopySplit>
				</div>
				<div className={styles.benefit}>
					<CopySplit delay={0.5}>
						<h3>Inclusive & Straightforward</h3>
					</CopySplit>
					<CopySplit delay={0.5}>
						<p>Whether you're stepping into a gym for the first time or you're an experienced athlete looking to level up, we meet you where you are—no judgment, no intimidation, just results.</p>
					</CopySplit>
				</div>
			</div>
			<div className={styles["benefits__gallery"]}>
				<ScrollyImage>
					<img src="/benefit-g-1.webp" alt="A lady squating a bar" width={710} height={686} />
				</ScrollyImage>
				<ScrollyImage>
					<img src="/benefit-g-2.webp" alt="A man deadlifting a bar" width={514} height={566} />
				</ScrollyImage>
			</div>
		</section>
	);
};

export default Benefits;
