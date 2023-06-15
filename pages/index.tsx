import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import List from '../components/List'
import PageTop from '../components/PageTop'
import Meta from '../components/meta'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(1)
  morePosts.sort()
  return (
    <>
    <Meta />
    <PageTop />
    <div className="container">
        {morePosts.map((slug, i) => {
          return (
        <List title={morePosts[i].title} date={morePosts[i].date} pass={`${morePosts[i].slug}`} key={i}></List>
          )
        })}
         <List title="Student Works" date="" pass="https://google.com/" key="99"></List>
        </div>
    </>
    );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'key',
    'title',
    'date',
    'slug'
  ]) 

  return {
    props: { allPosts },
  }
}
