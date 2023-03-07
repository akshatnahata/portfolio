<template>
  <div class="d-flex text-white">
    <img
      :src="require(`~/assets/img/logos/${logo}`)"
      :alt="logo.slice(0, logo.length - 4)"
      class="mx-auto w-28"
    >
    <div class="text-center">
      <h1 class="mt-2 text-xl font-bold">
        {{ title }}
      </h1>
      <h2>
        {{ period }}
      </h2>

      <h2 class="text-lg italic font-thin">
        {{ location }},
        <flag :iso="iso" :squared="false" />
      </h2>
    </div>

    <p v-if="studyType" class="text-center pt-3">
      {{ studyType }}
    </p>

    <p v-if="description" class="text-center p-3">
      {{ description }}
    </p>
    <ul v-else class="list-disc ml-5 p-3">
      <li v-for="(highlight, index) in highlights" :key="`${highlight}-${index}`">
        {{ highlight }}
      </li>
    </ul>

    <div v-if="icons.length" class="d-flex flex-row h-20 text-center">
      <img
        v-for="icon in icons"
        :key="icon"
        :src="require(`~/assets/img/techstack/${icon}.svg`)"
        :alt="icon"
        :title="icon"
        class="h-6 inline-block mx-2 my-3"
      >
    </div>

    <div class="text-center">
      <a
        v-if="website"
        :href="website"
        class="text-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        view website
        <sup class="text-xs">
          <font-awesome-icon :icon="['fas', 'external-link-alt']" />
        </sup>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    logo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    iso: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    highlights: {
      type: Array,
      default: () => [],
    },
    website: {
      type: String,
      required: true,
    },
    icons: {
      type: Array,
      required: true,
    },
    studyType: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped>
.text-link {
  @apply text-teal-300 transition-all duration-300 uppercase font-bold;
}

.text-link:hover {
  @apply opacity-75;
}
</style>
