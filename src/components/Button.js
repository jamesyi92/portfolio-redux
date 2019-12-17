import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
	display: inline-block;
	font-size: 1.6rem;
	border: 1px solid ${props => props.theme.color};
	background: transparent;
	padding: .8rem 2.4rem;
	text-transform: capitalize;
	color: ${props => props.theme.color};
	text-decoration: none;
	border-radius: 2px;
	transition: ease-in-out all .2s;

	&:hover {
		background: ${props => props.theme.color};
		color: ${props => props.theme['color-reverse']};
	}
`

export default Button;