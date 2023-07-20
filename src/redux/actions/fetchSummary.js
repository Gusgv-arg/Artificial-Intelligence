import Axios from "axios";
import {
	FETCH_SUMMARY_FAIL,
	FETCH_SUMMARY_REQUEST,
	FETCH_SUMMARY_SUCCESS,
} from "../constants/constants";

let contador = 0;

const key_luli = import.meta.env.VITE_API_KEY_SUMMARIZER_LULI;

export const fetchSummary = (params) => async (dispatch, getState) => {
	dispatch({
		type: FETCH_SUMMARY_REQUEST,
	});

	try {
		const { data } = await Axios.get(
			"https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
			{
				params: {
					url: `${params}`,
					length: "3",
					//lang: "es"
				},
				headers: {
					"X-RapidAPI-Key": key_luli,
					"X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
				},
			}
		);
		const object = { url: params, summary: data.summary };
		dispatch({ type: FETCH_SUMMARY_SUCCESS, payload: object });
		localStorage.setItem("articles", JSON.stringify(getState().articles));

		/* contador = contador + 1;
		setTimeout(() => {
			const data = { summary: `${contador} esto es lo que vendría de la API` };
			const object = { url: params, summary: data.summary };
			console.log("object en action", object)
			dispatch({ type: FETCH_SUMMARY_SUCCESS, payload: object });
			localStorage.setItem("articles", JSON.stringify(getState().articles));
		}, 3000); */
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: FETCH_SUMMARY_FAIL, payload: message });
	}
};
