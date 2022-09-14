import React, { useEffect, useState } from 'react';

import { TranslatorSelect } from './styles';

const LanguagesList = ({ languages, getLanguages }) => {
	console.log('languages: ', languages);

	useEffect(() => {
		getLanguages();
	});

	return (
		<TranslatorSelect>
			{languages.translation &&
				Object.keys(languages.translation).map((key) => (
					<option key={key} value="key">{languages?.translation[key].name}</option>
				))}
		</TranslatorSelect>
	);
};

export default LanguagesList;
