import React from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../actions/index'
class Infor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: null,
            Name: " ",
            Price: 0,
            Brand: " "
        };
        this.onChangeInfor = this.onChangeInfor.bind(this);
    }
    onsetState = (value) => {
        this.setState({
            ID: value.ID,
            Name: value.Name,
            Price: value.Price,
            Brand: value.Brand
        });
    }

    async onChangeInfor(e) {
        var target = e.target;
        var flag = target.name;
        if (flag == 'Name') {
            var Name = target.value;
            
            await this.setState({
                Name,

            });
        }
        else if (flag == 'Price') {
            var Price = target.value;
            await this.setState({
                Price,

            });
        }
        else if (flag == 'Brand') {
            var Brand = target.value;
            await this.setState({
                Brand,

            });
        }
    }
    onSubmitInfo = (e) => {
        e.preventDefault();
        var ID = this.props.editItem.ID;
        
        if (ID != null && ID != undefined && ID !='') {
            this.props.onEditProduct(this.state)
        }
        else
            this.props.onAddProduct(this.state);
        this.setState({
            ID: '',
            Name: '',
            Price: '',
            Brand: ''
        });
        this.props.onCloseForm();

    }
    onClickCloseForm = (e) => {
        e.preventDefault();
        this.props.onCloseForm();
    }
    async componentDidUpdate(prevProps) {
        var value = this.props.editItem;
        if (value !== prevProps.editItem) {
            await this.setState({
                ID: value.ID,
                Name: value.Name,
                Price: value.Price,
                Brand: value.Brand
            })
        }
    }
    render() {
        var isDisplayForm = this.props.isDisplay;
        var isDisplay = '';
        if (isDisplayForm) { isDisplay = 'block' }
        else { isDisplay = 'none' };
        return (
            <div className="infor" id="infor" style={{ display: isDisplay }}>
                <div className='col-md-6 custom_image'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/image/anh2.jpg'} alt="ảnh điện thoại" />
                    </div>
                    <div>
                        <button className="bttn-slant bttn-md bttn-primary">Chọn ảnh</button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <form >
                        <h3 >
                            {
                                this.props.editItem.ID != null ? 'edit product' : 'add new product'
                            }
                        </h3>
                        <div className="form-group">
                            <label>Name :</label>
                            <input type="text" className="form-control" name='Name' value={this.state.Name} onChange={this.onChangeInfor} />
                        </div>
                        <div className="form-group">
                            <label>Price :</label>
                            <input type="number" className="form-control" min="0" name='Price' value={this.state.Price} onChange={this.onChangeInfor} />
                        </div>
                        <div className="form-group">
                            <label>Brand :</label>
                            <input type="text" className="form-control" name='Brand' value={this.state.Brand} onChange={this.onChangeInfor} />
                        </div>
                        {/* <label>Trạng Thái :</label>
                            <select className="form-control" required="required">
                                <option value="1">Kích Hoạt</option>
                                <option value="0">Ẩn</option>
                            </select>
                            <br /> */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning" onClick={this.onSubmitInfo}>Xác Nhận</button>&nbsp;
                                <button type="submit" className="btn btn-danger" onClick={this.onClickCloseForm}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.Products,
        isDisplay: state.isDisplay,
        editItem: state.editItem
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (Product) => {
            dispatch(actions.AddProduct(Product))
        },
        onEditProduct: (Product) => {
            dispatch(actions.editProduct(Product))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Infor);
