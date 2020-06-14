import React from "react"
import { Layout } from "layout"
import { SEO } from "components"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h1>Not quiet yet.</h1>
        <p>But eventually we will have the contact page here.</p>
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allFile(filter: { absolutePath: { regex: "/front-gallery/" } }) {
//       nodes {
//         id
//         childImageSharp {
//           fluid(maxWidth: 1920, traceSVG: { color: "#2B2B2F" }) {
//             ...GatsbyImageSharpFluid_withWebp_tracedSVG
//           }
//         }
//       }
//     }
//   }
// `

export default Contact
