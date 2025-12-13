"use client";

import styles from "./ServiceHero.module.scss";
import CopySplit from "../CopySplit";

const ServiceHero = () => {
	return (
		<section className={styles.hero}>
			<CopySplit>
				<h1>Training Options Built Around Your Life</h1>
			</CopySplit>
			<CopySplit delay={0.2}>
				<p>Whether you prefer one-on-one attention, group energy, training at home, or virtual coaching, we've got you covered. Clear pricing. Real results.</p>
			</CopySplit>
		</section>
	);
};

export default ServiceHero;
