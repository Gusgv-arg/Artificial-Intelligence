import React from "react";
import { Route, Routes } from "react-router-dom";
import Summary from "./components/Summary";
import ChatGpt from "./components/ChatGpt";
import Home from "./components/Home";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/summary" element={<Summary />} />
				<Route path="/chat" element={<ChatGpt />} />
			</Routes>
		</>
	);
}

export default App;
