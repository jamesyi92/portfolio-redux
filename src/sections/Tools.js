import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

import Grid from '../components/Grid';
import Divider from '../components/Divider';
import Container from '../components/Container';

const StyledH2 = styled.h2`
	text-align: center;
	margin-bottom: 2.4rem;
`

const Logo = styled(Img)`
	width: 14rem;
	height: auto;

	img {
		margin-bottom: 0;
	}
`

const LogoBox = styled.div`
	display: grid;
	align-items: center;
	justify-items: center;
	padding: 2.4rem 6rem;
`

const Tools = () => {

	const data = useStaticQuery(graphql`
    query ToolsImageQuery {
      reactImage: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sassImage: file(relativePath: { eq: "sass.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsbyImage: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webpackImage: file(relativePath: { eq: "webpack.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

	return(
		<section>
			<Divider offset={4} factor={1} speed={1}>
				<Container>
					<StyledH2>Here Are Some Tools I'm Familiar With</StyledH2>
					<Grid gridCol={4}>
						<LogoBox>
							<Logo fluid={ data.reactImage.childImageSharp.fluid } alt="ReactJS" />
						</LogoBox>
						<LogoBox>
							<Logo fluid={ data.sassImage.childImageSharp.fluid } alt="SASS" />
						</LogoBox>
						<LogoBox>
							<Logo fluid={ data.gatsbyImage.childImageSharp.fluid } alt="GatsbyJS" />
						</LogoBox>
						<LogoBox>
							<Logo fluid={ data.webpackImage.childImageSharp.fluid } alt="Webpack" />
						</LogoBox>
						<LogoBox>
							<Logo fluid={ data.reactImage.childImageSharp.fluid } alt="ReactJS" />
						</LogoBox>
						<LogoBox>
							<Logo fluid={ data.reactImage.childImageSharp.fluid } alt="ReactJS" />
						</LogoBox>
						<LogoBox>
							<Logo fluid={ data.reactImage.childImageSharp.fluid } alt="ReactJS" />
						</LogoBox>
						<LogoBox>
							<Logo fluid={ data.reactImage.childImageSharp.fluid } alt="ReactJS" />
						</LogoBox>
					</Grid>
				</Container>
			</Divider>
		</section>
	)
}

export default Tools;