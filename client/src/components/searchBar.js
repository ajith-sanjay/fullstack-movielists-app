import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import searchAction from './../actions/search-action';
import './../styles/style.css';

class searchBar extends React.Component{ 
	constructor(props) {
		super(props);
		this.updateMovieList = this.updateMovieList.bind(this);
	}
	
	//change the movie list on changing the movie name in search box
	updateMovieList(e){
		e.preventDefault();
		this.props.updatePage(e.currentTarget.value);
	}
	
	render(){
	
		return(
			<div className = "menuBar">
				<div className = "menuBarPrev">
					<div className="previousMenu"></div>
					<div className = "menuBarPrevName">Romantic Comedy</div>
				</div>
				<div style={{textAlign : "right"}}>
					<input type="text" name="searchMovie" className="searchBox" onChange = {this.updateMovieList} placeholder= "search for a movie..."/>
					<input className="searchIcon" disabled/>
				</div>
			</div>
			)
	}
}

const mapStateToProps  =  (state) => ({
	totalPageList : state.totalPages
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	updatePage : searchAction
},dispatch)

export default connect( mapStateToProps , mapDispatchToProps)(searchBar);