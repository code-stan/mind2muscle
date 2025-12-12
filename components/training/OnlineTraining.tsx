import React from "react";
import styles from "./OnlineTraining.module.scss";

const OnlineTraining = () => {
	const baseFeatures = [
		"Custom workout programs delivered via app/email",
		"Exercise demonstration videos",
		"Form check video reviews and feedback",
		"Regular program updates based on your progress",
		"Direct messaging support for questions",
		"Monthly check-ins and adjustments",
		"Optional nutritional guidance and coaching",
	];

	const pricingFeatures = [
		{
			preMade: "Proven workout template adapted to your experience level",
			tailored: "100% customized programming designed for YOUR goals",
			coaching: "Everything in Tailored Program, PLUS:",
		},
		{
			preMade: "Exercise video library",
			tailored: "Personalized exercise selection based on available equipment",
			coaching: "Weekly form check video reviews",
		},
		{
			preMade: "Progress tracking",
			tailored: "Detailed program explanations",
			coaching: "Direct messaging coaching support",
		},
		{
			preMade: "Monthly program updates",
			tailored: "Bi-weekly program adjustments",
			coaching: "Weekly check-ins and accountability",
		},
		{
			preMade: "Email support",
			tailored: "Priority email support",
			coaching: "Nutritional guidance",
		},
		{
			preMade: "",
			tailored: "",
			coaching: "Ongoing program optimization based on feedback",
		},
	];

	const mobilePackages = [
		{
			title: "Pre-Made Program - $75/month",
			features: pricingFeatures.map((f) => f.preMade).filter((f) => f !== ""),
		},
		{
			title: "Tailored Program - $100/month",
			features: pricingFeatures.map((f) => f.tailored).filter((f) => f !== ""),
		},
		{
			title: "Tailored Programming + Coaching - $125/month",
			features: pricingFeatures.map((f) => f.coaching).filter((f) => f !== ""),
		},
	];

	return (
		<section className={styles.training}>
			<div className={styles.training__container}>
				<div className={styles.training__header}>
					<h2>ONLINE PERSONAL TRAINING</h2>
					<p>
						Get professional programming and ongoing support from anywhere. Perfect for self-motivated individuals who want structured, expert-designed training without in-person sessions—or as a supplement to in-person training.
					</p>
				</div>

				<div className={styles.training__content}>
					<div className={styles.training__features}>
						<h3>WHAT'S INCLUDED (VARIES BY PACKAGE):</h3>
						<ul>
							{baseFeatures.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>
					</div>

					<div className={styles.training__ideal}>
						<h4>Ideal For:</h4>
						<p>
							Self-starters, frequent travelers, those outside the local area, clients wanting structured programming with expert oversight, or anyone looking for affordable professional guidance.
						</p>
					</div>

					<div className={styles.training__pricing}>
						<h3>PRICING</h3>
						<table className={styles.training__pricing__table}>
							<thead>
								<tr>
									<th>Pre-Made Program - $75/month</th>
									<th>Tailored Program - $100/month</th>
									<th>Tailored Programming + Coaching - $125/month</th>
								</tr>
							</thead>
							<tbody>
								{pricingFeatures.map((row, index) => (
									<tr key={index}>
										<td>{row.preMade}</td>
										<td>{row.tailored}</td>
										<td>{row.coaching}</td>
									</tr>
								))}
							</tbody>
						</table>

						<div className={styles.training__pricing__mobile}>
							{mobilePackages.map((pkg, index) => (
								<div key={index} className={styles.training__pricing__card}>
									<div className={styles.training__pricing__card__title}>{pkg.title}</div>
									{pkg.features.map((feature, fIndex) => (
										<div key={fIndex} className={styles.training__pricing__card__feature}>
											{feature}
										</div>
									))}
								</div>
							))}
						</div>
					</div>

					<button className={styles.training__cta}>START ONLINE TRAINING</button>
				</div>
			</div>
		</section>
	);
};

export default OnlineTraining;
