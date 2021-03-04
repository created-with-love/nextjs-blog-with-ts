import Head from 'next/head';
import React from 'react';
import { Toolbar } from './Toolbar';

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`This is the blog feed page`} />
        <meta property="og:title" content={title} />
      </Head>
      <div>
        <Toolbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
