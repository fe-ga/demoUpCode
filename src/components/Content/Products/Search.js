import React from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../actions/index'
class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            keySearch: ""
        }
    }
    onClickSearchProduct=()=>{
        this.props.onCloseForm();
        this.props.onClickSearch(this.state)
    }
    onChangeKeySearch=(e)=>{
        this.state.keySearch = e.target.value;
    }
    render() {
        return (
                            //    Search
                                <div className="wrap">
                                    <div className="search">
                                        <input type="text" id="keySearch" className="searchTerm" placeholder="What are you looking for?" onChange={this.onChangeKeySearch}/>
                                        <button type="submit" className="searchButton" onClick={this.onClickSearchProduct}>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                  
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        Products: state.Products,
        keySearch : state.keySearch
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        onClickSearch: (keySearch) =>{
            dispatch(actions.searchProduct(keySearch));
        },
        onCloseForm: () =>{
            dispatch(actions.closeForm());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);