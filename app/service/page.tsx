import ServiceHero from "@/components/hero/ServiceHero";
import InPersonTraining from "@/components/training/InPersonTraining";
import MobileTraining from "@/components/training/MobileTraining";
import GroupTraining from "@/components/training/GroupTraining";
import OnlineTraining from "@/components/training/OnlineTraining";
import React from "react";

const page = () => {
	return (
		<main className="service">
			<ServiceHero />
			<InPersonTraining />
			<MobileTraining />
			<GroupTraining />
			<OnlineTraining />
		</main>
	);
};

export default page;
