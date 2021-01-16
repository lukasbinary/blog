import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const SideTags = ({ tags }) => {
  return (
    <div className="side-tags">
      <ul>
        <li key="side-tag-all-tags">
          <Link className="tag-default" to={`/`}>
            all
          </Link>
        </li>
        {tags.map(tag => (
          <li key={`side-tag-${tag.fieldValue}`}>
            <Link className="tag-default" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideTags