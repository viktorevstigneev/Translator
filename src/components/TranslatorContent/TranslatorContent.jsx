import React, { useEffect, useState } from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { TranslatorContainer, TranslatorSelect, TranslatorText, TranslatorBlock, StyledSwitchIcon } from './styles';

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
				<TranslatorSelect>
					<option value="">Select Language</option>
				</TranslatorSelect>
				<TranslatorText onChange={handleTextChange}></TranslatorText>
			</TranslatorBlock>
			<StyledSwitchIcon />
			<TranslatorBlock>
				<TranslatorSelect>
					<option value="">en</option>
				</TranslatorSelect>
				<TranslatorText value={outputText}></TranslatorText>
			</TranslatorBlock>
		</TranslatorContainer>
	);
};

export default TranslatorContent;
