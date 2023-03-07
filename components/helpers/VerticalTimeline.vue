<template>
  <section class="timeline timeline-clippy timeline-hexagon">
    <transition>
      <ul>
        <li v-for="item in timelineItems" :key="item.id">
          <HelpersVerticalTimelineItem v-bind="parseInput(item)" />
        </li>
      </ul>
    </transition>

    <div class="text-center">
      <button
        v-if="input.length > SHOW_ITEM_TRESHOLD"
        class="show-more-button mt-5"
        @click="toggleShowMore"
      >
        Show {{ showMore ? 'less' : 'more' }}
      </button>
    </div>
  </section>
</template>
<script>
import sizeMixin from '../../mixins/sizeMixin';

const SHOW_ITEM_TRESHOLD = 3;

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function period(item, width) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const start = new Date(item.startDate);
  const end = new Date(item.endDate);
  const hasValidEndDate = !Number.isNaN(end.getDate());

  let startMonth = monthNames[start.getMonth()];
  let endMonth;

  if (hasValidEndDate) {
    endMonth = monthNames[end.getMonth()];
  }

  if (width < 768) {
    startMonth = startMonth.substring(0, 3);

    if (hasValidEndDate) {
      endMonth = endMonth.substring(0, 3);
    }
  }

  if (hasValidEndDate) {
    return `${startMonth} ${start.getFullYear()} - ${endMonth} ${end.getFullYear()}`;
  }

  return `${startMonth} ${start.getFullYear()} - Present`;
}

export default {
  mixins: [sizeMixin],
  props: {
    input: {
      type: Array,
      required: true,
    },
    isEdu: Boolean,
  },
  data: () => ({
    SHOW_ITEM_TRESHOLD,
    showMore: false,
  }),
  computed: {
    timelineItems() {
      if (!this.showMore) {
        return this.input.slice(0, SHOW_ITEM_TRESHOLD);
      }
      return this.input;
    },
  },
  mounted() {
    window.addEventListener('load', this.callback);
    window.addEventListener('scroll', this.callback);
  },
  methods: {
    callback() {
      const items = document.querySelectorAll('.timeline li');
      Array.from(items).forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add('in-view');
        }
      });
    },
    parseInput(item) {
      return {
        logo: item.logo,
        title: this.isEdu
          ? item.institution
          : `${item.position} @ ${item.name}`,
        period: period(item, this.width),
        location: item.location.split(',')[0],
        iso: item.location.split(',')[1].trim().toLowerCase(),
        description: this.isEdu ? item.area : undefined,
        highlights: this.isEdu ? undefined : item.highlights,
        website: item.url,
        icons: item.icons,
        studyType: item.studyType,
      };
    },
    toggleShowMore() {
      this.showMore = !this.showMore;
      if (!this.showMore) {
        window.location = '#timeline';
      }
    },
  },
};
</script>
<style scoped>
.timeline ul {
  transition: 0.3s all;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #2dd4bf;
}

.timeline ul li:first-of-type {
  background: linear-gradient(#1a202c, #2dd4bf, #2dd4bf);
}

.timeline ul li::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
  z-index: 1;
}

.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 400px;
  padding: 15px;
  background: transparent;
  border: 1px solid #2dd4bf;
}

.timeline ul li div::before {
  content: '';
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) div {
  left: 45px;
}

.timeline ul li:nth-child(odd) div::before {
  left: -17px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #2dd4bf transparent transparent;
}

.timeline ul li:nth-child(even) div {
  left: -439px;
}

.timeline ul li:nth-child(even) div::before {
  right: -17px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #2dd4bf;
}

.timeline ul li::after {
  background: #2dd4bf;
  transition: background 0.5s ease-in-out;
}

.timeline ul li.in-view::after {
  background: #2dd4bf;
}

.timeline ul li div {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.timeline ul li:nth-child(odd) div {
  transform: translate3d(200px, 0, 0);
}

.timeline ul li:nth-child(even) div {
  transform: translate3d(-200px, 0, 0);
}

.timeline ul li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}

.timeline-clippy ul li::after {
  width: 30px;
  height: 30px;
  border-radius: 0;
}

.timeline-hexagon ul li::after {
  /* clip-path: polygon(10% 20%, 50% 0, 100% 50%, 90% 80%, 50% 100%, 10% 80%); */
  clip-path: polygon(
    37% 0,
    63% 0,
    100% 22%,
    100% 78%,
    63% 100%,
    36% 100%,
    0 78%,
    0 21%
  );
}

.timeline-infinite ul li::after {
  animation: scaleAnimation 2s infinite;
}

.show-more-button {
  @apply p-2 bg-teal-400 text-gray rounded font-bold transition-all duration-500 inline-block;
}

.show-more-button:hover {
  @apply bg-teal-200;
}

@keyframes scaleAnimation {
  0% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.25);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}

@media screen and (max-width: 900px) {
  .timeline ul li div {
    width: 250px;
  }
  .timeline ul li:nth-child(even) div {
    left: -289px; /*250+45-6*/
  }
}

@media screen and (max-width: 600px) {
  .timeline ul li {
    margin-left: 20px;
  }

  .timeline ul li div {
    width: calc(100vw - 91px);
  }

  .timeline ul li:nth-child(even) div {
    left: 45px;
  }

  .timeline ul li:nth-child(even) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #2dd4bf transparent transparent;
  }
}
</style>
