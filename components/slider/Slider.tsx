import React from 'react';
import styles from './style.module.scss';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles['slider__track']}>
        {/* Placeholder for slides */}
        <div className={styles['slider__slide']}>Slide 1 Content</div>
        <div className={styles['slider__slide']}>Slide 2 Content</div>
        <div className={styles['slider__slide']}>Slide 3 Content</div>
      </div>
      <button className={`${styles.slider__button} ${styles['slider__button--prev']}`}>Prev</button>
      <button className={`${styles.slider__button} ${styles['slider__button--next']}`}>Next</button>
      <div className={styles['slider__dots']}>
        <span className={styles['slider__dot--active']}></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Slider;
