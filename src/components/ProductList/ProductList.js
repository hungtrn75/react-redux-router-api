import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Mã SP</th>
                            <th className="text-center">Tên SP</th>
                            <th className="text-center">Giá</th>
                            <th className="text-center">Trạng thái</th>
                            <th className="text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;