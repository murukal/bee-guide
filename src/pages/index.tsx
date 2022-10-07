import { graphql, PageProps } from "gatsby"
import React from "react"

interface DataType {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Home = ({ data: { site } }: PageProps<DataType>) => {
  return (
    <main>
      <h1>{site.siteMetadata.title}</h1>
      <p className="custom-text">
        This example is hosted on <a href={site.siteMetadata.title}>GitHub</a>.
        Continue reading{" "}
        <a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/">
          TypeScript and Gatsby documentation
        </a>{" "}
        to learn more.
      </p>
    </main>
  )
}

export default Home

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
