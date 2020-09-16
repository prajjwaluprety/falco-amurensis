const c1 = () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/templates/JournalPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/templates/ProjectPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/pages/Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/prajjwaluprety/Documents/01 Prajjwal Uprety/02 Website and Branding/02 GitHub/falco-amurensis/src/pages/Index.vue")

export default [
  {
    path: "/journal/use-gridsome-vuejs/",
    component: c1
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
    component: c2
  },
  {
    path: "/projects/b-innovationbootcamp/",
    component: c2
  },
  {
    path: "/projects/a-schoolbus/",
    component: c2
  },
  {
    path: "/journal/a-journal-entry/",
    component: c1
  },
  {
    path: "/journal/aalu/",
    component: c1
  },
  {
    path: "/journal/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
