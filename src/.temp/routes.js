const c1 = () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/templates/JournalPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--koshero-post-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/templates/KosheroPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/templates/ProjectPost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/pages/Journal.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--bathokoshero-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/pages/bathokoshero.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/pages/Index.vue")

export default [
  {
    path: "/journal/vuejs/",
    component: c1
  },
  {
    path: "/koshero-items/thedesignroadway/",
    component: c2
  },
  {
    path: "/koshero-items/swarmduct/",
    component: c2
  },
  {
    path: "/journal/taalu/",
    component: c1
  },
  {
    path: "/journal/kyakhalu/",
    component: c1
  },
  {
    path: "/projects/c-newroad/",
    component: c3
  },
  {
    path: "/projects/b-innovationbootcamp/",
    component: c3
  },
  {
    path: "/projects/a-schoolbus/",
    component: c3
  },
  {
    path: "/journal/goldenratio/",
    component: c1
  },
  {
    path: "/journal/bass/",
    component: c1
  },
  {
    path: "/journal/aalu/",
    component: c1
  },
  {
    path: "/journal/",
    component: c4
  },
  {
    path: "/bathokoshero/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
