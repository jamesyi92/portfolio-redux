import React from 'react';
import Layout from '../components/layout';
import { Parallax } from 'react-spring/renderprops-addons';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';
import Sandbox from '../sections/Sandbox';
import Tools from '../sections/Tools';
import Contact from '../sections/Contact';

const IndexPage = ({ parallax }) => (
  <Layout>
    <Parallax pages={6} ref={ref => (parallax = ref)}>
		  <Hero />
		  <About />
		  <Work />
		  <Sandbox />
		  <Tools />
		  <Contact />
		</Parallax>
  </Layout>
)

export default IndexPage
