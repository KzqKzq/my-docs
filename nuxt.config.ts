export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/i18n', 'nuxt-studio'],
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }],
  },
    studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',
    
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'KzqKzq', // your GitHub/GitLab username or organization
      repo: 'my-docs', // your repository name
      branch: 'master', // the branch to commit to (default: main)
    }
  }
})