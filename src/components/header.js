import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/">
          <img
            src="https://2ch.hk/de/thumb/58477/15307117941630s.jpg"
            width="30"
          />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloaeds</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/Buy">
          <button>Buy</button>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
