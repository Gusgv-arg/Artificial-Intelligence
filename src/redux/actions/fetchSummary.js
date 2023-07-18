import Axios from "axios";
import {
	FETCH_SUMMARY_FAIL,
	FETCH_SUMMARY_REQUEST,
	FETCH_SUMMARY_SUCCESS,
} from "../constants/constants";

let contador = 0;

export const fetchSummary = (params) => async (dispatch, getState) => {
	dispatch({
		type: FETCH_SUMMARY_REQUEST,
	});

	try {
		/* const { data } = await Axios.get(
			"https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
			{
				params: {
					url: `${params}`,
					length: "3",
				},
				headers: {
					"X-RapidAPI-Key":
						"5663dd5aeamshc61e5f0d204c1bap1bfbe9jsnac4016ca8488",
					"X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
				},
			}
		); */
		contador = contador + 1;

		setTimeout(() => {
			const data = { summary: `${contador} esto es lo que vendría de la API` };
			const object = { url: params, summary: data.summary };
			console.log("object en action", object)
			dispatch({ type: FETCH_SUMMARY_SUCCESS, payload: object });
			localStorage.setItem("articles", JSON.stringify(getState().articles));
		}, 3000);
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: FETCH_SUMMARY_FAIL, payload: message });
	}
};
