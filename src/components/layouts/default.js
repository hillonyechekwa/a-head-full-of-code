import React from 'react';
import Nav from '../navigation';
import '../../styles/index.scss';
import { useStaticQuery,graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const Default = ({ children }) => {

    const pagedata = useStaticQuery(graphql`
    query PageQuery{
      site {
        siteMetadata {
          title
          description
          tags
        }
      }
    }
  `)

    return (
        <div className="layout-wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pagedata.site.siteMetadata.title}</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Default;

