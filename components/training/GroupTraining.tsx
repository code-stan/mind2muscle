"use client";

import React, { useEffect, useRef } from "react";
import styles from "./GroupTraining.module.scss";
import { trackPricingView, trackCTAClick } from "@/utils/analytics";

const GroupTraining = () => {
	const pricingRef = useRef<HTMLDivElement>(null);
	const hasTrackedRef = useRef(false);

	const features = ["Small group sessions for personalized attention", "Scalable programming that adapts to each person's fitness level", "Supportive, motivating environment", "Expert coaching for proper form and technique", "Flexible scheduling for your group", "More cost-effective than solo training"];

	const pricingData = [
		{ group: "Couples (2 people)", price: "$20/person/session", monthly: "$160/month per person (2x/week)" },
		{ group: "Group of 3", price: "$15/person/session", monthly: "$120/month per person (2x/week)" },
		{ group: "Group of 4+", price: "$10/person/session", monthly: "$80/month per person (2x/week)" },
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasTrackedRef.current) {
						trackPricingView("Group Training");
						hasTrackedRef.current = true;
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (pricingRef.current) {
			observer.observe(pricingRef.current);
		}

		return () => {
			if (pricingRef.current) {
				observer.unobserve(pricingRef.current);
			}
		};
	}, []);

	const handleCTAClick = () => {
		trackCTAClick("START GROUP TRAINING", "Group Training");
	};

	return (
		<section className={styles.training}>
			<div className={styles.training__container}>
				<div className={styles.training__header}>
					<h2>GROUP TRAINING</h2>
					<p>Train alongside friends, family, or workout partners in small group settings. Get expert coaching and the accountability of training with others—all at a more affordable price point than individual sessions.</p>
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
						<p>Friends who want to train together, couples looking for shared fitness goals, small groups seeking accountability and motivation, or anyone who thrives in a community environment while still wanting professional coaching.</p>
					</div>

					<div ref={pricingRef} className={styles.training__pricing}>
						<table>
							<thead>
								<tr>
									<th>Sessions Per Week</th>
									<th>Price Per Person/Session</th>
									<th>Example Monthly Cost*</th>
								</tr>
							</thead>
							<tbody>
								{pricingData.map((row, index) => (
									<tr key={index}>
										<td data-label="Sessions Per Week">
											<span>{row.group}</span>
										</td>
										<td data-label="Price Per Person/Session">{row.price}</td>
										<td data-label="Example Monthly Cost*">{row.monthly}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<button className={styles.training__cta} onClick={handleCTAClick}>
						START GROUP TRAINING
					</button>
				</div>
			</div>
		</section>
	);
};

export default GroupTraining;
