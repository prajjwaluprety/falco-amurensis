<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header">
          <h1 class="project-title">Potato</h1>
          <div class="project-info">
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
    date
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.kosheros.title,
      bodyAttrs: {
        style: `background-color: ${this.$page.kosheros.project_bg_color ? this.$page.kosheros.project_bg_color : 'var(--color-base)'}; color: ${this.$page.post.project_fg_color ? this.$page.post.project_fg_color : 'var(--color-contrast)'}`
      }
    }
  }
}
</script>

<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
