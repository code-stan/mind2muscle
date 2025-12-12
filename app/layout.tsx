import SmoothScroll from "@/components/common/smoothScroll";
import GetStarted from "@/components/get-started/GetStarted";
import Nav from "@/components/nav/nav";
import LenisContext from "@/context/LenisContext";
import "@/scss/style.scss";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
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
