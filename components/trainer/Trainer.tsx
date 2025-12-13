"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import { about } from "@/utils/routes";
import ScrollyImage from "../common/ScrollyImage";
import CopySplit from "../CopySplit";
import { Link } from "next-view-transitions";

const Trainer = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<section className={styles.trainer}>
			<div className={styles["trainer__content"]}>
				<CopySplit>
					<h2 className={styles.intro}>Hi, I'm Kashami, and I'm not your average personal trainer.</h2>
				</CopySplit>
				<CopySplit delay={0.2}>
					<p>
						I didn't just become a personal trainer because I love fitness. I became a trainer because I believe everyone deserves to understand their body—how it moves, how it grows, and how to unlock its full potential.
						<br />
						<br />
						Too many people go through the motions in the gym without really knowing what they're doing or why. They follow generic programs, copy exercises from social media, or push through workouts that aren't aligned with their actual goals. Then they wonder why results plateau or injuries happen.
						<br />
						<br />
						That's where Mind2Muscle comes in.
						<br />
						<br />
						I take a holistic, knowledge-first approach to personal training. Every client I work with doesn't just get stronger—they get smarter. They learn proper form, understand muscle engagement, and develop the skills to continue progressing long after our sessions end.
						<br />
						<br />
						Whether you're brand new to fitness or you've been training for years, my job is to meet you where you are and guide you to where you want to be—with clarity, purpose, and results you can see and feel.
					</p>
				</CopySplit>
			</div>
			<div className={styles["trainer__image-container"]}>
				<ScrollyImage>
					<img src="/kashami.webp" alt="A photo of Kashami" width={598} height={725} />
				</ScrollyImage>
				<div className={styles["link-container"]}>
					<Link
						href={about}
						className={styles["liquid-button"]}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						onTouchStart={() => setIsHovered(true)}
						onTouchEnd={() => setTimeout(() => setIsHovered(false), 300)}
					>
						<span className={styles["liquid-fill"]} data-hovered={isHovered}></span>
						<span className={styles["button-text"]}>Learn More</span>
						<span className={styles["button-text"]}>↗</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Trainer;
