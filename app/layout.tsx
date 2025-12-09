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
