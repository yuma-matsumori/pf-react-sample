import React, { FC, VideoHTMLAttributes } from 'react'
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

const CustomVideo: FC<VideoHTMLAttributes<HTMLVideoElement>> = ({ src, className, poster }) => {
    // jsxで設定する各パスの前にこの basePath を入れる
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ""
    const videoPass = basePath + src
    const posterPass = basePath + poster
  return (
    <>
        <video controls src={videoPass} className={className} poster={posterPass} />
    </>
  )
}
export default CustomVideo