import styled from 'styled-components';

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
	padding: 0;

	resize: none;
`;

export const StyledSwitchButton = styled.button`
	width: 35px;
	height: 35px;
	z-index: 1000;
	background: transparent;
	border: none;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
