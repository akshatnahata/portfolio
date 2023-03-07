<template>
  <blockquote class="text-white leading-tight text-lg text-center">
    <q class="font-thin italic">
      {{ reference.quote }}
    </q>
    <div class="text-center mt-5 text-teal-300 font-medium">
      <img
        :src="require(`~/assets/img/jpg/${reference.authorImage}`)"
        :alt="`${reference.author} Avatar`"
        class="h-12 md:h-16 rounded-full mx-auto"
      >
      <span class="leading-loose">
        {{ reference.author }}
      </span>
    </div>
  </blockquote>
</template>

<script>
export default {
  props: {
    reference: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.quotation-mark {
  @apply m-0 text-teal-300 text-3xl inline leading-none;
}
</style>
