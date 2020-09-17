<page-query>
query KosheroPost ($path: String!) {
  post: KosheroPost (path: $path) {
    title
    author
    date (format: "D. MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>

