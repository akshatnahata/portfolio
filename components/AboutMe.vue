<template>
  <section class="h-full mt-12 xl:mt-16 2xl:mt-30">
    <div class="col-span-full h-12 xl:h-28">
      <h3>{{ $t('aboutMe.title') }}</h3>
      <hr>
    </div>
    <div class="flex flex-col xl:flex-row">
      <div class="wrapper w-2/5 sm:w-1/4 xl:w-3/5 max-w-xs h-auto mx-auto mt-5">
        <picture>
          <source srcset="~/assets/img/jpg/me.jpg">
          <source srcset="~/assets/img/jpg/me.jpg">
          <img
            src="~/assets/img/jpg/me.jpg"
            alt="avatar"
            class="rounded-md border-4 border-teal-300 "
          >
        </picture>
      </div>
      <div class="text-white mt-10 pl-2 xl:pl-10">
        <p>
          {{ $t('aboutMe.paragraph1') }}
        </p>
        <p class="mt-5" v-html="$t('aboutMe.paragraph2')" />
        <p class="mt-5" v-html="$t('aboutMe.paragraph3')" />
        <p class="mt-5" v-html="$t('aboutMe.paragraph4')" />
        <p class="mt-5" v-html="$t('aboutMe.paragraph5')" />
        <p class="mt-5" v-html="$t('aboutMe.paragraph6')" />
      </div>
    </div>
    <div class="my-5">
      <div class="w-4/5 sm:w-3/5 md:w-2/5 mx-auto mt-3">
        <HelpersSkillsHex />
      </div>
    </div>
    <div class="text-center">
      <a href="#contact" class="action-button mt-5">
        {{ $t('actions.getInTouch') }}
      </a>
    </div>
  </section>
</template>

<style scoped>
img {
  box-shadow: 20px 20px 0 -3px #1a202c, 20px 20px #2dd4bf;
}
</style>
