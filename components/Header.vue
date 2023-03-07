<template>
  <header
    class="flex w-screen h-screen justify-center items-center bg-gradient-to-b from-teal-900"
  >
    <div
      class="absolute px-5 md:px-0 m-auto text-white tracking-wider text-center md:text-left z-10"
    >
      <h1 class="text-2xl sm:text-3xl md:text-5xl xl:text-6xl">
        {{ $t('header.headtitle') }} <span class="text-teal-300 font-bold">Akshat Nahata</span>
      </h1>
      <h2 ref="subtitle" class="text-xl sm:text-2xl md:text-4xl xl:text-5xl" />
      <p class="mt-5 md:text-lg">
        {{ $t('header.subline') }}
      </p>
      <div class="text-center">
        <a href="#contact" class="action-button mt-4">
          {{ $t('actions.getInTouch') }}
        </a>
      </div>
    </div>
    <div class="absolute bottom-0 flex justify-center w-screen animate-bounce">
      <!-- Created by kiddo from the Noun Project -->
      <img class="h-24" src="~/assets/img/scroll.svg" alt="scroll icon">
    </div>
    <div ref="particleContainer" class="relative invisible sm:visible" />
  </header>
</template>

<script>
import TypeWriter from 'typewriter-effect/dist/core';
import { init, animate } from '../particle-wave';

export default {
  mounted() {
    this.startTypeWriter();
    init(this.$refs.particleContainer);
    animate();
  },
  methods: {
    startTypeWriter() {
      const typewriter = new TypeWriter(
        this.$refs.subtitle,
      );

      typewriter
        .pauseFor(500)
        .typeString(this.$t('header.subtitle1'))
        .pauseFor(750)
        .deleteChars(10)
        .typeString(this.$t('header.subtitle2'))
        .pauseFor(750)
        .deleteChars(8)
        .typeString(this.$t('header.subtitle3'))
        .pauseFor(1000)
        .callFunction((state) => {
          // eslint-disable-next-line
          state.elements.cursor.style.display = 'none';
        })
        .start();
    },
  },
};
</script>
