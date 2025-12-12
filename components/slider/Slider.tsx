"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";

const testimonials = [
	{
		id: 1,
		text: "It's been fun training with Kashami. I come from a background where I had no experience with exercise. Kashami gave me a realistic and doable plan and I loved having the chats with him while getting a good workout. He pushed me to my limits and always got the best from me in every session. I would definitely recommend Kashami as your personal trainer.",
		name: "Cheryl",
		age: 68,
		rating: 4.5,
		bgColor: "gray",
	},
	{
		id: 2,
		text: "I have been training with Kashami for the past three months & have already noticed significant results. His guidance has helped me identify which areas to focus on during my workout, improve my consistency in the gym, & achieve short-term goals while continuing to work toward long-term success. I would highly recommend his services to anyone looking to elevate their fitness journey.",
		name: "Lakin",
		age: 22,
		rating: 4.5,
		bgColor: "pink",
	},
	{
		id: 3,
		text: "I worked with Kashami for 3 months and saw real results when I stayed consistent. He personalized all workouts to fit my goals and checked in mentally each week. He was both understanding and stern — exactly what I needed. I gained muscle and built strength in areas I wanted to improve.",
		name: "Tajuan",
		age: 25,
		rating: 4.5,
		bgColor: "gray",
	},
	{
		id: 4,
		text: "Since working with you, I've felt very confident in my training. You listen to my feedback and make necessary changes to my program, explaining everything so I'm not left in the dark. I've never felt more confident in my training since I've been on your program.",
		name: "Mattie",
		age: 21,
		rating: 4.5,
		bgColor: "pink",
	},
	{
		id: 5,
		text: "Kashami helped me get on track in a new weight class. Science based and injury conscious. Highly recommend.",
		name: "Toby",
		age: 22,
		rating: 4.5,
		bgColor: "gray",
	},
	{
		id: 6,
		text: "Working with Kashami has been a blast. His program helped me reach my deadlift goal of 500 in just 4 weeks which was a long time goal for me. If I have any question about the workout, Kashami is easy to contact and helps explain the exercise with easy to learn videos. Cannot wait to crush more PRs in the future!",
		name: "Hunter",
		age: 22,
		rating: 4.5,
		bgColor: "pink",
	},
	{
		id: 7,
		text: "Coach Kashami's knowledge of programming, technique, and recovery allowed my son to reach the next level. He took time to explain the 'why' behind each movement and tailored the program to his specific strengths and weaknesses. Beyond the numbers, he helped build consistency, discipline, and a stronger mindset.",
		name: "Brandie",
		age: null,
		rating: 4.5,
		bgColor: "gray",
	},
	{
		id: 8,
		text: "Working with Kashami has been extremely beneficial in my fat loss journey. In just 3 months time he has helped me to lose 30 pounds through a program structured and tailored specifically to my goals, age, and experience level. I highly recommend him for personal training to anyone who wants to achieve their fitness goals and become more knowledgeable about fitness.",
		name: "Tricia",
		age: 69,
		rating: 4.5,
		bgColor: "pink",
	},
	{
		id: 9,
		text: "My coach has taken me great lengths in the 1 year that I've been working with him. I went from 250 pounds to losing 80 pounds over 3.5 years. What I've learned is to take it one step at a time, get a little better each day, and build up better habits over time. Consistency is key.",
		name: "McGuire",
		age: null,
		rating: 4.5,
		bgColor: "gray",
	},
];

const quote = (
	<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.28889 0H6.60333C6.792 0 6.91778 0.12578 6.91778 0.314448V2.83C6.91778 3.01867 6.792 3.14444 6.60333 3.14444H4.40222C3.396 3.14444 3.396 3.77333 3.396 5.66H6.60333C6.792 5.66 6.91778 5.78578 6.91778 5.97445V13.8356C6.91778 14.0242 6.792 14.15 6.60333 14.15H0.314444C0.125778 14.15 0 14.0242 0 13.8356V5.66C0 0 0.628889 0 6.28889 0ZM15.7222 0H16.0367C16.2253 0 16.3511 0.12578 16.3511 0.314448V2.83C16.3511 3.01867 16.2253 3.14444 16.0367 3.14444H13.8356C12.8293 3.14444 12.8293 3.77333 12.8293 5.66H16.0367C16.2253 5.66 16.3511 5.78578 16.3511 5.97445V13.8356C16.3511 14.0242 16.2253 14.15 16.0367 14.15H9.74778C9.55911 14.15 9.43333 14.0242 9.43333 13.8356V5.66C9.43333 0 10.0622 0 15.7222 0Z" fill="#CC0008" />
	</svg>
);

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState<"next" | "prev" | null>(null);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const itemsPerPage = isMobile ? 1 : 3;

	const nextSlide = () => {
		if (isAnimating) return;
		setDirection("next");
		setIsAnimating(true);
		setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage));
		setTimeout(() => {
			setDirection(null);
			setIsAnimating(false);
		}, 500);
	};

	const prevSlide = () => {
		if (isAnimating) return;
		setDirection("prev");
		setIsAnimating(true);
		setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage < 0 ? Math.max(0, testimonials.length - itemsPerPage) : prevIndex - itemsPerPage));
		setTimeout(() => {
			setDirection(null);
			setIsAnimating(false);
		}, 500);
	};

	const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

	const isPrevDisabled = currentIndex === 0;
	const isNextDisabled = currentIndex + itemsPerPage >= testimonials.length;

	return (
		<section className={styles.testimonials}>
			<div className={styles.testimonials__container}>
				<div className={styles.testimonials__header}>
					<h2 className={styles.testimonials__title}>REAL PEOPLE. REAL RESULTS.</h2>
					<div className={styles.testimonials__navigation}>
						<button className={`${styles.testimonials__navButton} ${isPrevDisabled ? styles["testimonials__navButton--disabled"] : ""}`} onClick={prevSlide} disabled={isPrevDisabled} aria-label="Previous testimonials">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 0L0 10L10 20L12.875 17.125L7.78125 12.0312H19.8438C19.9375 12.0312 20 11.9688 20 11.875V8.125C20 8.03125 19.9375 7.96875 19.8438 7.96875H7.78125L12.875 2.875L10 0Z" fill="currentColor" />
							</svg>
						</button>
						<button className={`${styles.testimonials__navButton} ${isNextDisabled ? styles["testimonials__navButton--disabled"] : ""}`} onClick={nextSlide} disabled={isNextDisabled} aria-label="Next testimonials">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 0L20 10L10 20L7.125 17.125L12.2188 12.0312H0.15625C0.0625 12.0312 0 11.9688 0 11.875V8.125C0 8.03125 0.0625 7.96875 0.15625 7.96875H12.2188L7.125 2.875L10 0Z" fill="currentColor" />
							</svg>
						</button>
					</div>
				</div>

				<div className={`${styles.testimonials__grid} ${direction === "next" ? styles["testimonials__grid--slideNext"] : ""} ${direction === "prev" ? styles["testimonials__grid--slidePrev"] : ""}`}>
					{visibleTestimonials.map((testimonial) => (
						<div key={testimonial.id} className={`${styles.testimonials__card} ${styles[`testimonials__card--${testimonial.bgColor}`]}`}>
							<div className={styles.testimonials__cardHeader}>
								<div className={styles.testimonials__quote}>{quote}</div>
								<div className={styles.testimonials__rating}>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M18.3039 8.97274L14.7882 12.0063L15.8593 16.5431C15.9184 16.7893 15.9032 17.0476 15.8156 17.2852C15.728 17.5229 15.5719 17.7292 15.3671 17.8782C15.1623 18.0272 14.9179 18.1121 14.6648 18.1222C14.4118 18.1324 14.1614 18.0673 13.9453 17.9352L9.99995 15.5071L6.0523 17.9352C5.83622 18.0666 5.58613 18.131 5.3335 18.1205C5.08087 18.11 4.837 18.0249 4.63261 17.8761C4.42822 17.7272 4.27243 17.5212 4.18488 17.284C4.09732 17.0468 4.08191 16.789 4.14058 16.5431L5.21558 12.0063L1.69995 8.97274C1.50878 8.80752 1.37052 8.58963 1.30244 8.34629C1.23436 8.10296 1.23947 7.84496 1.31715 7.60452C1.39483 7.36407 1.54162 7.15184 1.73919 6.99432C1.93677 6.83681 2.17637 6.74099 2.42808 6.71884L7.03745 6.34696L8.81558 2.04384C8.91182 1.80932 9.07563 1.60872 9.28618 1.46754C9.49673 1.32636 9.7445 1.25098 9.998 1.25098C10.2515 1.25098 10.4993 1.32636 10.7098 1.46754C10.9204 1.60872 11.0842 1.80932 11.1804 2.04384L12.9578 6.34696L17.5671 6.71884C17.8193 6.74017 18.0596 6.83545 18.2579 6.99275C18.4562 7.15005 18.6037 7.36236 18.6819 7.6031C18.76 7.84383 18.7654 8.10228 18.6973 8.34606C18.6292 8.58984 18.4907 8.80811 18.2992 8.97352L18.3039 8.97274Z" fill="#FFCC00" />
									</svg>

									<span>{testimonial.rating} Rating</span>
								</div>
							</div>

							<p className={styles.testimonials__text}>{testimonial.text}</p>

							<p className={styles.testimonials__author}>
								— {testimonial.name}
								{testimonial.age ? `, ${testimonial.age}` : ""}
							</p>
						</div>
					))}
				</div>

				<div className={styles.testimonials__navigationMobile}>
					<button className={`${styles.testimonials__navButton} ${isPrevDisabled ? styles["testimonials__navButton--disabled"] : ""}`} onClick={prevSlide} disabled={isPrevDisabled} aria-label="Previous testimonials">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 0L0 10L10 20L12.875 17.125L7.78125 12.0312H19.8438C19.9375 12.0312 20 11.9688 20 11.875V8.125C20 8.03125 19.9375 7.96875 19.8438 7.96875H7.78125L12.875 2.875L10 0Z" fill="currentColor" />
						</svg>
					</button>
					<button className={`${styles.testimonials__navButton} ${isNextDisabled ? styles["testimonials__navButton--disabled"] : ""}`} onClick={nextSlide} disabled={isNextDisabled} aria-label="Next testimonials">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 0L20 10L10 20L7.125 17.125L12.2188 12.0312H0.15625C0.0625 12.0312 0 11.9688 0 11.875V8.125C0 8.03125 0.0625 7.96875 0.15625 7.96875H12.2188L7.125 2.875L10 0Z" fill="currentColor" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Slider;
