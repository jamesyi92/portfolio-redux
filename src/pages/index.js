import React from 'react';
import Layout from '../components/layout';
import { Parallax } from 'react-spring/renderprops-addons';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';

const IndexPage = ({ parallax }) => (
  <Layout>
    <Parallax pages={3} ref={ref => (parallax = ref)}>
		  <Hero />
		  <About />
		  <Work />
		</Parallax>
  </Layout>
)

export default IndexPage
