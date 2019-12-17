import styled from 'styled-components';
import { device } from '../utils/devices';

const Grid = styled.div`
	display: grid;
	position: relative;
	width: 100%;
	grid-template-columns: 1fr;
	
	@media ${device.md} {
		padding: 0;
		grid-gap: 3rem;
		grid-template-columns: repeat(${props => props.gridCol ? props.gridCol : '2'}, 1fr);
	}
`
export default Grid;