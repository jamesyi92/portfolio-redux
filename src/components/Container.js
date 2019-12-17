import styled from 'styled-components';
import { device, containerMaxWidth } from '../utils/devices';

const { sm, md, lg, xl } = containerMaxWidth;

const Container = styled.div`
	width: 90%;

	@media ${device.sm} {
		max-width: ${sm};
	}

	@media ${device.md} {
		max-width: ${md};
	}

	@media ${device.lg} {
		max-width: ${lg};
	}

	@media ${device.xl} {
		max-width: ${xl};
	}
`

export default Container;