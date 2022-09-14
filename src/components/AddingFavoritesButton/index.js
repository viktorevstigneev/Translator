import { connect } from 'react-redux';
import AddingFavoritesButton from './AddingFavoritesButton';
import addToFavorites from '../../store/actions/addToFavorites/addToFavorites';

const mapStateToProps = (state) => ({
	favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
	addToFavorites: (data) => dispatch(addToFavorites(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddingFavoritesButton);
