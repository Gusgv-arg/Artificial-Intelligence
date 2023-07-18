import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import {copy,	linkIcon, tick,} from "../../../project_ai_summarizer/src/assets";
import { trash, copy, linkIcon, tick, grid } from "../assets/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchSummary } from "../redux/actions/fetchSummary";
import GrowSpinner from "../components/Spinner";
import Alert from "react-bootstrap/Alert";
import { fetchExistingSummary } from "../redux/actions/fetchExistingSummary";
import { deleteExistingSummary } from "../redux/actions/deleteExistingSummary";

export default function Summary() {
	const selectedImage = tick;
	const defaultImage = copy;

	const [newArticle, setNewArticle] = useState("");

	const [existingArticle, setExistingArticle] = useState("");

	console.log("existingArticle fuera del useEffect", existingArticle);
	const [show, setShow] = useState(true);

	const globalState = useSelector((state) => state.articles);
	const { loading, article, articles, error } = globalState;
	console.log("article de estado global", article);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setNewArticle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(fetchSummary(newArticle));
		setNewArticle({
			url: "",
			summary: "",
		});
	};

	const handleDelete=(url)=>{
		dispatch(deleteExistingSummary(url))
	}

	useEffect(() => {
		if (existingArticle) {
			console.log("existing en useEffect", existingArticle);
			dispatch(fetchExistingSummary(existingArticle));
		}
	}, [existingArticle]);

	return (
		<>
			<Form onSubmit={handleSubmit} className="mb-3">
				<div className="border border-2 rounded d-flex justify-content-center align-items-center w-25 m-auto">
					<img src={linkIcon} alt="link-icon" className="mx-1 " />

					<input
						type="url"
						placeholder="Paste here your article link..."
						value={newArticle.url}
						onChange={handleChange}
						required
						className="url_input px-1" // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
					/>

					<Button type="submit" variant="light" className="my-1 p-1 me-1">
						↵
					</Button>
				</div>
			</Form>
			{/* Url history */}
			<div className="d-flex justify-content-center ">
				<div className="d-flex flex-column mb-3">
					{Array.isArray(articles) &&
						articles.reverse().map((item, index) => (
							<div
								key={`link-${index}`}
								onClick={() => setExistingArticle({ url: item.url })}
								className={`d-flex align-items-start my-1 url_list ${
									existingArticle.url === item.url ? "selected" : "otra"
								}`}
							>
								<div className="me-1">
									<img
										src={
											existingArticle.url === item.url
												? selectedImage
												: defaultImage
										}
									/>
								</div>
								<div>
									<p className="me-2">{item.url}</p>
								</div>
								<div className="ms-auto">
									<img onClick={()=>handleDelete(item.url)} src={trash} />
								</div>
							</div>
						))}
				</div>
			</div>

			{loading ? (
				<GrowSpinner />
			) : error ? (
				<div className="d-flex justify-content-center">
					<Alert
						variant="danger"
						onClose={() => setShow(false)}
						dismissible
						className="w-25 my-3"
					>
						<Alert.Heading>There is an error!</Alert.Heading>
						<p>{error}</p>
					</Alert>
				</div>
			) : (
				globalState.article &&
				globalState.article.summary !== "" && (
					<div className="d-flex flex-column justify-content-center">
						<h4 className="my-3 fw-bold">Summary</h4>
						<div className="w-50 m-auto mb-3">
							<p className="border border-2 summary">
								{globalState.article.summary}
							</p>
						</div>
					</div>
				)
			)}
		</>
	);
}
