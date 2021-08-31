import React from 'react';
import Helmet from 'react-helmet'
import Header from '../components/header'
import Card from '../components/card'
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby'

const Index = ({ HomeCardContent }) => {
  
  const dummyData = [{
    id: "dd1",
    titile: "Netlify Lambda Functions In Gatsby",
    slug: "netlify-lambda-functions-in-gatsby",
    image: "static/assets/keyboard.jpg"
  },
  {
    id: "dd2",
    titile: "The JAMStack Architechture",
    slug: "the-jamstack-architechture", 
    image: "static/assets/architecture.jpg"
  }]

  console.log(dummyData)
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>AHOC</title>
        </Helmet>
      <Header />
      <Card className="card card-home-pg">
        <HomeCardContent/>
      </Card>
   </>
  )
}

//FIX:move this into it's own component
export function HomeCardContent({dummyData}) {
  <>
    <h3>Latest Posts</h3>
    {
      dummyData.map(data => {
        return (
          <Link key={data.id} to={data.slug}>
            <img src={data.image} alt={data.image}/>
            <h4 className="sub1">
              {data.title}
            </h4>
          </Link>
        )
      })
    }
  </>
}

export default Index

