import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          I am Ji
        </h1>
        <h1>
          I am Weiwei
        </h1>
        <h1>
          Uh!
        </h1>
        <h1>
          Ji Weiwei
        </h1>
        <a href="mailto:hi@jiweiwei.me">Email Me</a>
      </div>
    )
  }
}
