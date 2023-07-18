import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { articlesReducer } from "../reducer/articlesReducer";

const initialState = {
	articles: localStorage.getItem("articles")
		? JSON.parse(localStorage.getItem("articles"))
		: { articles: [] },
};

const reducer = combineReducers({
	articles: articlesReducer,
});

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhanser(applyMiddleware(thunk))
);

export default store;
