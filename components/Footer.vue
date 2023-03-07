<template>
  <footer
    class="
      text-xs md:text-sm bg-teal-300 text-gray w-screen h-auto
      xl:mt-20 2xl:mt-36 text-center rounded-t
    "
  >
    <div class="py-1">
      {{ (new Date()).getFullYear() }} &copy; Akshat Nahata -
      <a href="https://github.com/akshatnahata" target="_blank" rel="noreferrer noopener" aria-label="Github">
        {{ $t('footer.viewOn') }}
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
    <div v-if="width < 768">
      <Socials orientation="horizontal" />
    </div>
  </footer>
</template>

<script>
import sizeMixin from '../mixins/sizeMixin';

export default {
  mixins: [sizeMixin],
};
</script>
