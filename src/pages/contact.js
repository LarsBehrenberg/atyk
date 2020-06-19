import React from "react"
import { Layout } from "layout"
import { SEO } from "components"
import { navigate } from "gatsby-link"
import styled from "@emotion/styled"

const Title = styled.h2`
  padding-left: 2rem;
  font-size: 36px;
  line-height: 40px;
  margin: 1rem 0 0 0;
  font-weight: 400;
  letter-spacing: 0.2em;
`

const SubTitle = styled.h3`
  padding: 0 3rem;
  font-size: 20px;
  line-height: 40px;
  margin: 1rem 0 0 0;
  letter-spacing: 0.2em;
  @media (max-width: 640px) {
    padding: 0 2rem;
  }
`

const ContactForm = styled.form`
  padding: 2rem 3rem;

  @media (max-width: 640px) {
    padding: 2rem;
  }
`

const Input = styled.input`
  border: 1px solid rgb(118, 118, 118);
  border-radius: 2px;
  padding: 18px 25px;
  height: 52px;
  width: 300px;
  margin: 0 0 30px;
  font-size: 14px;
  font-weight: 300;
  max-width: 100%;
  outline: 0;
  letter-spacing: 0.2em;
  background: #fff;
  display: block;
`

const Textfield = styled.textarea`
  border: 1px solid rgb(118, 118, 118);
  border-radius: 2px;
  padding: 18px 25px;
  width: 450px;
  height: 200px;
  margin: 0 0 30px;
  font-size: 14px;
  font-weight: 300;
  max-width: 100%;
  outline: 0;
  letter-spacing: 0.2em;
  background: #fff;
  display: block;
`

const SubmitButton = styled.button`
  font-size: 13px;
  line-height: 13px;
  font-weight: 600;
  padding: 14px 26px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  background: transparent;
  outline: none;
  cursor: pointer;
`

const Contact = () => {
  const [state, setState] = React.useState({})

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(data => console.log(data))
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Title>Contact</Title>
      <SubTitle>お仕事のご相談、ご依頼 ・ 写真購入のお問い合わせ</SubTitle>
      <ContactForm
        name="contact-us"
        method="POST"
        data-netlify="true"
        // data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="form-name"
          value="contact-us"
          class="hidden"
          style={{ display: "none" }}
          aria-label="form-field"
        />
        <p class="hidden" style={{ display: "none" }}>
          <label>
            Don’t fill this out if you're human:{" "}
            <input name="bot-field" aria-label="bot-field" />
          </label>
        </p>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="お名前・name"
          required
        />
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="メールアドレス・e-mail"
          required
        />
        <Textfield
          type="text"
          name="message"
          onChange={handleChange}
          placeholder="メッセージ・message"
          required
        />
        {/* <div data-netlify-recaptcha="true"></div> */}
        <SubmitButton type="submit">送信・submit</SubmitButton>
      </ContactForm>
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
