'use client';

import React, { useState } from 'react';
import styles from './style.module.scss';

const testimonials = [
  {
    id: 1,
    text: "It's been fun training with Kashami. I come from a background where I had no experience with exercise. Kashami gave me a realistic and doable plan and I loved having the chats with him while getting a good workout. He pushed me to my limits and always got the best from me in every session. I would definitely recommend Kashami as your personal trainer.",
    name: "Cheryl",
    age: 68,
    rating: 4.5,
    bgColor: 'gray'
  },
  {
    id: 2,
    text: "I have been training with Kashami for the past three months & have already noticed significant results. His guidance has helped me identify which areas to focus on during my workout, improve my consistency in the gym, & achieve short-term goals while continuing to work toward long-term success. I would highly recommend his services to anyone looking to elevate their fitness journey.",
    name: "Lakin",
    age: 22,
    rating: 4.5,
    bgColor: 'pink'
  },
  {
    id: 3,
    text: "I worked with Kashami for 3 months and saw real results when I stayed consistent. He personalized all workouts to fit my goals and checked in mentally each week. He was both understanding and stern — exactly what I needed. I gained muscle and built strength in areas I wanted to improve.",
    name: "Tajuan",
    age: 25,
    rating: 4.5,
    bgColor: 'gray'
  },
  {
    id: 4,
    text: "Since working with you, I've felt very confident in my training. You listen to my feedback and make necessary changes to my program, explaining everything so I'm not left in the dark. I've never felt more confident in my training since I've been on your program.",
    name: "Mattie",
    age: 21,
    rating: 4.5,
    bgColor: 'pink'
  },
  {
    id: 5,
    text: "Kashami helped me get on track in a new weight class. Science based and injury conscious. Highly recommend.",
    name: "Toby",
    age: 22,
    rating: 4.5,
    bgColor: 'gray'
  },
  {
    id: 6,
    text: "Working with Kashami has been a blast. His program helped me reach my deadlift goal of 500 in just 4 weeks which was a long time goal for me. If I have any question about the workout, Kashami is easy to contact and helps explain the exercise with easy to learn videos. Cannot wait to crush more PRs in the future!",
    name: "Hunter",
    age: 22,
    rating: 4.5,
    bgColor: 'pink'
  },
  {
    id: 7,
    text: "Coach Kashami's knowledge of programming, technique, and recovery allowed my son to reach the next level. He took time to explain the 'why' behind each movement and tailored the program to his specific strengths and weaknesses. Beyond the numbers, he helped build consistency, discipline, and a stronger mindset.",
    name: "Brandie",
    age: null,
    rating: 4.5,
    bgColor: 'gray'
  },
  {
    id: 8,
    text: "Working with Kashami has been extremely beneficial in my fat loss journey. In just 3 months time he has helped me to lose 30 pounds through a program structured and tailored specifically to my goals, age, and experience level. I highly recommend him for personal training to anyone who wants to achieve their fitness goals and become more knowledgeable about fitness.",
    name: "Tricia",
    age: 69,
    rating: 4.5,
    bgColor: 'pink'
  },
  {
    id: 9,
    text: "My coach has taken me great lengths in the 1 year that I've been working with him. I went from 250 pounds to losing 80 pounds over 3.5 years. What I've learned is to take it one step at a time, get a little better each day, and build up better habits over time. Consistency is key.",
    name: "McGuire",
    age: null,
    rating: 4.5,
    bgColor: 'gray'
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <div className={styles.testimonials__header}>
          <h2 className={styles.testimonials__title}>
            REAL PEOPLE. REAL RESULTS.
          </h2>
          <div className={styles.testimonials__navigation}>
            <button
              className={styles.testimonials__navButton}
              onClick={prevSlide}
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className={styles.testimonials__navButton}
              onClick={nextSlide}
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.testimonials__grid}>
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonials__card} ${styles[`testimonials__card--${testimonial.bgColor}`]}`}
            >
              <div className={styles.testimonials__cardHeader}>
                <div className={styles.testimonials__quote}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M10 8C10 10.2091 8.20914 12 6 12V18C11.5228 18 16 13.5228 16 8H10Z"/>
                    <path d="M24 8C24 10.2091 22.2091 12 20 12V18C25.5228 18 30 13.5228 30 8H24Z"/>
                  </svg>
                </div>
                <div className={styles.testimonials__rating}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#FFD700">
                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"/>
                  </svg>
                  <span>{testimonial.rating} Rating</span>
                </div>
              </div>

              <p className={styles.testimonials__text}>
                {testimonial.text}
              </p>

              <p className={styles.testimonials__author}>
                — {testimonial.name}{testimonial.age ? `, ${testimonial.age}` : ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
