import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import { Toolbar } from './Toolbar';

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
  title: string;
}

const StyledLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <StyledLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`This is the blog feed page`} />
        <meta property="og:title" content={title} />
      </Head>
      <div>
        <Toolbar />
        {children}
      </div>
    </StyledLayout>
  );
};

export default Layout;
