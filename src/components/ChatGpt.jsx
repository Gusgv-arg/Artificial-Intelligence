import React, { useEffect } from "react";
import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
	MainContainer,
	ChatContainer,
	MessageList,
	Message,
	MessageInput,
	TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY_CHATGPT;

const systemMessage = {
	role: "system",
	content:
		"Explain things like you're talking to a software professional with 2 years of experience.",
};

function ChatGpt() {
	const [messages, setMessages] = useState([
		{
			message: "Hello, I'm Chat-Gus! Ask me anything!",
			sentTime: "just now",
			sender: "ChatGPT",
		},
	]);
	const [isTyping, setIsTyping] = useState(false);

	const handleSend = async (message) => {
		const newMessage = {
			message,
			direction: "outgoing",
			sender: "user",
		};

		const newMessages = [...messages, newMessage];
		setMessages(newMessages);
		setIsTyping(true);
		await processMessageToChatGPT(newMessages);
	};

	async function processMessageToChatGPT(chatMessages) {
		// messages is an array of messages
		// Format messages for chatGPT API
		// API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
		// So we need to reformat

		let apiMessages = chatMessages.map((messageObject) => {
			let role = "";
			if (messageObject.sender === "ChatGPT") {
				role = "assistant";
			} else {
				role = "user";
			}
			return { role: role, content: messageObject.message };
		});

		// Get the request body set up with the model we plan to use
		// and the messages which we formatted above. We add a system message in the front to'
		// determine how we want chatGPT to act.
		const apiRequestBody = {
			model: "gpt-3.5-turbo",
			messages: [
				systemMessage, // The system message DEFINES the logic of our chatGPT
				...apiMessages, // The messages from our chat with ChatGPT
			],
		};

		await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + API_KEY,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(apiRequestBody),
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				setMessages([
					...chatMessages,
					{
						message: data.choices[0].message.content,
						sender: "ChatGPT",
					},
				]);
				setIsTyping(false);
			});
	}

console.log(messages)
	return (
		<div className="position-relative">
			<div className="position-absolute top-0 start-0 ms-3">
				{/* <Button>Home</Button> */}
				<Link to="/">
					<Button variant="dark" className="mt-3">
						Home
					</Button>
				</Link>
			</div>
			<div className="d-flex-col justify-content-center">
				<div>
					<h2 className="mt-4 fw-bold">ChatGPT API</h2>
				</div>
				<div className="chat mt-5 m-auto text-start">
					<MainContainer>
						<ChatContainer>
							<MessageList
								scrollBehavior="smooth"
								typingIndicator={
									isTyping ? (
										<TypingIndicator content="ChatGPT is typing" />
									) : null
								}
							>
								{messages.map((message, i) => {
									return <Message key={i} model={message} />;
								})}
							</MessageList>
							<MessageInput
								placeholder="Type message here"
								onSend={handleSend}
							/>
						</ChatContainer>
					</MainContainer>
				</div>
			</div>
		</div>
	);
}

export default ChatGpt;
