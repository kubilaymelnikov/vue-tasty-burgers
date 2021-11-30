<template>
  <button
    type="button"
    class="hamburger"
    :class="[
      hamburgerModifierClass,
      { 'hamburger--active': active, 'hamburger--rounded': rounded },
    ]"
    @click.prevent="toggle"
  >
    <span class="hamburger-box" :style="buttonStyle">
      <span class="hamburger-inner" :style="layerStyle">
        <span class="hamburger-inner__before" :style="layerStyle" />
        <span class="hamburger-inner__after" :style="layerStyle" />
      </span>
    </span>
  </button>
</template>

<script>
import PropsMixins from "../mixins/props-mixin.js";

export default {
  inheritAttrs: false,
  mixins: [PropsMixins],
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
  computed: {
    layerStyle() {
      return {
        "background-color": this.active ? this.activeColor : this.color,
      };
    },
    hamburgerModifierClass() {
      return (
        `hamburger--${this.type}${this.reversed ? "-r" : ""}`
          // prevent double '-r-r' if both type suffix and 'reversed' prop are used
          .replace(/-r-r$/, "-r")
      );
    },
  },
};
</script>

<style lang="scss">
.hamburger {
  padding: 0;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent !important;
  border: 0;
  margin: 0;
  overflow: visible;
}

.hamburger:hover,
.hamburger:focus {
  opacity: 0.7;
  outline: none;
}

.hamburger::-moz-focus-inner {
  border: 0;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: block;
  position: relative;
  transform-origin: center left;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner__before,
.hamburger-inner__after {
  width: 40px;
  height: 4px;
  background-color: #000;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger.hamburger--rounded {
  .hamburger-inner,
  .hamburger-inner__before,
  .hamburger-inner__after {
    border-radius: 4px;
  }
}

.hamburger-inner__before,
.hamburger-inner__after {
  content: "";
  display: block;
}

.hamburger-inner__before {
  top: -10px;
}

.hamburger-inner__after {
  bottom: -10px;
}
</style>
