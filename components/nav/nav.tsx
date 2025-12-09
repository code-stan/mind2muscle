import styles from "./style.module.scss";

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles["nav__list"]}>
				<li>
					<a href="">Home</a>
				</li>
				<li>
					<a href="">About Me</a>
				</li>
				<img src="/m2m-logo.svg" alt="Mind 2 Muscle Logo" width={72} height={72} />
				<li>
					<a href="">Services</a>
				</li>
				<li>
					<a href="">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
