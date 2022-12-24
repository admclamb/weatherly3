import React from 'react';
import Hero from '../../components/Hero/Hero';
import Layout from '../../layout/Layout';

type Props = {};

const Landing = (props: Props) => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Landing;
