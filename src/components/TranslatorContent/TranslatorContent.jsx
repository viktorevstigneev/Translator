import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

import LanguagesList from '../LanguagesList';
import { useDebounce } from '../../hooks/useDebounce';
import SwitchIcon from '../SwitchIcon/SwitchIcon';
import { TranslatorContainer, TranslatorText, TranslatorBlock, StyledSwitchButton } from './styles';
import { initialInputLanguage, INITIAL_OUTPUT_LANGUAGE, TRANSLATION_DELAY_NUMBER, EMPTY_STRING, COLORS } from '../../constants';

const TranslatorContent = ({ translator, postTranslateText, languages, theme }) => {
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState();

	const [inputLanguage, setInputLanguage] = useState(initialInputLanguage);
	const [outputLanguage, setOutputLanguage] = useState(INITIAL_OUTPUT_LANGUAGE);

	const debounceTranslate = useDebounce(inputText, TRANSLATION_DELAY_NUMBER);

	useEffect(() => {
		if (inputLanguage.label === initialInputLanguage.label) {
			postTranslateText(inputText, EMPTY_STRING, outputLanguage);
		}
		postTranslateText(inputText, inputLanguage, outputLanguage);
	}, [debounceTranslate, inputLanguage, outputLanguage]);

	useEffect(() => {
		const translationText = translator.data[0] && translator.data[0]?.translations[0]?.text;
		setOutputText(translationText);
	}, [translator]);

	const handleTextChange = (evt) => {
		setInputText(evt.target.value);
	};

	const handleSwapLanguages = () => {
		const temporaryInputLanguage = inputLanguage;
		const temporaryOutputLanguage = outputLanguage;
		const tempOutputText = outputText;

		setOutputLanguage(temporaryInputLanguage);
		setInputLanguage(temporaryOutputLanguage);

		setInputText(tempOutputText);
	};

	const isSwitchButtonDisabled =
		inputText === EMPTY_STRING ||
		inputLanguage.label === initialInputLanguage.label ||
		inputLanguage === initialInputLanguage.label;

	return (
		<TranslatorContainer>
			<TranslatorBlock>
				<LanguagesList
					value={inputLanguage}
					setLanguage={setInputLanguage}
					items={[initialInputLanguage, ...languages]}
				/>
				<TranslatorText onChange={handleTextChange} value={inputText} placeholder="Enter Text"></TranslatorText>
			</TranslatorBlock>
			<StyledSwitchButton onClick={handleSwapLanguages} disabled={isSwitchButtonDisabled}>
				<SwitchIcon fill={!theme.darkMode ? COLORS.DARK_THEME_BACKGROUND_COLOR : COLORS.LIGHT_THEME_BACKGROUND_COLOR} />
			</StyledSwitchButton>
			<TranslatorBlock>
				<LanguagesList value={outputLanguage} setLanguage={setOutputLanguage} items={languages} />
				{translator.loading ? (
					<Skeleton width="100%" height={100} variant="rounded" />
				) : (
					<TranslatorText defaultValue={outputText} placeholder="Translation" disabled></TranslatorText>
				)}
			</TranslatorBlock>
		</TranslatorContainer>
	);
};

export default TranslatorContent;
