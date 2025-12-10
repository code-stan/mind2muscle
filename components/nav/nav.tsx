import Link from "next/link";
import styles from "./style.module.scss";
import { about, contact, service } from "@/utils/routes";

const Nav = () => {
	return (
		<nav className={styles.nav}>
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
		</nav>
	);
};

export default Nav;
