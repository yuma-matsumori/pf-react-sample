import React from 'react'

type Props = {
  title: string
  date: string
  client: string
  tags: string
}

const PostHeader = ({ title, date, client, tags }: Props) => {
  return (
    <>
    <h1>{title}</h1>
      <p className="note title__bottom">{date}</p>
      <dl>
      {client && (
              <div className="dl__line">
                <dt>クライアント</dt>
                <dd>{client}</dd>
              </div>
      )}
      {client && (
        <div className="dl__line">
          <dt>担当した分野</dt>
          <dd>{tags}</dd>
        </div>
      )}
      </dl>
    </>
  )
}

export default PostHeader
