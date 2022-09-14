import { connect } from 'react-redux';
import TranslatorContent from './TranslatorContent';
import postTranslateText from '../../store/actions/postTranslateText/postTranslateText';

const mapStateToProps = (state) => ({
	theme: state.theme,
	translator: state.translator,
	languages: state.languages,
});

const mapDispatchToProps = (dispatch) => ({
	postTranslateText: (text, inputLanguage, outputLanguage) => {
		dispatch(postTranslateText(text, inputLanguage, outputLanguage));
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(TranslatorContent);
