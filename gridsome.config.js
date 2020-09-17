// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config
import VideoBg from 'vue-videobg'

Vue.component('video-bg', VideoBg)

// or
new Vue({
    el: 'body',
    components: { VideoBg }
})


module.exports = {
    siteName: "Prajjwal's Wall",
    siteUrl: `https://prajjowl.com.np`,
    host: "0.0.0.0",
    titleTemplate: "%s • Prajjwal",
    siteDescription: "Design, and Redesign.",
    plugins: [{
            use: "@gridsome/source-filesystem",
            options: {
                path: "projects/**/*.md",
                typeName: "ProjectPost",
                resolveAbsolutePaths: true,
                remark: {
                    externalLinksTarget: "_blank",
                    externalLinksRel: ["nofollow", "noopener", "noreferrer"]
                }
            }
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                path: "Journal/**/*.md",
                typeName: "JournalPost",
                resolveAbsolutePaths: true,
                remark: {
                    externalLinksTarget: "_blank",
                    externalLinksRel: ["nofollow", "noopener", "noreferrer"]
                }
            }
        }
    ],
    transformers: {
        remark: {
            plugins: ["@gridsome/remark-prismjs"]
        }
    }
};