<template>
  <section class="h-full mt-5 xl:mt-16 2xl:mt-30">
    <div class="col-span-full h-12 xl:h-28">
      <h3>{{ $t('services.title') }}</h3>
      <hr>
    </div>
    <div
      class="flex flex-col md:flex-row text-white
      text-center justify-center md:justify-between mt-5"
    >
      <div
        v-for="service in services"
        :key="service.id"
        class="w-4/5 md:w-1/3 mx-auto"
      >
        <span class="text-4xl md:text-6xl xl:text-8xl block m-5">
          <font-awesome-icon :icon="service.icon" />
        </span>
        <h4 class="font-thin uppercase text-xl md:text-2xl">
          {{ $t(`services.${service.id}.title`) }}
        </h4>
        <p class="text-center md:text-left mt-5 px-4 ">
          {{ $t(`services.${service.id}.content`) }}
        </p>
      </div>
    </div>
    <div class="text-center">
      <a href="#contact" class="action-button mt-5">
        {{ $t('actions.getInTouch') }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    services: [{
      id: 'service1',
      icon: ['fas', 'hammer'],
    }, {
      id: 'service2',
      icon: ['fas', 'search'],
      title: 'Analysis',
      content: '',
    }, {
      id: 'service3',
      icon: ['fas', 'cogs'],
      title: 'DevOps',
      content: 'lorem',
    }],
  }),
};
</script>
