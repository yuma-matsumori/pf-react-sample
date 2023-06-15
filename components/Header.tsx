import React from 'react'
import Link from 'next/link'

export default function header() {
 
  return (
    <header>
    <Link href="/" className="header__logo">Yuma Matsumori</Link>
    <Link href="/profile" className="header__menu">Profile</Link>
  </header>
  )
}
