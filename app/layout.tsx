import SmoothScroll from "@/components/common/smoothScroll";
import GetStarted from "@/components/get-started/GetStarted";
import Nav from "@/components/nav/nav";
import LenisContext from "@/context/LenisContext";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import "@/scss/style.scss";
import { Metadata } from "next";
import { OrganizationSchema, WebsiteSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
	metadataBase: new URL('https://www.mind2muscle.site'),
	title: {
		default: 'Mind 2 Muscle - Personal Training & Fitness Coaching',
		template: '%s | Mind 2 Muscle'
	},
	description: 'Transform your fitness journey with Mind 2 Muscle. Professional personal training services including in-person, mobile, group, and online coaching tailored to your goals.',
	keywords: ['personal training', 'fitness coaching', 'mobile training', 'group training', 'online training', 'fitness', 'workout', 'strength training', 'mind 2 muscle'],
	authors: [{ name: 'Mind 2 Muscle' }],
	creator: 'Mind 2 Muscle',
	publisher: 'Mind 2 Muscle',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.mind2muscle.site',
		siteName: 'Mind 2 Muscle',
		title: 'Mind 2 Muscle - Personal Training & Fitness Coaching',
		description: 'Transform your fitness journey with Mind 2 Muscle. Professional personal training services including in-person, mobile, group, and online coaching tailored to your goals.',
		images: [
			{
				url: '/hero.webp',
				width: 1200,
				height: 630,
				alt: 'Mind 2 Muscle Personal Training',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Mind 2 Muscle - Personal Training & Fitness Coaching',
		description: 'Transform your fitness journey with Mind 2 Muscle. Professional personal training services tailored to your goals.',
		images: ['/hero.webp'],
	},
	verification: {
		google: 'google-site-verification-code',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<OrganizationSchema />
				<WebsiteSchema />
				{/* Preload local font */}
				<link
					rel="preload"
					href="/fonts/SCHABO.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				{/* Preload Google Fonts */}
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap"
					as="style"
				/>
				<link
					rel="preload"
					href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap"
					as="style"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap"
				/>
			</head>
			<body suppressHydrationWarning>
				<GoogleAnalytics />
				<MicrosoftClarity />
				<LenisContext>
					<SmoothScroll>
						<Nav />
						{children}
						<GetStarted />
					</SmoothScroll>
				</LenisContext>
				{/* <TransitionOverlay /> */}
			</body>
		</html>
	);
}
