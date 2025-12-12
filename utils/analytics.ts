// Google Analytics Event Tracking

declare global {
	interface Window {
		gtag: (command: string, eventName: string, params?: object) => void;
	}
}

export const trackEvent = (
	eventName: string,
	params?: {
		[key: string]: string | number | boolean;
	}
) => {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", eventName, params);
	}
};

// Track pricing view
export const trackPricingView = (trainingType: string) => {
	trackEvent("view_pricing", {
		training_type: trainingType,
		event_category: "engagement",
		event_label: `${trainingType} Pricing`,
	});
};

// Track consultation click
export const trackConsultationClick = (source: string) => {
	trackEvent("schedule_consultation_click", {
		source: source,
		event_category: "conversion",
		event_label: "Schedule Consultation",
	});
};

// Track CTA button click
export const trackCTAClick = (buttonText: string, trainingType?: string) => {
	trackEvent("cta_click", {
		button_text: buttonText,
		training_type: trainingType || "general",
		event_category: "engagement",
		event_label: buttonText,
	});
};
