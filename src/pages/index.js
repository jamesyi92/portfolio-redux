import React from 'react';
import Layout from '../components/layout';
import { Parallax } from 'react-spring/renderprops-addons';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';
import Sandbox from '../sections/Sandbox';
import Tools from '../sections/Tools';

const IndexPage = ({ parallax }) => (
  <Layout>
    <Parallax pages={5} ref={ref => (parallax = ref)}>
		  <Hero />
		  <About />
		  <Work />
		  <Sandbox />
		  <Tools />
		</Parallax>
  </Layout>
)

export default IndexPage
