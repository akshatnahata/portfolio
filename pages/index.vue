<template>
  <div>
    <Header />
    <main class="container px-4 mx-auto overflow-x-hidden">
      <Services />
      <AboutMe />
      <TimeLine />
      <References />
      <Contact class="mb-8" />
    </main>
    <Socials v-if="width > 768" />
    <Footer />
  </div>
</template>

<script>
import sizeMixin from '../mixins/sizeMixin';

export default {
  mixins: [sizeMixin],
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.description'),
        },
        { name: 'image', property: 'og:image', content: 'https://jc-software.solutions/social-preview.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '627' },
        { property: 'og:title', content: 'Akshat Nahata | Freelance Software Engineer' },
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
      ],
    };
  },

};
</script>
