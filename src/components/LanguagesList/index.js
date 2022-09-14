import { connect } from 'react-redux';
import LanguagesList from './LanguagesList';
import getLanguages from '../../store/actions/getLanguages/getLanguages';

const mapStateToProps = (state) => ({
	theme: state.theme,
	languages: state.languages,
});

const mapDispatchToProps = (dispatch) => ({
	getLanguages: () => dispatch(getLanguages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesList);
