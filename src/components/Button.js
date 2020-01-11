import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
	display: inline-block;
	font-size: 1.6rem;
	border: 1px solid ${props => props.dark ? props.theme['background-3'] : props.theme['color-reverse']}};
	background: ${props => props.dark ? props.theme['background-3'] : 'transparent'};
	padding: ${props => props.large ? '1rem 4rem' : '.8rem 2.4rem'};
	text-transform: capitalize;
	color: ${props => props.theme['color-reverse']};
	text-decoration: none;
	border-radius: 4px;
	transition: ease-in-out all .2s;

	&:hover {
		border: 1px solid ${props => props.theme.primary};
		background: ${props => props.theme.primary};
		color: ${props => props.theme.color};
	}
`

export default Button;