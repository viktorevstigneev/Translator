import styled from 'styled-components';

export const TranslatorSelect = styled.select`
	display: block;
	width: 100%;
	border: 1px solid black;
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.text};
	padding: 10px;
	margin-bottom: 20px;

	background: transparent;
	color: ${({ theme }) => theme.text};
`;
