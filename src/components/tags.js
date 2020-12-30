import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const Tags = ({tags}) => {
  const tagsView = tags.map(t => {
    return (
      <Link className="tag-default" to={`/tags/${kebabCase(t)}/`}>
        {t}
      </Link>
    )
  })
  return (
    <>
      {tagsView}
    </>
  )
}

export default Tags