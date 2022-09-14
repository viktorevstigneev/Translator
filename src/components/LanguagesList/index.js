import { connect } from 'react-redux';
import LanguagesList from './LanguagesList';
import postTranslateText from '../../store/actions/postTranslateText/postTranslateText';

const mapStateToProps = (state) => ({
	theme: state.theme,
	languages: state.languages,
});

const mapDispatchToProps = (dispatch) => ({
	postTranslateText: (text, inputLanguage, outputLanguage) => {
		dispatch(postTranslateText(text, inputLanguage, outputLanguage));
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(LanguagesList);
