import React, { useEffect } from 'react';

import { TranslatorSelect } from './styles';

const LanguagesList = ({ languages, getLanguages, value, setLanguage }) => {
	console.log('value: ', value);
	console.log('languages: ', languages);

	useEffect(() => {
		getLanguages();
	}, [languages]);

	const handleChangeLanguage = (evt) => {
		setLanguage(evt.target.value);
	};

	return (
		<TranslatorSelect value={value} onChange={handleChangeLanguage}>
			{!value && <option value={value}>Select Language</option>}
			{languages.translation &&
				Object.keys(languages.translation).map((key) => (
					<option key={key} value={key}>
						{languages?.translation[key].name}
					</option>
				))}
		</TranslatorSelect>
	);
};

export default LanguagesList;
