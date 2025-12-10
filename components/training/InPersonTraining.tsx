import React from "react";
import styles from "./InPersonTraining.module.scss";

const InPersonTraining = () => {
	const features = [
		"Personalized workout programming updated regularly",
		"Real-time form correction and technique coaching",
		"Progress tracking and regular assessments",
		"Nutritional guidance and lifestyle support",
		"Flexible scheduling around your availability",
		"Full gym equipment access during sessions",
	];

	const pricingData = [
		{ sessions: "1x per week", price: "$40/session", monthly: "$160/month" },
		{ sessions: "2x per week", price: "$25/session", monthly: "$200/month" },
		{ sessions: "3x per week", price: "$20/session", monthly: "$240/month" },
	];

	return (
		<section className={styles.training}>
			<div className={styles.training__container}>
				<div className={styles.training__header}>
					<h2>IN-PERSON PERSONAL TRAINING</h2>
					<p>
						Get 100% customized programming and hands-on coaching tailored specifically to your goals, body, and experience level. Train at our facility with access to professional equipment and expert guidance every step of the way.
					</p>
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
						<p>
							Beginners looking for confidence, experienced lifters wanting to break through plateaus, or anyone with specific goals like fat loss, muscle gain, athletic performance, or working around injuries.
						</p>
					</div>

					<div className={styles.training__pricing}>
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

					<button className={styles.training__cta}>START IN-PERSON TRAINING</button>
				</div>
			</div>
		</section>
	);
};

export default InPersonTraining;
