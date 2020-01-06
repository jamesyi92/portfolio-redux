import styled from 'styled-components';

const Heading = styled.h2`
	font-size: 3.6rem;
	margin-bottom: 1.6rem;
	text-align: ${props => props.center ? 'center' : 'left'};
`

export default Heading;
