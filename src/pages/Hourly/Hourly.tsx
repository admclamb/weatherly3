import React from 'react';
import NavbarPage from '../../components/Navbar/NavbarPage/NavbarPage';
import Layout from '../../layout/Layout';
type Props = {};

const Hourly = (props: Props) => {
  return (
    <Layout>
      <NavbarPage active="hourly" />
    </Layout>
  );
};

export default Hourly;
