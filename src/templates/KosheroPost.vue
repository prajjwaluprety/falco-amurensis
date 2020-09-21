<template>
  <Layout>
    <div class="kosheropost">
      <div class="container">
        <div class="post-header">
          <h1 v-html="$page.kosheros.title" class="post-title" />
          <div class="post-info">
            
            <div class="year-container">
              <span class="label">Year</span>
              <div v-html="$page.kosheros.date"/>
            </div>

          </div>
        </div>

        <div v-html="$page.kosheros.content" class="content" />

      </div>

    </div>
  </Layout>
</template>


<page-query>
query KosheroItems ($path: String!){
	kosheros : kosheroPost (path: $path){
    title
    date (format: "MMMM YYYY")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.kosheros.title
    }
  }
}
</script>

<style scoped>

.post-header {
  padding: 8vh 0 4rem 0;
}
.post-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.post-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.post-info > div {
  margin-right: 4rem;
}
.post-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
