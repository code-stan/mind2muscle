"use client";

import { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollyImageProps {
	children: ReactNode;
	className?: string;
}

const ScrollyImage = ({ children, className = "" }: ScrollyImageProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const image = containerRef.current.querySelector("img");
			if (!image) return;

			const mm = gsap.matchMedia();

			// Only apply effect on screens wider than 800px (tablet and up)
			mm.add("(min-width: 801px)", () => {
				// Set initial state to prevent layout shift
				gsap.set(image, { yPercent: 0, scaleY: 1 });

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: containerRef.current,
						scrub: true,
						pin: false,
					},
				});

				tl.from(image, {
					scaleY: 1.1,
					transformOrigin: "50% 50%",
					yPercent: -40,
					ease: "none",
				}).to(image, {
					transformOrigin: "50% 50%",
					scaleY: 1.08,
					yPercent: 30,
					ease: "none",
				});
			});

			return () => mm.revert();
		},
		{ scope: containerRef }
	);

	return (
		<div ref={containerRef} className={className}>
			<div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
				{children}
			</div>
		</div>
	);
};

export default ScrollyImage;
