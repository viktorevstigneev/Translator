import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

import LanguagesList from '../LanguagesList';
import { useDebounce } from '../../hooks/useDebounce';
import { TranslatorContainer, TranslatorText, TranslatorBlock, StyledSwitchIcon } from './styles';

const TranslatorContent = ({ translator, postTranslateText }) => {
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState();

	const [inputLanguage, setInputLanguage] = useState('');
	const [outputLanguage, setOutputLanguage] = useState('en');

	const debounceTranslate = useDebounce(inputText, '1000');

	useEffect(() => {
		postTranslateText(inputText, inputLanguage, outputLanguage);
	}, [debounceTranslate]);

	useEffect(() => {
		const translationText = translator[0] && translator[0]?.translations[0]?.text;
		setOutputText(translationText);
	}, [translator]);

	const handleTextChange = (evt) => {
		setInputText(evt.target.value);
	};

	const handleSwapLanguages = () => {
		const translationText = translator[0] && translator[0]?.translations[0]?.text;
		const temporaryInputLanguage = Object.assign(inputLanguage);
		const temporaryOutputLanguage = Object.assign(outputLanguage);
		const tempOutputText = translationText;

		setOutputLanguage(temporaryInputLanguage);
		setInputLanguage(temporaryOutputLanguage);

		setInputText(tempOutputText);
	};
	return (
		<TranslatorContainer>
			<TranslatorBlock>
				<LanguagesList value={inputLanguage} setLanguage={setInputLanguage} />
				<TranslatorText onChange={handleTextChange}></TranslatorText>
			</TranslatorBlock>
			<StyledSwitchIcon onClick={handleSwapLanguages} />
			<TranslatorBlock>
				<LanguagesList value={outputLanguage} setLanguage={setOutputLanguage} />
				{true ? (
					<Skeleton variant="rounded" width="100%" height={120}/>
				) : (
					<TranslatorText value={outputText}></TranslatorText>
				)}
			</TranslatorBlock>
		</TranslatorContainer>
	);
};

export default TranslatorContent;
