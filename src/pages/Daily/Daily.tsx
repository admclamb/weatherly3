import React from 'react';
import NavbarPage from '../../components/Navbar/NavbarPage/NavbarPage';
import Layout from '../../layout/Layout';

type Props = {};

const Daily = (props: Props) => {
  return (
    <Layout>
      <NavbarPage active="daily" />
    </Layout>
  );
};

export default Daily;
