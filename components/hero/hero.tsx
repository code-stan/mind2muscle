"use client";

import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";
import { contact, service } from "@/utils/routes";
import { trackConsultationClick, trackCTAClick } from "@/utils/analytics";

const quoteAuthor = "/quote-author.svg";
const quote = (
	<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.28889 0H6.60333C6.792 0 6.91778 0.12578 6.91778 0.314448V2.83C6.91778 3.01867 6.792 3.14444 6.60333 3.14444H4.40222C3.396 3.14444 3.396 3.77333 3.396 5.66H6.60333C6.792 5.66 6.91778 5.78578 6.91778 5.97445V13.8356C6.91778 14.0242 6.792 14.15 6.60333 14.15H0.314444C0.125778 14.15 0 14.0242 0 13.8356V5.66C0 0 0.628889 0 6.28889 0ZM15.7222 0H16.0367C16.2253 0 16.3511 0.12578 16.3511 0.314448V2.83C16.3511 3.01867 16.2253 3.14444 16.0367 3.14444H13.8356C12.8293 3.14444 12.8293 3.77333 12.8293 5.66H16.0367C16.2253 5.66 16.3511 5.78578 16.3511 5.97445V13.8356C16.3511 14.0242 16.2253 14.15 16.0367 14.15H9.74778C9.55911 14.15 9.43333 14.0242 9.43333 13.8356V5.66C9.43333 0 10.0622 0 15.7222 0Z" fill="white" style={{ fill: "white", fillOpacity: 1 }} />
	</svg>
);

const Hero = () => {
	const handleConsultationClick = () => {
		trackConsultationClick("Hero Section");
	};

	const handleViewProgramsClick = () => {
		trackCTAClick("View Programs", "Hero");
	};

	return (
		<section className={styles.hero}>
			<div className={styles["hero__content"]}>
				<h1>Where Your Mind Meets Your Muscle</h1>
				<p>Transform your fitness journey with a personal trainer who doesn't just count reps, but teaches you the why behind every movement. Science-backed training. Real results. Your goals, our expertise.</p>
				<div className={styles["hero__button-container"]}>
					<Link href={contact} onClick={handleConsultationClick}>Start Your Transformation</Link>
					<Link href={service} onClick={handleViewProgramsClick}>View Programs</Link>
				</div>
			</div>
			<div className={styles["hero__quote-image"]}>
				<div className={styles["hero__quote"]}>
					<div className={styles["quote"]}>{quote}</div>
					<p>It’s been fun training with Kashami. I come from a background where I had no experience with exercise. Kashami gave me a realistic and doable plan and I loved having the chats with him while getting a good workout.  He pushed me to my limits and always got the best from me in every session.  I would definitely recommend Kashami as your personal trainer.</p>
					<div className={styles["author"]}>
						<img src={quoteAuthor} alt="Client testimonial avatar" width={28} height={28} />
						<p>Cheryl,  68</p>
					</div>
				</div>
				<img src="/hero.webp" alt="Personal trainer working with client in gym" className={styles["hero__image"]} width={1360} height={679} />
			</div>
		</section>
	);
};

export default Hero;
