import styled from 'styled-components';
import SwitchIcon from '../SwitchIcon/SwitchIcon';

export const TranslatorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
	margin: 5% auto;
`;
export const TranslatorBlock = styled.div`
	width: 40%;
`;
export const TranslatorSelect = styled.select`
	display: block;
	width: 100%;
	border: 1px solid black;
	border-radius: 5px;
`;

export const TranslatorText = styled.textarea`
	width: 100%;
	height: 100px;
	border: 1px solid black;
	border-radius: 5px;
	margin-top: 20px;
	padding: 0;

	resize: none;
`;

export const StyledSwitchIcon = styled(SwitchIcon)`
	cursor: pointer;
	fill: red;
`;
