"use client";

import React from "react";
import styles from "./Recognition.module.scss";
import CopySplit from "../CopySplit";

const Recognition: React.FC = () => {
	return (
		<section className={styles.recognition}>
			<CopySplit>
				<h2>
					Recognition <br />
					over the years
				</h2>
			</CopySplit>
			<div className={styles.recognition__list}>
				<CopySplit delay={0.2}>
					<div className={styles.recognition__list_item}>
						<h3>2</h3>
						<p>Certifications</p>
					</div>
				</CopySplit>
				<CopySplit delay={0.3}>
					<div className={styles.recognition__list_item}>
						<h3>8+</h3>
						<p>Years of experience</p>
					</div>
				</CopySplit>
				<CopySplit delay={0.4}>
					<div className={styles.recognition__list_item}>
						<h3>70+</h3>
						<p>Clients trained</p>
					</div>
				</CopySplit>
				<CopySplit delay={0.5}>
					<div className={styles.recognition__list_item}>
						<img src="/cscs-logo.svg" alt="CSCS Logo" width={77} height={77} />
						<p>NSCA Certified</p>
					</div>
				</CopySplit>
			</div>
		</section>
	);
};

export default Recognition;
