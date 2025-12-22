"use client";
import { useEffect, useState } from "react";

const LoaderContext = ({ children }: { children: React.ReactNode }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [shouldRender, setShouldRender] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			// Start fade out when page is fully loaded
			setIsLoading(false);

			// Remove from DOM after transition completes (500ms)
			setTimeout(() => {
				setShouldRender(false);
			}, 500);
		};

		// Check if page is already loaded
		if (document.readyState === 'complete') {
			handleLoad();
		} else {
			window.addEventListener('load', handleLoad);
		}

		return () => {
			window.removeEventListener('load', handleLoad);
		};
	}, []);

	return (
		<>
			{shouldRender && <div className={`bg-cover ${!isLoading ? 'fade-out' : ''}`}></div>}
			{children}
		</>
	);
};

export default LoaderContext;
