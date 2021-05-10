import React from 'react'
import { connect } from 'react-redux';
import Infor from './Infor';
import * as actions from './../../../actions/index'

class Product extends React.Component {
    onClickDeleteProduct=(e)=>{
         this.props.onDeleteProduct(e.target.value);
         this.props.onCloseForm();
    }
    onClickEditProduct=(e)=>{
        this.props.onOpenForm();
        let Product = {};
       
        this.props.Products.forEach(element => {
            if(element.ID == e.target.value){
                Product = element;
            }
        });
        this.props.onEditProduct(Product);
    }
    render() {
        var {Products, keySearch} = this.props;
        if(keySearch){
            Products = Products.filter((Product)=>{
                return Product.Name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1;
            })
            
        }
        return (
            <div className="content table-responsive table-full-width custom_btn">
               <Infor/>
               <table className="table table-hover table-striped ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            {/* <th>Country</th> */}
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products.map((value, index) => {
                                return (
                                    <tr key={value.ID} >
                                        <td >{index}</td>
                                        <td >{value.Name}</td>
                                        <td >{value.Price} VNĐ
                                        </td>
                                        {/* <td >Niger</td> */}
                                        <td >{value.Brand}</td>
                                        <td >
                                            <button className="bttn-float bttn-xs bttn-primary" value={value.ID} onClick={this.onClickEditProduct}>edit</button>
                                            <button className="bttn-float bttn-xs bttn-primary" value={value.ID} onClick={this.onClickDeleteProduct}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.Products,
        keySearch: state.searchProduct.keySearch
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return {
        onDeleteProduct: (id) => {
            dispatch(actions.deleteProduct(id))
        },
        onEditProduct: (Product) => {
            dispatch(actions.editProduct(Product))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
