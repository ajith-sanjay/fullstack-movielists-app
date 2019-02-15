import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LazyLoad from 'react-lazy-load';
import './../styles/style.css';
import {fullList} from './../helpers/fullList.js';
import scrollAction from './../actions/scroll-action';

class contentItems extends React.Component{ 

	constructor(props) {
		super(props);
		this.state = {
			contentLists : fullList(this.props.totalPageList)
		}
	}
	
	componentWillMount() {
	  window.onscroll = (ev) => {
	    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.props.totalPageList.totalPages.length < 3) {
	    	if(this.props.totalPageList.totalPages.length === 0){
	    		this.props.scrollPage(0);
	    	}
	    	else{
	    		this.props.scrollPage( this.props.totalPageList.totalPages[ this.props.totalPageList.totalPages.length - 1 ].page["page-num-requested"] );
	    	}
	    }
	  }
	}

	componentDidMount() {
		if(this.props.totalPageList.totalPages.length === 0){
	    	this.props.scrollPage(0);
	    }
	}

	componentWillReceiveProps(nextProps){
		let newStateToUpdate;
		if (this.props.searchText !== nextProps.searchText) {
		 	if(nextProps.searchText === ""){
				newStateToUpdate =  fullList(nextProps.totalPageList);
			}
			else{
				// Filter our movie lists that contain the user's input
				newStateToUpdate = fullList(nextProps.totalPageList).filter(
					movielist => {
						if(movielist.name.toLowerCase().indexOf(nextProps.searchText.toLowerCase()) > -1){
							return movielist;
						}
						return null;
					}
				);
			}
		}
		else{
			newStateToUpdate = fullList(nextProps.totalPageList);
		}
		this.setState({
			contentLists : newStateToUpdate
		});
	}

	render(){
		return(
			<div className = "imgContentWrapper">
				{this.state.contentLists.map((value , index) => {
					try {
						return (
							<div className = "imgContainer" key={index}>
								<LazyLoad offsetTop={2000}>
									<img style={{width: '100%'}} src = {require(`./../images/${value["poster-image"]}`)} alt="NOT Avail" />
								</LazyLoad>
								<div className = "imgName">{value.name}</div>
							</div>
						)
					}
					catch(e){
						return (
							<div className = "imgContainer" key={index}>
								<LazyLoad offsetTop={2000}>
									<img style={{width: '100%'}} src = {require(`./../images/placeholder_for_missing_posters.png`)} alt="NOT Avail" />
								</LazyLoad>
								<div className = "imgName">{value.name}</div>
							</div>
						)
					}
				})
				}
			</div>
		)
	}
}

const mapStateToProps  =  (state) => ({
	totalPageList : state.totalPages,
	searchText : state.currentSearchInp
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	scrollPage : scrollAction
},dispatch);

export default connect( mapStateToProps,mapDispatchToProps)(contentItems);