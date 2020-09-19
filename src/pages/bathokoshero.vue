<template>
  <Layout>
    <div class="container">
      <div class="bkoshero-header">
        <h1 class="bkoshero-title">Batho Koshero</h1>
        <p>a story-telling-design-owl.</p>
        <video class="intro-video" autoplay="autoplay" muted playsinline loop preload="auto">
          <source src="/bathokoshero1.mp4" />
        </video>
      </div>

      <div class="body">
        <h1 class="body-title">The joy in evolution and innovation.</h1>
        <p>Weihenmayer has spent his life pushing at limits and expectations. He’s climbed the highest mountain on every continent (including Mount Kosciuszko on the “eighth continent” of Oceania), kayaked the length of the Colorado river, scaled the notorious “Nose” route of El Capitan in Yosemite and completed some of the world’s most gruelling races. His accomplishments would be jaw-dropping even if he could see. But Weihenmayer is completely blind.</p>
      </div>

      <g-link 
      :to="item.node.path"
      v-for="item in $page.kosheros.edges" 
      :key="item.node.id"
      class="koshero-blocks"
      >
      <div class="container kosheroitems">
        <h2 class="koshero-title">{{ item.node.title }}</h2>
        <p class="koshero-excerpt">{{ item.node.excerpt }}</p>
      </div>
    </g-link>

    <div class="koshero-footers">
      <h1 class="the-kosheros">Batho Koshero-es are:</h1>
      <div class="koshero-cell">
          <figure class="happy-owl">
              <img src="/customuploads/AnojB.png" alt="anoj" />
              <figcaption><i class="ion-android-add"></i></figcaption>
              <a href="#/"></a>
          </figure>
          <figure class="happy-owl">
              <img src="/customuploads/PrajjwalU.png" alt="prajjwal" />
              <figcaption><i class="ion-android-add"></i></figcaption>
              <a href="#/"></a>
          </figure>
      </div>
    </div>

    </div>
  </Layout>
</template>

<page-query>
query KosheroItems {
	kosheros : allKosheroPost {
    edges {
      node {
        id
        path
        title
        date
        excerpt
      }
    }
  }
}
</page-query>

<script>
console.log('aalu')
export default {
  
};
</script>

<style scoped>
p {
  line-height: 1.5;
  font-size: 1.15rem;
}
h2 {
  font-size: 2rem;
}
.bkoshero-header {
  padding: 4em 0;
  text-align: center;
}
.bkoshero-header p{
  padding: 1em 0;
}
.bkoshero-title {
  font-size: 3rem;
  margin: 0;
  padding: 0;
}
.intro-video {
  padding: 3em 0 0;
  width: 100%;
}
.body {
  text-align: center;
  padding: 0 3rem 2rem;
}
.body-title {
  font-size: 2rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
.koshero-blocks {
  text-align: center;
  text-decoration: none;
}
.kosheroitems {
  display: block;
  padding: 2rem 3rem;
  text-decoration: none;
  transition: background 0.5s ease;
  width: 100%;
  display: block;
}
.kosheroitems > * {
  transition: transform 0.5s ease;
}
.kosheroitems:hover > * {
  transform: translateX(1rem);
}
.kosheroitems:hover {
  background-color: var(--color-base-1);
}
.kosheroitems h1,
.kosheroitems h2 {
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
.koshero-footers {
  padding: 3rem 0 0;
}
.the-kosheros {
     font-size: 2rem;
     padding-bottom: 1rem;
     text-align: center;
 }
 
 .koshero-cell {
     padding-bottom: 3em;
     text-align: center;
 }
 
 .happy-owl {
     position: relative;
     display: inline-block;
     margin: 15px;
     max-width: 90px;
     width: 100%;
     color: black;
     font-size: 16px;
     box-shadow: none !important;
     -webkit-transform: translateZ(0);
     transform: translateZ(0);
 }
 
 .happy-owl *,
 .happy-owl:before,
 .happy-owl:after {
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     -webkit-transition: all 0.3s linear;
     transition: all 0.3s linear;
 }
 
 .happy-owl:before,
 .happy-owl:after {
     -webkit-box-sizing: border-box;
     box-sizing: border-box;
     border-radius: 50%;
     content: '';
     position: absolute;
     top: 0px;
     bottom: 0px;
     left: 0px;
     right: 0px;
     z-index: -1;
     border: 2px solid #FFBE0B;
     border-color: transparent #FFBE0B;
 }
 
 .happy-owl img {
     max-width: 100%;
     backface-visibility: hidden;
     vertical-align: top;
     border-radius: 50%;
     padding: 10px;
 }
 
 .happy-owl a {
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     z-index: 1;
 }
 
 .happy-owl figcaption {
     position: absolute;
     top: 9px;
     bottom: 9px;
     left: 9px;
     right: 9px;
     opacity: 0;
     background-color: black;
     border-radius: 50%;
 }
 
 .happy-owl:hover figcaption,
 .happy-owl.hover figcaption {
     opacity: .6;
     -webkit-transform: translateX(0);
     transform: translateX(0);
 }
 
 .happy-owl:hover:before,
 .happy-owl.hover:before,
 .happy-owl:hover:after,
 .happy-owl.hover:after {
     border-width: 4px;
 }
 
 .happy-owl:hover:before,
 .happy-owl.hover:before {
     -webkit-transform: rotate(90deg);
     transform: rotate(45deg);
 }
 
 .happy-owl:hover:after,
 .happy-owl.hover:after {
     -webkit-transform: rotate(-90deg);
     transform: rotate(-45deg);
 }
 
</style>

