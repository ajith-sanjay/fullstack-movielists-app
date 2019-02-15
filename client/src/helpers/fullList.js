export function fullList (fullArray){
	var itemConts =[];
	if(Array.isArray(fullArray.totalPages)){
		fullArray.totalPages.map( (value ,index) => {
				value.page["content-items"].content.map((movie , index) =>{
					itemConts.push(movie);
					return null;
				});
				return null;
			} );
	}
	return itemConts;
}