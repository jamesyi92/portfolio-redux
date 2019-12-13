import React from 'react';
import Layout from '../components/layout';
import { Parallax } from 'react-spring/renderprops-addons';
import Hero from '../sections/Hero';

const IndexPage = ({ parallax }) => (
  <Layout>
    <Parallax pages={3} ref={ref => (parallax = ref)}>
		  <Hero />
		</Parallax>
  </Layout>
)

export default IndexPage
