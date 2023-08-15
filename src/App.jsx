import React from "react";
import { Route, Routes } from "react-router-dom";
import Summary from "./components/Summary";
import ChatGpt from "./components/ChatGpt";
import Home from "./components/Home";
import TrainedChatbotChatling from "./components/TrainedChatbotChatling";
import TrainedChatbotChatbase from "./components/TrainedChatbotChatbase";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/summary" element={<Summary />} exact />
				<Route path="/chat" element={<ChatGpt />} exact />
				<Route path="/trainedchatbot/chatling" element={<TrainedChatbotChatling />} exact />
				<Route path="/trainedchatbot/chatbase" element={<TrainedChatbotChatbase />} exact />
			</Routes>
		</>
	);
}

export default App;
