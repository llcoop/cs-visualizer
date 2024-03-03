/* eslint disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./context/globalContext";
import { Home, Placeholder } from "./pages";
import { Navbar } from "./components/layout";
import "./index.scss";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalContext>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="placeholder" element={<Placeholder />} />
				</Routes>
			</GlobalContext>
		</BrowserRouter>
	);
};

export default App;
