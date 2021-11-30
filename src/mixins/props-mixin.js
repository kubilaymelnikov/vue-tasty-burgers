export default {
  props: {
    type: {
      type: String,
      default: "boring",
    },
    active: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#000000",
    },
    activeColor: {
      type: String,
      default: null,
    },
    buttonStyle: {
      type: Object,
      default: () => ({
        transform: "scale(0.9)",
        width: "36px",
        height: "23px",
      }),
    },
    reversed: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
};
