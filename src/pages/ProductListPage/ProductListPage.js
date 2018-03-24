import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsReq, actDeleteProductReq } from './../../actions/index';

class ProductListPage extends Component {

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  onDelete = id => {
    this.props.onDeleteProduct(id);
  }


  render() {
    let { products } = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to='/product/add' className="btn btn-default mb-5"><i className="glyphicon glyphicon-plus mr-10"/>Thêm sản phẩm</Link>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Danh sách sản phẩm</h3>
          </div>
          <ProductList>
            {this.showProducts(products)}
          </ProductList>
        </div>
      </div>
    );
  }

  showProducts = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      })
    }
    return result;
  }
}

const mapStateToProps = state => {
  return ({
    products: state.products
  })
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsReq());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductReq(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);