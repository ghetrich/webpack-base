import React, { useReducer, createContext } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
	switch (action.type) {
		case "LIGHT":
			return { isDarkMode: false };
		case "DARK":
			return { isDarkMode: true };
		default:
			return state;
	}
};

const initialState = { isDarkMode: false };
export const ThemeProvider = props => {
	const [theme, dispatchTheme] = useReducer(themeReducer, initialState);

	return (
		<ThemeContext.Provider value={{ theme, dispatchTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
