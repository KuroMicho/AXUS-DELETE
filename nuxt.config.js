export default {
    head: {
        title: "Mi Página con Nuxt",
        meta: [
            { 'charset': 'utf8'},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]
    },
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios'
    ],
    axios: {
        
    }
}