import  { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../lib/api'
import type PostType from '../interfaces/post'
import PostBody from '../components/post-body'
import PostHeaderInfo from '../components/PostHeader-Info'
import PostHeaderImage from '../components/PostHeader-Image'
import BtnSection from '../components/BtnSection'
import PageTop from '../components/PageTop'
import Meta from '../components/meta'

type Props = {
  post: PostType
}

export default function Post({post}: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
    <Meta />
    <PageTop />
    <PostHeaderImage topImage={post.topImage} />
    <div className="container container__bottom">
    <PostHeaderInfo title={post.title} date={post.date} client={post.client} tags={post.tags} />
    <PostBody content={post.content} />
    <BtnSection btn={{
        label: post.btn.label,
        url: post.btn.url
      }} btn2={{
        label: post.btn2.label,
        url: post.btn2.url
      }} btn3={{
        label: post.btn3.label,
        url: post.btn3.url
      }} btn4={{
        label: post.btn4.label,
        url: post.btn4.url
      }} />
      </div>
      </>
        )}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'key',
    'client',
    'tags',
    'title',
    'date',
    'topImage',
    'slug',
    'btn',
    'btn2',
    'btn3',
    'btn4',
    'content',
  ])
  const content = JSON.parse(JSON.stringify(post.content || ''));

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
