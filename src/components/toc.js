import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Toc = ({ headings }) => {
  return (
    <div className="toc">
      <ul>
        {headings.map(heading => {
          return (
            <li key={heading.id} onClick={() => scrollTo(`#${heading.id}`)}>
              {heading.value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Toc