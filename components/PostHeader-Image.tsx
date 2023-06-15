import React, { useRef, useEffect } from 'react'
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

type Props = {
  topImage: string
}

const PostHeader = ({topImage}: Props) => {
    // jsxで設定する各パスの前にこの basePath を入れる
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ""
    const imagePass = basePath + topImage
  return (
    <>
      {isImageExt(topImage) ? 
         <img className="fv" src={imagePass} alt="TopImage" width="960" height="540" /> : 
        videoTranslate(imagePass)
      }
    </>
  )
}

const isImageExt = (value: string) :boolean =>  {
  const url = String(value).substring(String(value).lastIndexOf('.'))

  if (url.toUpperCase().match(/\.(jpg)$/i)) {
    return true
  }
  if (url.toUpperCase().match(/\.(jpeg)$/i)) {
    return true
  }
  if (url.toUpperCase().match(/\.(png)$/i)) {
    return true
  }
  if (url.toUpperCase().match(/\.(gif)$/i)) {
    return true
  }
  return false
}

export default PostHeader


const videoTranslate = (videoSrc) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        videoRef.current?.play()
    }, [])
    return (
        <React.StrictMode>
                    <video className="fv" controls muted loop ref={videoRef} >
                        <source src={videoSrc} type="video/mp4" />
                        <p>Your browser doesn't support HTML5 video.</p>
                    </video>
        </React.StrictMode>
    )
}