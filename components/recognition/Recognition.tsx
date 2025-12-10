import React from "react";
import styles from "./Recognition.module.scss";

const Recognition: React.FC = () => {
	return (
		<section className={styles.recognition}>
			<h2>
				Recognition <br />
				over the years
			</h2>
			<div className={styles.recognition__list}>
				<div className={styles.recognition__list_item}>
					<h3>2</h3>
					<p>Certifications</p>
				</div>
				<div className={styles.recognition__list_item}>
					<h3>8+</h3>
					<p>Years of experience</p>
				</div>
				<div className={styles.recognition__list_item}>
					<h3>70+</h3>
					<p>Clients trained</p>
				</div>
				<div className={styles.recognition__list_item}>
					<img src="/cscs-logo.svg" alt="CSCS Logo" width={77} height={77} />
					<p>NSCA Certified</p>
				</div>
			</div>
		</section>
	);
};

export default Recognition;
