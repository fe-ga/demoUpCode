import React from 'react'
import  Products from './Products';
import  Search from './Search';
import  AddProduct from './AddProduct';

class Container extends React.Component {
    render() {

        return (

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h4 className="title">Striped Table with Hover</h4>
                                    <p className="category">Here is a subtitle for this table</p>
                                </div>
                                <AddProduct/>
                                {/* search */}
                                <Search/>
                                {/* list product */}
                                {/* code if esle để show content và search */}
                                <Products />

                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Container;