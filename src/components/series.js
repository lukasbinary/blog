import React from "react"
import classNames from 'classnames';
import { Link } from "gatsby"

const Series = ({current, series}) => {
  const seriesView = series.nodes.map((s, i) => {
    return (
      <div>
        <Link className={classNames("series-item", {current: s.id === current})} to={s.fields.slug}>
          {`${i + 1}. `}
          {s.frontmatter.title}
        </Link>
      </div>
    )
  })
  return (
    <>
      {seriesView}
    </>
  )
}

export default Series