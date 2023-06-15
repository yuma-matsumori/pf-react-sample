import React from 'react'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  pass: string
}

const List = ({ title, date, pass,}: Props) => {

  return pass?.match(/^https?:\/\//) ? (
    <a href={pass} rel="noreferrer" target="_blank" className="list__item">
    <p className="list__title">
      {title}
    </p>
    <p className="note">
      {date}
    </p>
  </a>
  ) : (
    <Link href={pass} className="list__item">
    <p className="list__title">
      {title}
    </p>
    <p className="note">
      {date}
    </p>
  </Link>
  )
}
export default List
