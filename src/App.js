import React, { useContext } from "react";
// import Layout, { Default } from "./Apps/Layouts/Layout";
import Login from './Apps/Pages/Login/Login'
import Layout from './Layout'
import "rsuite/dist/rsuite.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "./Apps/Apptheme/ThemeProvider";

function App() {
	const { theme } = useContext(ThemeContext);

	console.log(theme);
	return (
		<div
			style={{
				background: `${theme.isDarkMode ? "#141414" : "#fff"}`,
				color: `${theme.isDarkMode ? "#fff" : "#000"}`,
				minHeight: "100vh",
			}}
		>
			<Layout />
		</div>
	);
}

export default App;
