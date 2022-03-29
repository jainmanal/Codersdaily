import { createStore, combineReducers } from "redux";
import { reducers } from "../Reducers/reducers";

const rooReducer = combineReducers({
    coders : reducers
})

const configuredStore = () => createStore(rooReducer);

export default configuredStore;