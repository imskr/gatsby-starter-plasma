import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#0a192f`,
            textDecoration: `none`,
            padding: `5px 15px`,
            background: `#57c7ff`,
            position: "absolute",
            left: "50%",
            top: "2%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              flex: 1,
              position: "absolute",
              left: "50%",
              top: "8%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1.8rem`,
                }}
              >
                <Link style={{ color: `#57c7ff` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.arrayOf(PropTypes.object),
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
