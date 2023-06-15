import { useEffect, useState } from 'react'
import cx from "classnames"

const PageTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility =()=>{
    100 <= window.scrollY ? setIsVisible(true) : setIsVisible(false)
}

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
       <a className={cx("pageTop", isVisible ? "opacityOFF" : "opacityON")} onClick={returnTop}>
        <div className="pageTop__arr" />
      </a>
  </>
  )
}

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export default PageTop
