import React from 'react';
import Helmet from 'react-helmet'
import Header from '../components/header'
import Card from '../components/card'
import HomeCardContent from '../components/HomeCardContent';
import { useStaticQuery, graphql } from 'gatsby';
import ImageOne from '../../public/assets/keyboard.jpg'
import ImageTwo from '../../static/assets/architecture.jpg'
import BottomInfoCont from '../components/bottominfocont';
// import '../styles/styles.scss'

const Index = () => {
  const dummyData = [{
    id: "dd1",
    title: "Netlify Lambda Functions In Gatsby",
    slug: "netlify-lambda-functions-in-gatsby",
    image: `../../assets/keyboard.jpg`
  },
  {
    id: "dd2",
    title: "The JAMStack Architechture",
    slug: "the-jamstack-architechture", 
    image: `../../assets/architecture.jpg`
  }]

  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>AHOC</title>
        </Helmet>
      <Header />
      <Card className="card card-home-pg" content={<HomeCardContent cardData={dummyData}/>}/>
      <Card className="card-info bottom-info" content={<BottomInfoCont/> } />
   </>
  )
}

export default Index

