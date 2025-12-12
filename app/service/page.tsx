import ServiceHero from "@/components/hero/ServiceHero";
import InPersonTraining from "@/components/training/InPersonTraining";
import MobileTraining from "@/components/training/MobileTraining";
import GroupTraining from "@/components/training/GroupTraining";
import OnlineTraining from "@/components/training/OnlineTraining";
import FAQ from "@/components/faq/FAQ";
import styles from "./style.module.scss";
import { Metadata } from "next";
import { ServiceSchema, BreadcrumbSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
	title: "Services - Personal Training Programs & Packages",
	description: "Explore Mind 2 Muscle's comprehensive training services: In-person training, mobile training, group sessions, and online coaching. Find the perfect program to match your fitness goals and lifestyle.",
	alternates: {
		canonical: "https://www.mind2muscle.site/service",
	},
	openGraph: {
		title: "Training Services - Personal, Mobile, Group & Online Programs",
		description: "Choose from in-person training, mobile training, group sessions, and online coaching. Find the perfect program to match your fitness goals.",
		url: "https://www.mind2muscle.site/service",
		type: "website",
	},
};

const page = () => {
	const breadcrumbItems = [
		{ name: "Home", url: "https://www.mind2muscle.site/" },
		{ name: "Services", url: "https://www.mind2muscle.site/service" }
	];

	return (
		<>
			<ServiceSchema />
			<BreadcrumbSchema items={breadcrumbItems} />
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
		</>
	);
};

export default page;
