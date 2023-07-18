import { DELETE_EXISTING_SUMMARY } from "../constants/constants"

export const deleteExistingSummary = (url)=>(dispatch, getState)=>{
    dispatch({type: DELETE_EXISTING_SUMMARY, payload: url})
    localStorage.setItem("articles", JSON.stringify(getState().articles));
}