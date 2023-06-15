import React, { FC, ImgHTMLAttributes } from 'react'
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

const CustomImage: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt, width, height, className }) => {
    // jsxで設定する各パスの前にこの basePath を入れる
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || ""
    const imagePass = basePath + src
  return (
    <>
        <img src={imagePass} className={className} alt={alt ?? "workImages"} width={width} height={height} />
    </>
  )
}

export default CustomImage