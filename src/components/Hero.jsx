import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { logo } from "../assets/index";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<Row className="hero align-items-center mt-0 p-5">
			<Col>
				<img src={logo} alt="sumz_logo" className="w-28 object-contain me-auto" />
			</Col>
			<Col>
				<Link to="/">
					<Button variant="dark" type="button" className="">
						Home
					</Button>
				</Link>
			</Col>
			<Col>
				<Button
					type="button"
					onClick={() =>
						window.open(
							"https://github.com/Gusgv-arg/Artificial-Intelligence",
							"_blank"
						)
					}
					variant="dark"
					className=""
				>
					GitHub
				</Button>
			</Col>

			<h1 className="mt-5 mb-2 fw-bold">Summarize Articles with</h1>
			<span className="openAi fw-bolder">OpenAI GPT-4</span>
			<h2 className="mt-2 fst-italic">
				Simplify your reading with Summize, an open-source article summarizer{" "}
				<br />
				that transforms lengthy articles into clear and concise summaries
			</h2>
		</Row>
	);
}

export default Hero;
