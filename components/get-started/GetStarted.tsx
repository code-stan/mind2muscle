import { contact, service } from "@/utils/routes";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";

const GetStarted = () => {
	return (
		<section className={styles["get-started"]}>
			<h2>Ready to Make the Connection?</h2>
			<div className={styles["get-started__content"]}>
				<p>Your transformation starts with a conversation. Let's discuss your goals, your experience, and how Mind2Muscle can help you achieve results that last.</p>
				<Link href={service}>Get Started Today</Link>
			</div>
		</section>
	);
};

export default GetStarted;
