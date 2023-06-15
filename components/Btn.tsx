import Link from 'next/link'
import React from 'react'

type Props = {
  label: string
  url: string
}

 const Btn = ({ label, url }:Props) => {

  return url?.match(/^https?:\/\//) ? (
    <a href={url} rel="noreferrer" target="_blank" className="btn">
      {label}
    </a>
  ) : (
    <Link href={url} className="btn">{label}</Link>
  )
} 

export default Btn
