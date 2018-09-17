import { connect } from 'react-redux'
import EditProduct from './EditProduct'
import { fetchProduct, editProduct } from '../../store/product'

const mapStateToProps = state => {
  return {
    selectedProduct: state.product.selectedProduct,
    categories: state.category.allCategories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const productId = ownProps.match.params.productId
  return {
    loadSingleProduct: () => {
      dispatch(fetchProduct(productId))
    },

    updateProduct: (id, data) => {
      dispatch(editProduct(productId, data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
