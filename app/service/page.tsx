import ServiceHero from "@/components/hero/ServiceHero";
import InPersonTraining from "@/components/training/InPersonTraining";
import MobileTraining from "@/components/training/MobileTraining";
import GroupTraining from "@/components/training/GroupTraining";
import OnlineTraining from "@/components/training/OnlineTraining";
import FAQ from "@/components/faq/FAQ";
import styles from "./style.module.scss";

const page = () => {
	return (
		<main className={styles["service"]}>
			<ServiceHero />
			<div className={styles["service__training"]}>
				<InPersonTraining />
				<MobileTraining />
				<GroupTraining />
				<OnlineTraining />
			</div>
			<FAQ />
		</main>
	);
};

export default page;
