import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

import "../../css/global.css";
import styled from "styled-components";

const TItleSpan = styled.span`
  font-size: 26px;
  font-weight: 900;

  text-decoration: none;
`;
const DateSpan = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #07de44;
  text-decoration: none;
`;
class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: "post",
    };
  }

  changePageHandler = (type) => {
    console.log(type);
    this.setState({ pageType: type });
  };

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    var postIndex = 0;

    const post = () => (
      <>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          postIndex = postIndex + 1;

          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <div style={{ height: "30px" }}></div>
              <header>
                <TItleSpan
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </TItleSpan>
                <br></br>
                <DateSpan>{node.frontmatter.date}</DateSpan>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
              <div
                style={{
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {postIndex !== posts.length && (
                  <div
                    style={{
                      width: "100%",
                      height: "0.2rem",
                      backgroundColor: "#000000",
                    }}
                  ></div>
                )}
              </div>
            </article>
          );
        })}
      </>
    );
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="m-10">{post()}</div>
        {/* <SEO title="All posts" /> */}
        {/* <Bio /> */}
        {/* {posts.map(({ node }) => {
          postIndex = postIndex + 1;

          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <div style={{ height: "30px" }}></div>
              <header>
                <TItleSpan
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </TItleSpan>
                <br></br>
                <DateSpan>{node.frontmatter.date}</DateSpan>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
              <div
                style={{
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {postIndex !== posts.length && (
                  <div
                    style={{
                      width: "100%",
                      height: "0.2rem",
                      backgroundColor: "#000000",
                    }}
                  ></div>
                )}
              </div>
            </article>
          );
        })} */}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            description
          }
        }
      }
    }
  }
`;
