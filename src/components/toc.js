import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Toc = ({ headings }) => {
  const todHeader = headings.length ? <div className="toc-header">TABLE OF CONTENTS</div> : null
  const items = headings.map(h => {
    return (
      <div className={`toc-list-item depth-${h.depth}`} onClick={() => scrollTo(`#${h.id}`)}>
        {h.value}
      </div>
    )
  })

  return (
    <div className="toc">
      {todHeader}
      <div>
        {items}
      </div>
    </div>
  )
}

export default Toc