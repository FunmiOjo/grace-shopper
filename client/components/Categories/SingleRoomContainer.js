import { connect } from 'react-redux'
import AllCategories from './AllRooms'
import { fetchSingleCategory } from '../../store/category'
import SingleRoom from './SingleRoom'

const mapStateToProps = state => {
  return {
    category: state.category.currentCategory,
    isLoading: state.category.isLoading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadSingleCategory: () => {
      const categoryId = ownProps.match.params.categoryId
      dispatch(fetchSingleCategory(categoryId))
      console.log('dispatched')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom)
