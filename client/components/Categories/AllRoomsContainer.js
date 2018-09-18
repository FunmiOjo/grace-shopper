import { connect } from 'react-redux'
import AllCategories from './AllRooms'
import { fetchAllCategories } from '../../store/category'

const mapStateToProps = state => {
  return {
    categories: state.category.allCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAllCategories: () => dispatch(fetchAllCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories)
