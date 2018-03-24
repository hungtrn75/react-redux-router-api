import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn có chắc chắn muốn xóa ?')){//eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        let { product,index } = this.props;
        let statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        let statusClass = product.status ? 'warning' : 'danger';
        return (
            <tr className="text-center">
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`product/edit/${product.id}`} className="btn btn-success mr-10"><i className="glyphicon glyphicon-edit mr-10"/>Sửa</Link>
                    <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(product.id)}><i className="glyphicon glyphicon-remove-sign mr-10"/>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;