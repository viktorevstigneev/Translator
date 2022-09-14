import React, { useEffect } from 'react';

import { TranslatorSelect } from './styles';

const LanguagesList = ({ getLanguages, value, setLanguage, items }) => {
	useEffect(() => {
		getLanguages();
	}, []);

	const handleChangeLanguage = (evt) => {
		setLanguage(evt.target.value);
	};

	return (
		<TranslatorSelect value={value} onChange={handleChangeLanguage}>
			{items &&
				items.map((item) => {
					return (
						<option key={item.value} value={item.value}>
							{item.label}
						</option>
					);
				})}
		</TranslatorSelect>
	);
};

export default LanguagesList;
