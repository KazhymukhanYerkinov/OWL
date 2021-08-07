import React from 'react';
import { LayoutProps } from './Layout.props';

import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <Sidebar />
        <div>
          {  children }
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};