import React, { useState } from 'react';
import { initialInputLanguage } from '../../constants';

import FavoritesIcon from '../FavoritesIcon';
import { StyledButton } from './styles';

const AddingFavoritesButton = ({ translator, inputLanguage, inputText, favorites, addToFavorites }) => {
	const [isFavorite, setIsFavorite] = useState(true);

	const handleAddToFavorites = () => {
		setIsFavorite(false);
		const translationData = translator.data[0] && translator.data[0]?.translations[0];
		const detectedLanguage = translator.data[0].detectedLanguage;

		const favoritesData = {
			text: inputText,
			inputLanguage: inputLanguage.label !== initialInputLanguage.label ? inputLanguage.label : detectedLanguage.language,
			outputText: translationData.text,
			outputLanguage: translationData.to,
		};
		console.log('favoritesData: ', favoritesData);
		addToFavorites(favoritesData);

	};

	return (
		<StyledButton onClick={handleAddToFavorites}>
			<FavoritesIcon fill={isFavorite ? 'red' : 'green'} />
		</StyledButton>
	);
};

export default AddingFavoritesButton;
