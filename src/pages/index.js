// import React from "react"
// 
// export default () => <div>Hello world!</div>

import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulBlogPage {
          blogPageTextField {
            id
          }
        }
      }
    `}
    render={({
      contentfulBlogPage: {
        blogPageTextField: {
          id
        }
      }
    }) => (
      <>
        <h1>{id}</h1>
      </>
    )}
  />
);

export default HomePage;
