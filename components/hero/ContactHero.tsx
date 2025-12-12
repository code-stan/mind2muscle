"use client";

import React from "react";
import styles from "./ContactHero.module.scss";
import { trackConsultationClick } from "@/utils/analytics";
import ScrollyImage from "../common/ScrollyImage";

const ContactHero = () => {
	const handleConsultationClick = () => {
		trackConsultationClick("Contact Page");
	};

	return (
		<section className={styles.hero}>
			<div className={styles.hero__content}>
				<div className={styles["hero__content-top"]}>
					<h1>If you've read this far, you already know whether Mind2Muscle is right for you.</h1>
					<p>Let's have a conversation about your goals, your challenges, and how we can work together to create your transformation.</p>
					<a href="" onClick={handleConsultationClick}>Schedule Consultation</a>
				</div>
				<div className={styles["hero__content-bottom"]}>
					<div className={styles["location"]}>
						<h3>Training Location</h3>
						<p>327 North Main Street, Jennings, LA 70546</p>
					</div>
					<div className={styles["socials"]}>
						<h3>Connect with me</h3>
						<div className={styles["socials__links"]}>
							<a href="">Email</a>
							<a href="">Instagram</a>
							<a href="">Facebook</a>
							<a href="">Youtube/TikTok</a>
						</div>
					</div>
				</div>
			</div>
			<ScrollyImage className={styles["hero__image-container"]}>
				<img src="/contact-hero-img.webp" alt="Contact Hero Image" width={670} height={745} />
			</ScrollyImage>
		</section>
	);
};

export default ContactHero;
