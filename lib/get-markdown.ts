import fs from "fs"
import matter from "gray-matter"

const getMarkdown = (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, "utf8")

  return matter(fileContents)
}

export default getMarkdown