"use client";

import styles from "./style.module.scss";
import ScrollyImage from "../common/ScrollyImage";
import CopySplit from "../CopySplit";

const Approach = () => {
	return (
		<section className={styles["approach"]}>
			<ScrollyImage className={styles["approach__image-container"]}>
				<img src="/approach-img.webp" alt="Personal trainer demonstrating proper exercise form" width={710} height={728} />
			</ScrollyImage>
			<div className={styles["approach__content"]}>
				<CopySplit>
					<h2>My Approach</h2>
				</CopySplit>

				<div className={styles["approach__list"]}>
					<CopySplit delay={0.2}>
						<div className={styles["approach__list-item"]}>
							<h3>Education First </h3>
							<p>I believe informed clients get better results. You'll understand the "why" behind every exercise, rep scheme, and programming choice.</p>
						</div>
					</CopySplit>
					<br />
					<CopySplit delay={0.3}>
						<div className={styles["approach__list-item"]}>
							<h3>Individualized Programming</h3>
							<p> No cookie-cutter plans here. Your program is built around your goals, experience level, lifestyle, and any limitations or injuries you're working with.</p>
						</div>
					</CopySplit>
					<br />
					<CopySplit delay={0.4}>
						<div className={styles["approach__list-item"]}>
							<h3>Form & Technique Mastery</h3>
							<p>Proper form isn't just about avoiding injury—it's about maximizing results. I'll teach you how to properly engage the right muscles so every rep counts.</p>
						</div>
					</CopySplit>
					<br />
					<CopySplit delay={0.5}>
						<div className={styles["approach__list-item"]}>
							<h3>Long-Term Success</h3>
							<p>My goal isn't just to train you—it's to equip you with the knowledge and skills to maintain your results for life.</p>
						</div>
					</CopySplit>
				</div>
			</div>
		</section>
	);
};

export default Approach;
