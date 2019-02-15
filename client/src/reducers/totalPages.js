import {SCROLL_ACTION_COMMAND} from './../actions/scroll-action.js';

const initialState = {
	totalPages : [ ]
};

export const totalPages = (state = initialState, action) => {
  	const newState = Object.assign({} , state);
	switch(action.type){
		case SCROLL_ACTION_COMMAND: 
			return {
				totalPages : [...state.totalPages, action.payload]
			};
		default:
			return newState;
	}
}
