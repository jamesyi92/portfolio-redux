import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
	display: inline-block;
	font-size: 1.6rem;
	border: 1px solid ${props => props.dark ? props.theme['color-reverse'] : props.theme.color};
	background: transparent;
	padding: .8rem 2.4rem;
	text-transform: capitalize;
	color: ${props => props.dark ? props.theme['color-reverse'] : props.theme.color};
	text-decoration: none;
	border-radius: 4px;
	transition: ease-in-out all .2s;

	&:hover {
		border: 1px solid ${props => props.dark ? props.theme.primary : props.theme.color};
		background: ${props => props.dark ? props.theme.primary : props.theme.color};
		color: ${props => props.dark ? props.theme.color : props.theme['color-reverse']};
	}
`

export default Button;