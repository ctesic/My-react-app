import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hello World</h1>
        <p>Welcome to your new Gatsby site.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <svg
          width="1698"
          height="308"
          viewBox="0 0 1698 308"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L697.5 138L1698 0V308H0V0Z" fill="#E58F8F" />
        </svg>
      </div>
    </div>
  </div>
)

export default IndexPage
