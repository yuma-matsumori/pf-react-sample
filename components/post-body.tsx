import { NextPage } from "next";
import markdownToHtml from '../lib/markdownToHtml'

type BlogDetailPageProps = {
  content: string;
};

const PostBody: NextPage<BlogDetailPageProps> = ({ content }) => {
  return <div className="content">{markdownToHtml(content)}</div>
};

export default PostBody
