<template>
  <div class="featuredArticles">
    <div class="featuredArticles__content">
      <h2>Featured Articles</h2>
      <div class="featuredArticles__arrow">
        <svg
          v-on:click="prev"
          class="featuredArticles__arrow--left"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle class="circle--fill" cx="22" cy="22" r="22" fill="#F5F5F0" />
          <circle
            class="circle--stroke"
            cx="22"
            cy="22"
            r="21"
            stroke="#F66362"
            stroke-opacity="0.4"
            stroke-width="2"
          />
          <g clip-path="url(#clip0)">
            <path
              opacity="0.8"
              d="M18.5902 20.9557L23.32 16.226C23.6209 15.925 24.1087 15.925 24.4094 16.226C24.7102 16.5268 24.7102 17.0146 24.4094 17.3153L20.2243 21.5003L24.4093 25.6852C24.7101 25.9861 24.7101 26.4738 24.4093 26.7746C24.1086 27.0755 23.6208 27.0755 23.3199 26.7746L18.5901 22.0448C18.4397 21.8944 18.3646 21.6974 18.3646 21.5003C18.3646 21.3032 18.4398 21.1061 18.5902 20.9557Z"
              fill="#F66362"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                x="27"
                y="27"
                width="11"
                height="11"
                transform="rotate(180 27 27)"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          v-on:click="next"
          class="featuredArticles__arrow--right"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle class="circle--fill" cx="22" cy="22" r="22" fill="#F5F5F0" />
          <circle
          class="circle--stroke"
            cx="22"
            cy="22"
            r="21"
            stroke="#F66362"
            stroke-opacity="0.4"
            stroke-width="2"
          />
          <g clip-path="url(#clip0)">
            <path
              opacity="0.8"
              d="M18.5902 20.9557L23.32 16.226C23.6209 15.925 24.1087 15.925 24.4094 16.226C24.7102 16.5268 24.7102 17.0146 24.4094 17.3153L20.2243 21.5003L24.4093 25.6852C24.7101 25.9861 24.7101 26.4738 24.4093 26.7746C24.1086 27.0755 23.6208 27.0755 23.3199 26.7746L18.5901 22.0448C18.4397 21.8944 18.3646 21.6974 18.3646 21.5003C18.3646 21.3032 18.4398 21.1061 18.5902 20.9557Z"
              fill="#F66362"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                x="27"
                y="27"
                width="11"
                height="11"
                transform="rotate(180 27 27)"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="slider--container">
      <div class="slider" ref="slider">
        <SmallCard 
          v-for="article in articles"
          :key="article.id"
          :title="article.title"
          :image="article.imageBackground"
          :id="article.id"
        />
        
      </div>
    </div>
  </div>
</template>

<script>
import SmallCard from "@/components/SmallCard.vue";

export default {
  name: "FeaturedArticles",
  components: {
    SmallCard,
  },
  props: ["articles"],
  data() {
    return {
      smallCardSize: 0,
      translateSlider: 0,
      numberOfFeaturedArticles: 5,
      sliderPosition: 0,
    };
  },

  mounted() {
    this.updateScreenSize();
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  methods: {
    onWindowResize: function() {
      this.updateTranslateValue();
      this.updateScreenSize();
    },

    next: function() {
      if (this.sliderPosition >= 2 && this.screenSize == "large") {
        return;
      } else if (this.sliderPosition >= 4 && this.screenSize == "mobile") {
        return;
      }
      this.sliderPosition++;
      //update smallCardSize each time in case
      this.getSmallCardSize();

      //slide
      this.$refs.slider.style.transform = `translateX(${this.translateSlider -
        this.smallCardSize}px)`;
      this.translateSlider = this.translateSlider - this.smallCardSize;
    },

    prev: function() {
      if (this.sliderPosition <= 0) {
        return;
      }
      this.sliderPosition--;
      //update smallCardSize each time in case
      this.getSmallCardSize();

      //slide
      this.$refs.slider.style.transform = `translateX(${this.translateSlider +
        this.smallCardSize}px)`;
      this.translateSlider = this.translateSlider + this.smallCardSize;
    },

    getSmallCardSize() {
      let element = this.$refs.slider.lastElementChild;
      var style = element.currentStyle || window.getComputedStyle(element);
      var width = element.offsetWidth;
      var margin = parseFloat(style.marginRight);

      this.smallCardSize = width + margin;
    },

    updateTranslateValue() {
      this.$refs.slider.style.transform = `translateX(0px)`;
      this.sliderPosition = 0;
      this.translateSlider = 0;
    },

    updateScreenSize() {
      if (window.innerWidth >= 850) {
        this.screenSize = "large";
      } else {
        this.screenSize = "mobile";
      }
    },
  },
};
</script>

<style scoped>
.featuredArticles {
  position: relative;
  overflow: hidden;

  margin-top: calc(120px + 24px);

  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.featuredArticles__content {
  width: 1222px;
  position: relative;
}

.featuredArticles__arrow {
  position: absolute;
  top: 0;
  right: 0;
}

.featuredArticles__arrow--left {
  margin-right: 10px;
  cursor: pointer;
}

.featuredArticles__arrow--right {
  transform: rotate(180deg);
  cursor: pointer;
}

.slider--container {
  position: relative;
  width: 1220px;
}

.slider--container::before {
  display: none;
}

/* show them only after 2000px */

.slider--container::after {
  display: none;
}

@media screen and (min-width: 2000px) {
  .slider--container::before {
    content: "";
    position: absolute;
    width: 173px;
    height: 351px;
    left: 0;
    top: 0;

    z-index: 1;
    background: linear-gradient(
      270deg,
      rgba(245, 245, 240, 0) 0%,
      #f5f5f0 100%
    );
  }

  .slider--container::after {
    content: "";
    position: absolute;
    width: 173px;
    height: 351px;
    right: 0;
    top: 0;

    z-index: 1;
    background: linear-gradient(
      270deg,
      rgba(245, 245, 240, 0) 0%,
      #f5f5f0 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
}

.slider {
  display: flex;
  flex-direction: row;

  transition: transform 0.3s ease-in-out;

  width: 1920px;
}

.circle--stroke {
  transition: all 0.2s ease;
}

.featuredArticles__arrow--left:hover .circle--stroke,
.featuredArticles__arrow--right:hover .circle--stroke {
  stroke-opacity: 1;
}

@media screen and (max-width: 1350px) {
  .featuredArticles__content {
    width: 1000px;
  }

  .smallCard {
    width: 315px;
  }

  .slider--container {
    width: 1000px;
  }
}

@media screen and (max-width: 1150px) {
  .featuredArticles__content {
    width: 794px;
  }

  .smallCard {
    width: 244px;
  }

  .slider--container {
    width: 794px;
  }
}

@media screen and (max-width: 850px) {
  .featuredArticles {
    margin-top: 70px;
    padding-top: 10px;
  }

  .featuredArticles__content {
    width: 90vw;
  }

  .slider--container {
    width: 90vw;
  }

  .smallCard {
    width: 87vw;
  }

  .featuredArticles__arrow {
    top: -9px;
  }
}
</style>
