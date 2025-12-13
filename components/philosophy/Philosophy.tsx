"use client";

import React from "react";
import styles from "./style.module.scss";
import ScrollyImage from "../common/ScrollyImage";
import CopySplit from "../CopySplit";

const Philosophy = () => {
	return (
		<section className={styles["philosophy"]}>
			<div className={styles["philosophy__content"]}>
				<CopySplit>
					<h2>My Philosophy</h2>
				</CopySplit>
				<CopySplit delay={0.2}>
					<p>
						But what does that actually mean?
						<br />
						<br />
						It means that the most effective training happens when your brain and your body are working in perfect sync. When you understand which muscles you're targeting, why you're using a specific technique, and how each exercise fits into your broader goals. Too many trainers operate on the "just do what I say" model. They'll count your reps, push you through a workout, and send you on your way. You might get sore. You might even see some results. But you won't truly understand what you're doing or why it works.
						<br />
						<br />
						That's not how I operate.
					</p>
				</CopySplit>
				<br />
				<CopySplit delay={0.3}>
					<p>
						I believe you deserve to understand your training.
						<br />
						<br />
						When you know why you're doing an exercise, you can execute it better. When you understand proper form, you can prevent injuries and maximize results. When you grasp the principles behind programming, you can continue making progress even outside our sessions.
						<br />
						<br />
						My job isn't just to train you for the next 12 weeks—it's to equip you with knowledge that lasts a lifetime.
					</p>
				</CopySplit>
			</div>
			<ScrollyImage>
				<img src="/philosophy-img.webp" alt="A training sesh" width={1124} height={663} />
			</ScrollyImage>
		</section>
	);
};

export default Philosophy;
