import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductReq, actGetProductReq, actUpdateProductReq } from './../../actions/index';
import { connect } from 'react-redux';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            ckStatus: ''
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            this.props.onEditProduct(match.params.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            let { id, name, price, status } = nextProps.itemEditting;
            this.setState({
                id: id,
                txtName: name,
                txtPrice: price,
                ckStatus: status
            })
        }
    }

    onChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = e => {
        e.preventDefault();
        let { id, txtName, txtPrice, ckStatus } = this.state;
        let { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: ckStatus
        }
        if (id) {
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            this.props.onAddProduct(product);
            history.push('/product-list')
        }
    }
    render() {
        let { txtName, txtPrice, ckStatus } = this.state;
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Tên sản phẩm:</label>
                            <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Giá sản phẩm:</label>
                            <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái sản phẩm:</label>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value={ckStatus} name="ckStatus" onChange={this.onChange} checked={ckStatus} />
                                    Còn hàng
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mr-10"><i className="glyphicon glyphicon-floppy-saved mr-10"/>Lưu</button>
                        <Link to="/product-list" className="btn btn-danger"><i className="glyphicon glyphicon-circle-arrow-left mr-10"/>Trở lại</Link>
                    </form>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditting: state.itemEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductReq(product));
        },
        onEditProduct: id => {
            dispatch(actGetProductReq(id));
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductReq(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);