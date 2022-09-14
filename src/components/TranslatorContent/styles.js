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

export const TranslatorText = styled.textarea`
	display: block;
	width: 95%;
	height: 100px;
	border: 1px solid ${({ theme }) => theme.text};
	border-radius: 5px;
	padding: 10px;

	background: transparent;
	color: ${({ theme }) => theme.text};

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
