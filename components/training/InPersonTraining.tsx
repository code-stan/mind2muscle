"use client";

import React, { useEffect, useRef } from "react";
import styles from "./InPersonTraining.module.scss";
import { trackPricingView, trackCTAClick } from "@/utils/analytics";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InPersonTraining = () => {
	const pricingRef = useRef<HTMLDivElement>(null);
	const hasTrackedRef = useRef(false);

	const features = ["Personalized workout programming updated regularly", "Real-time form correction and technique coaching", "Progress tracking and regular assessments", "Nutritional guidance and lifestyle support", "Flexible scheduling around your availability", "Full gym equipment access during sessions"];

	const pricingData = [
		{ sessions: "1x per week", price: "$40/session", monthly: "$160/month" },
		{ sessions: "2x per week", price: "$25/session", monthly: "$200/month" },
		{ sessions: "3x per week", price: "$20/session", monthly: "$240/month" },
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasTrackedRef.current) {
						trackPricingView("In-Person Training");
						hasTrackedRef.current = true;
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (pricingRef.current) {
			observer.observe(pricingRef.current);

			// Animate table on scroll
			gsap.fromTo(
				pricingRef.current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: pricingRef.current,
						start: "top 80%",
						once: true,
					},
				}
			);
		}

		return () => {
			if (pricingRef.current) {
				observer.unobserve(pricingRef.current);
			}
		};
	}, []);

	const handleCTAClick = () => {
		trackCTAClick("START IN-PERSON TRAINING", "In-Person Training");
	};

	return (
		<section className={styles.training}>
			<div className={styles.training__container}>
				<div className={styles.training__header}>
					<h2>IN-PERSON PERSONAL TRAINING</h2>
					<p>Get 100% customized programming and hands-on coaching tailored specifically to your goals, body, and experience level. Train at our facility with access to professional equipment and expert guidance every step of the way.</p>
				</div>

				<div className={styles.training__content}>
					<div className={styles.training__features}>
						<h3>WHAT'S INCLUDED:</h3>
						<ul>
							{features.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>
					</div>

					<div className={styles.training__ideal}>
						<h4>Ideal For:</h4>
						<p>Beginners looking for confidence, experienced lifters wanting to break through plateaus, or anyone with specific goals like fat loss, muscle gain, athletic performance, or working around injuries.</p>
					</div>

					<div ref={pricingRef} className={styles.training__pricing}>
						<table>
							<thead>
								<tr>
									<th>Sessions Per Week</th>
									<th>Price Per Session</th>
									<th>Monthly Total</th>
								</tr>
							</thead>
							<tbody>
								{pricingData.map((row, index) => (
									<tr key={index}>
										<td>{row.sessions}</td>
										<td>{row.price}</td>
										<td>{row.monthly}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<button className={styles.training__cta} onClick={handleCTAClick}>
						START IN-PERSON TRAINING
					</button>
				</div>
			</div>
		</section>
	);
};

export default InPersonTraining;
