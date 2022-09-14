import React, { useEffect, useState } from 'react';

import LanguagesList from '../LanguagesList';
import { useDebounce } from '../../hooks/useDebounce';
import { TranslatorContainer, TranslatorText, TranslatorBlock, StyledSwitchIcon } from './styles';

const TranslatorContent = ({ translator, postTranslateText }) => {
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState();

	const handleTextChange = (evt) => {
		setInputText(evt.target.value);
	};

	const debounceTranslate = useDebounce(inputText, '1000');

	useEffect(() => {
		postTranslateText(inputText, 'ru', 'en');
	}, [debounceTranslate]);

	useEffect(() => {
		const translationText = translator[0] && translator[0]?.translations[0]?.text;
		setOutputText(translationText);
	}, [translator]);

	return (
		<TranslatorContainer>
			<TranslatorBlock>
				<LanguagesList />
				<TranslatorText onChange={handleTextChange}></TranslatorText>
			</TranslatorBlock>
			<StyledSwitchIcon />
			<TranslatorBlock>
				<LanguagesList />
				<TranslatorText value={outputText}></TranslatorText>
			</TranslatorBlock>
		</TranslatorContainer>
	);
};

export default TranslatorContent;
