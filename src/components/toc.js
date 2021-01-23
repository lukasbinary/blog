import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Toc = ({ headings }) => {
  const items = headings.map(h => {
    return (
      <div className={`toc-list-item depth-${h.depth}`} onClick={() => scrollTo(`#${h.id}`)}>
        {h.value}
      </div>
    )
  })

  return (
    <div className="toc">
      <div className="toc-header">TABLE OF CONTENTS</div>
      <div>
        {items}
      </div>
    </div>
  )
}

export default Toc