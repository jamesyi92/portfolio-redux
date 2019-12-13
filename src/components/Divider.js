import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';

const Divider = styled(ParallaxLayer)`
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: ${props => props.layer ? props.layer : 'auto'};
`

export default Divider;
