"use client";
import { createContext, ReactNode, useEffect } from "react";

interface IProps {
	children: ReactNode;
}
interface Theme {
	name: string;
	color: string;
}

const ThemeWrapper = ({ children }: IProps) => {
	const ThemeWrapperProvider = createContext(null);
	return <ThemeWrapperProvider.Provider value={null}>{children}</ThemeWrapperProvider.Provider>;
};

export default ThemeWrapper;
