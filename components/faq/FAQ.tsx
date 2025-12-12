"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.scss";

interface FAQItem {
	question: string;
	answer: string;
}

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const faqData: FAQItem[] = [
		{
			question: "Why monthly packages instead of per-session pricing?",
			answer:
				"Monthly packages ensure consistency—which is the #1 factor in achieving results. They also provide better value per session and help you commit to the process rather than training sporadically.",
		},
		{
			question: "Can I switch between packages or frequency?",
			answer:
				"Absolutely. Life changes, and your training can adapt. We'll adjust your package at the start of each new billing cycle based on your schedule and goals.",
		},
		{
			question: "What if I miss a session?",
			answer:
				"Life happens. With 24-hour notice, we can reschedule your session within the same week. Missed sessions without notice cannot be refunded or rescheduled.",
		},
		{
			question: "Do you offer trial sessions?",
			answer:
				"Yes! New clients can schedule a free initial consultation where we'll discuss your goals, assess your current fitness level, and determine the best training approach for you. This isn't a high-pressure sales call—it's a genuine conversation about whether we're a good fit.",
		},
		{
			question: "Can I combine services?",
			answer:
				"Yes! New clients can schedule a free initial consultation where we'll discuss your goals, assess your current fitness level, and determine the best training approach for you. This isn't a high-pressure sales call—it's a genuine conversation about whether we're a good fit.",
		},
		{
			question: "What payment methods do you accept?",
			answer:
				"Yes! New clients can schedule a free initial consultation where we'll discuss your goals, assess your current fitness level, and determine the best training approach for you. This isn't a high-pressure sales call—it's a genuine conversation about whether we're a good fit.",
		},
		{
			question: "Is there a contract or long-term commitment?",
			answer:
				"Yes! New clients can schedule a free initial consultation where we'll discuss your goals, assess your current fitness level, and determine the best training approach for you. This isn't a high-pressure sales call—it's a genuine conversation about whether we're a good fit.",
		},
		{
			question: "What happens if I need to take a month off?",
			answer:
				"Yes! New clients can schedule a free initial consultation where we'll discuss your goals, assess your current fitness level, and determine the best training approach for you. This isn't a high-pressure sales call—it's a genuine conversation about whether we're a good fit.",
		},
		{
			question: "Do you offer discounts?",
			answer:
				"Yes! New clients can schedule a free initial consultation where we'll discuss your goals, assess your current fitness level, and determine the best training approach for you. This isn't a high-pressure sales call—it's a genuine conversation about whether we're a good fit.",
		},
	];

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className={styles.faq}>
			<div className={styles.faq__container}>
				<h2 className={styles.faq__title}>
					COMMON QUESTIONS
					<br />
					ABOUT PRICING &<br />
					PACKAGES
				</h2>

				<div className={styles.faq__list}>
					{faqData.map((item, index) => (
						<div
							key={index}
							className={`${styles.faq__item} ${
								openIndex === index ? styles["faq__item--open"] : ""
							}`}
						>
							<button
								className={styles.faq__question}
								onClick={() => toggleFAQ(index)}
								aria-expanded={openIndex === index}
							>
								<span>{item.question}</span>
								<svg
									className={styles.faq__icon}
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 9L12 15L18 9"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
							<div className={styles.faq__answer}>
								<div className={styles.faq__answer__content}>
									<p>{item.answer}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
