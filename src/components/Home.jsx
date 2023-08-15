import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100">
			<div>
				<div className="">
					<h1 className="fw-bold ">Welcome to my AI Playground</h1>
				</div>
				<div className="d-flex mt-5 gap-3">
					<div>
						<Link to="/summary">
							<Button variant="info">Summarizer</Button>
						</Link>
					</div>
					<div>
						<Link to="/chat">
							<Button variant="success">My Chat GPT</Button>
						</Link>
					</div>
					<div>
						<Link to="/trainedchatbot/chatling">
							<Button variant="success">Trained Chatbot (Chatling)</Button>
						</Link>
					</div>
					<div>
						<Link to="/trainedchatbot/chatbase">
							<Button variant="dark">Trained Chatbot (Chatbase)</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
