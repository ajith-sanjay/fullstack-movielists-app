import {SEARCH_ACTION_COMMAND} from './../actions/search-action';

export const searchReducer = (state = '', action) => {
	switch(action.type){
		case SEARCH_ACTION_COMMAND: 
			return action.payload;
		default:
			return state;
	}
}
