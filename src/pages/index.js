import React from 'react';
import Helmet from 'react-helmet'
import Header from '../components/header'

const Index = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>AHOC</title>
        </Helmet>
    <Header />
   </>
  )
}


export default Index

