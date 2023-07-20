/* eslint-disable no-case-declarations */
import {
	DELETE_EXISTING_SUMMARY,
	FETCH_EXISTING_SUMMARY,
	FETCH_SUMMARY_FAIL,
	FETCH_SUMMARY_REQUEST,
	FETCH_SUMMARY_SUCCESS,
} from "../constants/constants";

/*  const initialState = {
	loading: true,
	articles: [],
	article: {},
};  */

export const articlesReducer = (
	state = { articles: [], loading: false },
	action
) => {
	switch (action.type) {
		case FETCH_SUMMARY_REQUEST:
			return { ...state, loading: true };
		case FETCH_SUMMARY_SUCCESS:
			return {
				...state,
				loading: false,
				articles: [...state.articles, action.payload],
				article: action.payload,
			};
		case FETCH_SUMMARY_FAIL:
			return { ...state, loading: false, error: action.payload };
		case FETCH_EXISTING_SUMMARY:
			const aux= state.articles
			const existingArticle = aux.filter((item)=>item.url===action.payload);
			return {
				...state,
				article: existingArticle[0]
			}
		case DELETE_EXISTING_SUMMARY:
			return {
				...state,
				articles: state.articles.filter((article)=>article.url!==action.payload)
			}
		default:
			return state;
	}
};
