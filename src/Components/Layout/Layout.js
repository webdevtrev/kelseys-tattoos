import * as React from 'react';
import './Layout.scss';
import './../../global.scss';
import Seo from '../Seo/Seo';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({
  className,
  title,
  description,
  path,
  children,
}) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <div className='App'>
        <Header />
        <main className={className}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
