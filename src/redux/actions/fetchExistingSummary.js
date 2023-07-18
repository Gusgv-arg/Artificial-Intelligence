import { FETCH_EXISTING_SUMMARY } from "../constants/constants";


export const fetchExistingSummary = (existingArticle) => (dispatch, getState) => {
	dispatch({
		type: FETCH_EXISTING_SUMMARY, payload: existingArticle.url
	});
    localStorage.setItem("articles", JSON.stringify(getState().articles));
};
