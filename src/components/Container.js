import styled from 'styled-components';

const Container = styled.div`
	width: ${props => props.width ? props.width : '60%'};
`

export default Container;