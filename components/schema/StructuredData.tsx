import React from 'react';

export const OrganizationSchema = () => {
	const schema = {
		"@context": "https://schema.org",
		"@type": "HealthAndFitnessClub",
		"name": "Mind 2 Muscle",
		"description": "Professional personal training services including in-person, mobile, group, and online coaching tailored to your fitness goals.",
		"url": "https://www.mind2muscle.site",
		"logo": "https://www.mind2muscle.site/m2m-logo.svg",
		"image": "https://www.mind2muscle.site/hero.webp",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "327 North Main Street",
			"addressLocality": "Jennings",
			"addressRegion": "LA",
			"postalCode": "70546",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 30.2224,
			"longitude": -92.6571
		},
		"priceRange": "$$",
		"sameAs": [
			"https://www.instagram.com/mind2muscle",
			"https://www.facebook.com/mind2muscle"
		]
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
};

export const PersonSchema = () => {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Kashami",
		"jobTitle": "Personal Trainer & Fitness Coach",
		"description": "NSCA Certified personal trainer with 8+ years of experience specializing in knowledge-driven, holistic fitness training.",
		"image": "https://www.mind2muscle.site/kashami.webp",
		"url": "https://www.mind2muscle.site/about",
		"worksFor": {
			"@type": "HealthAndFitnessClub",
			"name": "Mind 2 Muscle"
		},
		"hasCredential": [
			{
				"@type": "EducationalOccupationalCredential",
				"credentialCategory": "certification",
				"name": "NSCA Certified Strength and Conditioning Specialist"
			}
		]
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
};

export const ServiceSchema = () => {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Personal Training",
		"provider": {
			"@type": "HealthAndFitnessClub",
			"name": "Mind 2 Muscle",
			"url": "https://www.mind2muscle.site"
		},
		"areaServed": {
			"@type": "City",
			"name": "Jennings",
			"@id": "https://en.wikipedia.org/wiki/Jennings,_Louisiana"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Personal Training Services",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "In-Person Training",
						"description": "One-on-one personal training sessions at our facility with personalized programs and expert guidance."
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Mobile Training",
						"description": "Personal training that comes to you - at your home, office, or preferred location."
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Group Training",
						"description": "Small group training sessions combining personalized attention with community motivation."
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Online Training",
						"description": "Virtual personal training with customized workout plans and ongoing support."
					}
				}
			]
		}
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
};

export const WebsiteSchema = () => {
	const schema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Mind 2 Muscle",
		"url": "https://www.mind2muscle.site",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://www.mind2muscle.site/search?q={search_term_string}",
			"query-input": "required name=search_term_string"
		}
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
};

export const BreadcrumbSchema = ({ items }: { items: Array<{ name: string; url: string }> }) => {
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": items.map((item, index) => ({
			"@type": "ListItem",
			"position": index + 1,
			"name": item.name,
			"item": item.url
		}))
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
};
