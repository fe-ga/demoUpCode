import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../../../actions/index'
class AddProduct extends React.Component {
    onClickOpenForm=(e)=>{
        e.preventDefault();
        this.props.onOpenForm();
        
    }
    render() {
        return ( 
            <button className="bttn-float bttn-xs bttn-primary customAddProduct" onClick={this.onClickOpenForm}>Add</button>
        )                                   
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplay:state.isDisplay, 
        editItem :state.editItem
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
       onOpenForm:()=>{
           dispatch(actions.openForm())
       }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
