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
						<div className={styles.pricing__grid}>
							<div className={styles.pricing__tier}>
								<h4>Pre-Made Program - $75/month</h4>
								<ul>
									<li>Proven workout template adapted to your experience level</li>
									<li>Exercise video library</li>
									<li>Progress tracking</li>
									<li>Monthly program updates</li>
									<li>Email support</li>
								</ul>
							</div>

							<div className={styles.pricing__tier}>
								<h4>Tailored Program - $100/month</h4>
								<ul>
									<li>100% customized programming designed for YOUR goals</li>
									<li>Personalized exercise selection based on available equipment</li>
									<li>Detailed program explanations</li>
									<li>Bi-weekly program adjustments</li>
									<li>Priority email support</li>
								</ul>
							</div>

							<div className={styles.pricing__tier}>
								<h4>Tailored Programming + Coaching - $125/month</h4>
								<ul>
									<li>Everything in Tailored Program, PLUS:</li>
									<li>Weekly form check video reviews</li>
									<li>Direct messaging coaching support</li>
									<li>Weekly check-ins and accountability</li>
									<li>Nutritional guidance</li>
									<li>Ongoing program optimization based on feedback</li>
								</ul>
							</div>
						</div>
					</div>

					<button className={styles.training__cta}>START ONLINE TRAINING</button>
				</div>
			</div>
		</section>
	);
};

export default OnlineTraining;
