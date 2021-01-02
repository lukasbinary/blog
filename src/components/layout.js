import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isLargeHeader = location.pathname === rootPath ||
    location.pathname.includes(`/tags/`)
  let header

  if (isLargeHeader) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isLargeHeader}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}. <strong>lukasbinary</strong>. Built with
        {` `}
        <a style={{textDecoration: `none`}} href="https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog">gatsby-starter-blog</a>
      </footer>
    </div>
  )
}

export default Layout
