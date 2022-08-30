import * as React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.slug}>
    <h1>{post.frontmatter.title}</h1>
    <p>{post.frontmatter.date}</p>
    <p>{post.excerpt}</p>
  </Link>
)

export default PostLink
