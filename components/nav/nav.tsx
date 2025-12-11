"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { about, contact, service } from "@/utils/routes";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const lastScrollY = useRef(0);
	const scrollThreshold = 100; // px to scroll before nav becomes fixed

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Make nav fixed after scroll threshold
			if (currentScrollY > scrollThreshold) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
				setIsVisible(true); // Always show when not fixed
				return;
			}

			// Show/hide nav based on scroll direction
			if (currentScrollY > lastScrollY.current && currentScrollY > scrollThreshold) {
				// Scrolling down
				setIsVisible(false);
			} else if (currentScrollY < lastScrollY.current) {
				// Scrolling up
				setIsVisible(true);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		const newMenuState = !isMenuOpen;
		setIsMenuOpen(newMenuState);

		// Prevent body scroll when menu is open
		if (newMenuState) {
			document.body.style.overflow = "hidden";
			document.body.style.position = "fixed";
			document.body.style.width = "100%";
		} else {
			document.body.style.overflow = "";
			document.body.style.position = "";
			document.body.style.width = "";
		}
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
		document.body.style.overflow = "";
		document.body.style.position = "";
		document.body.style.width = "";
	};

	return (
		<>
			<nav className={`${styles.nav} ${isFixed ? styles["nav--fixed"] : ""} ${!isVisible ? styles["nav--hidden"] : ""}`}>
				{/* Desktop Navigation */}
				<ul className={styles["nav__list"]}>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href={about}>About Me</Link>
					</li>
					<img src="/m2m-logo.svg" alt="Mind 2 Muscle Logo" width={72} height={72} />
					<li>
						<Link href={service}>Services</Link>
					</li>
					<li>
						<Link href={contact}>Contact</Link>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<div className={styles["nav__mobile-header"]}>
					<img src="/m2m-logo.svg" alt="Mind 2 Muscle Logo" width={48} height={48} />
					<button
						className={styles["nav__menu-btn"]}
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? "Close" : "Menu"}
					</button>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			<div className={`${styles["mobile-menu"]} ${isMenuOpen ? styles["mobile-menu--open"] : ""}`}>
				<div className={styles["mobile-menu__header"]}>
					<img src="/m2m-logo.svg" alt="Mind 2 Muscle Logo" width={48} height={48} />
					<button
						className={styles["mobile-menu__close-btn"]}
						onClick={closeMenu}
						aria-label="Close menu"
					>
						Close
					</button>
				</div>

				<nav className={styles["mobile-menu__nav"]}>
					<Link href="/" className={styles["mobile-menu__link"]} onClick={closeMenu}>
						Home
					</Link>
					<Link href={about} className={styles["mobile-menu__link"]} onClick={closeMenu}>
						About Me
					</Link>
					<Link href={service} className={styles["mobile-menu__link"]} onClick={closeMenu}>
						Services
					</Link>
					<Link href={contact} className={styles["mobile-menu__link"]} onClick={closeMenu}>
						Contact
					</Link>
				</nav>

				<div className={styles["mobile-menu__footer"]}>
					<div className={styles["mobile-menu__section"]}>
						<h3>Training Location:</h3>
						<p>Training Location:</p>
					</div>

					<div className={styles["mobile-menu__section"]}>
						<h3>Connect with me</h3>
						<div className={styles["mobile-menu__social"]}>
							<a href="mailto:">Email</a>
							<a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
							<a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
						</div>
						<div className={styles["mobile-menu__social"]}>
							<a href="#" target="_blank" rel="noopener noreferrer">YouTube/TikTok</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
