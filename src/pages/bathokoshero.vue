<template>
  <Layout>
    <div class="container">

      <div class="bkoshero-header">
        <h1 class="bkoshero-title">Batho Koshero</h1>
        <p>a story-telling-design-owl.</p>
        <video class="intro-video" autoplay="autoplay" muted="" playsinline loop="" preload="auto">
          <source src="/bathokoshero1.mp4">
        </video>
      </div>

      <div class="body">
        <h1 class="body-title">The joy in evolution and innovation.</h1>
        <p>Weihenmayer has spent his life pushing at limits and expectations. He’s climbed the highest mountain on every continent (including Mount Kosciuszko on the “eighth continent” of Oceania), kayaked the length of the Colorado river, scaled the notorious “Nose” route of El Capitan in Yosemite and completed some of the world’s most gruelling races. His accomplishments would be jaw-dropping even if he could see. But Weihenmayer is completely blind.</p>
      </div>
      
    </div>
  </Layout>
</template>


<script>
export default {}
</script>

<style scoped>
.bkoshero-header {
  padding: 4em 0;
}
.bkoshero-title {
  font-size: 4rem;
  margin: 0;
  padding: 0;
}
.intro-video {
  padding: 3em 0 0;
  width: 100%;
}
.body-title {
  font-size: 2rem;
}
.koshero-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.koshero-post > * {
  transition: transform 0.5s ease;
}
.koshero-post:hover {
  background-color: var(--color-base-1);
}
.koshero-post:hover > * {
  transform: translateX(1rem);
}
.koshero-post h1,
.koshero-post h2 {
  margin: 0;
  padding: 0;
}
.koshero-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.koshero-excerpt {
  color: var(--color-contrast-1);
}
p {
    line-height: 1.5;
    font-size: 1.15rem;
}
h2 {
    font-size: 2rem;
}
</style>

