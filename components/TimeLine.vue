<template>
  <section id="timeline" class="h-full mt-12 2xl:mt-30">
    <div class="col-span-full h-12 xl:h-28">
      <h3>Timeline</h3>
      <hr>
    </div>
    <div>
      <h4 class="text-center mb-5 pt-5">
        Work experience
      </h4>
      <HelpersVerticalTimeline :input="workData" />
    </div>
    <div class="mt-5">
      <h4 class="text-center my-5 pt-5">
        Education
      </h4>
      <HelpersVerticalTimeline :input="educationData" is-edu />
    </div>
    <div class="text-center">
      <a href="#contact" class="action-button mt-5"> Get in touch </a>
    </div>
  </section>
</template>

<script>
import resume from '../assets/data/resume.json';

export default {
  computed: {
    educationData() {
      return resume.education;
    },
    workData() {
      return resume.work;
    },
  },
};
</script>

<style scoped>
h4 {
  @apply text-teal-300 text-3xl font-thin;
}
</style>
