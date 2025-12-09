import React from "react";
import styles from "./style.module.scss";

const Benefits = () => {
	return (
		<section className={styles.benefits}>
			<div className={styles["benefits__heading"]}>
				<h2>More Than Just a Workout</h2>
				<p>While many trainers tell you what to do, we focus on why. At Mind2Muscle, we believe real transformation happens when you understand the connection between your mind and muscles.</p>
			</div>
			<div className={styles["benefits__content"]}>
				<div className={styles.benefit}>
					<h3>Knowledge-Driven Training</h3>
					<p>Learn the science behind every exercise. Understand what muscles you're targeting, why form matters, and how your body adapts. Leave every session smarter and stronger.</p>
				</div>
				<div className={styles.benefit}>
					<h3>Holistic Approach</h3>
					<p>Your fitness journey isn't just about the gym. We take a comprehensive approach that considers your lifestyle, goals, experience level, and unique challenges to create a plan that actually works for you.</p>
				</div>
				<div className={styles.benefit}>
					<h3>Inclusive & Straightforward</h3>
					<p>Whether you're stepping into a gym for the first time or you're an experienced athlete looking to level up, we meet you where you are—no judgment, no intimidation, just results.</p>
				</div>
			</div>
			<div className={styles["benefits__gallery"]}>
				<img src="/benefit-g-1.webp" alt="A lady squating a bar" width={710} height={686} />
				<img src="/benefit-g-2.webp" alt="A man deadlifting a bar" width={514} height={566} />
			</div>
		</section>
	);
};

export default Benefits;
