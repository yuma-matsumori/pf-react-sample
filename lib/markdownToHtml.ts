import { Fragment, createElement, ReactElement } from "react";
import { remark } from "remark"
import html from "remark-html"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeReact from "rehype-react"
import rehypeRaw from "rehype-raw"
import CustomImage from "../components/CustomImage"
import CustomVideo from "../components/CustomVideo"
//import rehypeStringify from "rehype-stringify"

const markdownToHtml = (markdown: string): ReactElement => {
  return remark()
  .use(html)
  .use(remarkGfm)
  .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
  .use(rehypeRaw)
  //.use(rehypeStringify)
  .use(rehypeReact, {
    Fragment,
    components: {
      img: CustomImage,
      video: CustomVideo
    },
    createElement,
  })
  .processSync(markdown).result
}

export default markdownToHtml
