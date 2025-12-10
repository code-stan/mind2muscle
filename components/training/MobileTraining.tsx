import React from "react";
import styles from "./MobileTraining.module.scss";

const MobileTraining = () => {
	const features = [
		"Training at your location of choice (within 25-mile radius)",
		"All necessary equipment provided",
		"Personalized programming tailored to your space and goals",
		"Flexible scheduling that fits your busy life",
		"Complete privacy and convenience",
		"Same expert coaching as in-person sessions",
	];

	const pricingData = [
		{ sessions: "1x per week", price: "$40/session", monthly: "$160/month" },
		{ sessions: "2x per week", price: "$30/session", monthly: "$240/month" },
		{ sessions: "3x per week", price: "$25/session", monthly: "$300/month" },
	];

	return (
		<section className={styles.training}>
			<div className={styles.training__container}>
				<div className={styles.training__header}>
					<h2>MOBILE TRAINING</h2>
					<p>
						No gym? No problem. I'll bring the workout—and the equipment—directly to your home, office, backyard, or any location that works for you. All the benefits of personalized training without the commute or gym membership.
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
							Busy professionals, stay-at-home parents, anyone with limited gym access, those who prefer privacy, or clients who want the ultimate convenience in their fitness routine.
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

					<button className={styles.training__cta}>SCHEDULE MOBILE TRAINING</button>
				</div>
			</div>
		</section>
	);
};

export default MobileTraining;
