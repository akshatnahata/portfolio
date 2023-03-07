export default {
  data: () => ({
    width: 0,
  }),
  mounted() {
    this.handleResize();
    window.onresize = this.handleResize;
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
};
