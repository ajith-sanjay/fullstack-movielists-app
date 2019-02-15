import * as $ from 'axios';

export const SCROLL_ACTION_COMMAND   = 'PAGE_SCROLLED';
var fetchPageDetailsInProgress = false;

export default function scrollAction(HoldedPagenumber){
	return function(dispatch){
        if(parseInt(HoldedPagenumber) < 3){
            if(fetchPageDetailsInProgress !== true){
                fetchPageDetailsInProgress = true;

                $.post(`api/pages`, { pageNum : parseInt(HoldedPagenumber) + 1  } )
                  .then((result) => {
                    dispatch({
                        type: SCROLL_ACTION_COMMAND,
                        payload: result.data[0]
                    });
                     fetchPageDetailsInProgress = false;
                  });
             
            }
        }
    }
}