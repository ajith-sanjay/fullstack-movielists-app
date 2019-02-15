export const SEARCH_ACTION_COMMAND   = 'SEARCHED';

export default function searchAction(userInp){
	return {
        type : SEARCH_ACTION_COMMAND,
        payload : userInp
    }
}