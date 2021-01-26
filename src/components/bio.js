/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        <h1>
          Haeuncs<br></br>
        </h1>
        어쩌다 이 누추한 곳까지 찾아오셨을까요. 반갑습니다.
        <br />
        <a href={`https://github.com/Haeuncs`}>Github</a>
        <br></br>
        <a href={`mailto:haeun.developer@gmail.com`}>
          haeun.developer@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Bio;
