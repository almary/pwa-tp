<template>
  <div>
    <main>
      <div v-show="selectedArticle == 1" class="article">
        <div class="main__illustrations">
            <img
              v-show="selectedArticle == 1"
              :src="articles[0].imageBackground"
              alt="illustration"
              class="main__illustrations--large"
            />
            <img
              v-show="selectedArticle == 1"
              :src="articles[0].image"
              alt="poster"
              class="main__illustrations--poster"
            />
        </div>
        <div class="main__content--container">
          <div class="main__content">
            <h1>{{ articles[0].title }}</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
              tincidunt odio platea dolor sed sagittis vitae libero, elit.
              Mollis nibh felis facilisis imperdiet quam id mi. Sem Pharetra,
              tincidunt odio platea dolor sed sagittis vitae liber...
            </h3>
            <Author class="author" />
            <MainButton
              class="button"
              :id="articles[0].id"
            />
          </div>
          <div class="select select--one">
            <span
              class="select--selected"
              v-on:click="
                selectedArticle = 1;
                clearTimerInterval();
              "
              >01</span
            >
            <span
              v-on:click="
                selectedArticle = 2;
                clearTimerInterval();
              "
              >02</span
            >
            <span
              v-on:click="
                selectedArticle = 3;
                clearTimerInterval();
              "
              >03</span
            >
            <div class="timebar--fill" ref="timebarFill"></div>
            <div class="timebar"></div>
          </div>
        </div>
      </div>
      <div v-show="selectedArticle == 2" class="article">
        <div class="main__illustrations">
            <img
              v-show="selectedArticle == 2"
              :src="articles[1].imageBackground"
              alt="illustration"
              class="main__illustrations--large"
            />
            <img
              v-show="selectedArticle == 2"
              :src="articles[1].image"
              alt="poster"
              class="main__illustrations--poster"
            />
        </div>
        <div class="main__content--container">
          <div class="main__content">
            <h1>{{ articles[1].title }}</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
              tincidunt odio platea dolor sed sagittis vitae libero, elit.
              Mollis nibh felis facilisis imperdiet quam id mi. Sem Pharetra,
              tincidunt odio platea dolor sed sagittis vitae liber...
            </h3>
            <Author class="author" />
            <MainButton
              class="button"
              :id="articles[1].id"
            />
          </div>
          <div class="select select--one">
            <span
              v-on:click="
                selectedArticle = 1;
                clearTimerInterval();
              "
              >01</span
            >
            <span
              class="select--selected"
              v-on:click="
                selectedArticle = 2;
                clearTimerInterval();
              "
              >02</span
            >
            <span
              v-on:click="
                selectedArticle = 3;
                clearTimerInterval();
              "
              >03</span
            >
            <div class="timebar--fill" ref="timebarFill"></div>
            <div class="timebar"></div>
          </div>
        </div>
      </div>
      <div v-show="selectedArticle == 3" class="article">
        <div class="main__illustrations">
            <img
              v-show="selectedArticle == 3"
              :src="articles[2].imageBackground"
              alt="illustration"
              class="main__illustrations--large"
            />
            <img
              v-show="selectedArticle == 3"
              :src="articles[2].image"
              alt="poster"
              class="main__illustrations--poster"
            />
        </div>
        <div class="main__content--container">
          <div class="main__content">
            <h1>{{ articles[2].title }}</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
              tincidunt odio platea dolor sed sagittis vitae libero, elit.
              Mollis nibh felis facilisis imperdiet quam id mi. Sem Pharetra,
              tincidunt odio platea dolor sed sagittis vitae liber...
            </h3>
            <Author class="author" />
            <MainButton 
              class="button"
              :id="articles[2].id"
            />
          </div>
          <div class="select select--one">
            <span
              v-on:click="
                selectedArticle = 1;
                clearTimerInterval();
              "
              >01</span
            >
            <span
              v-on:click="
                selectedArticle = 2;
                clearTimerInterval();
              "
              >02</span
            >
            <span
              class="select--selected"
              v-on:click="
                selectedArticle = 3;
                clearTimerInterval();
              "
              >03</span
            >
            <div class="timebar--fill" ref="timebarFill"></div>
            <div class="timebar"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Author from "@/components/Author.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  props: ["articles"],
  name: "Carousel",
  components: {
    Author,
    MainButton,
  },

  data() {
    return {
      selectedArticle: 1,
      totalNumberOfArticles: 3,
      myTimer: null,
    };
  },

  mounted() {
    this.setupTimerInterval();
  },

  methods: {
    setupTimerInterval: function() {
      this.myTimer = setInterval(() => {
        if (this.selectedArticle == this.totalNumberOfArticles) {
          this.selectedArticle = 1;
          return;
        } else {
          this.selectedArticle++;
        }
      }, 5000);
    },

    clearTimerInterval: function() {
      clearInterval(this.myTimer);
      this.setupTimerInterval();
    },
  },
};
</script>

<style scoped>
/* main {
  display: flex;
  justify-content: center;
} */

.article {
  display: flex;
  margin-top: 24px;
  align-items: center;
  /* max-width: 1300px; */
}

.main__content--container {
  position: relative;
  height: 466px;
  display: flex;
  align-items: center;
}

.select {
  margin-left: 32px;
  position: absolute;
  bottom: 0;
}

.select span {
  cursor: pointer;

  padding: 10px;

  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 117.7%;
  /* or 16px */

  letter-spacing: -0.03em;

  color: #000000;

  opacity: 0.2;
}

.select .select--selected {
  font-size: 16px;
  line-height: 117.7%;
  /* identical to box height, or 19px */

  letter-spacing: -0.03em;

  /* Primary/Base */

  color: #f66362;
  opacity: 0.8;
}

.timebar {
  width: 108px;
  height: 2px;

  margin-top: 8px;

  /* Neutrals/Black */

  background: #161616;
  opacity: 0.2;
}

.timebar--fill {
  width: 108px;
  height: 2px;
  position: absolute;
  background: #f66362;
  bottom: 0;
  transform-origin: left;

  animation: timebarFilled 5s linear infinite;
}

@keyframes timebarFilled {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

img {
  object-fit: cover;
}

.main__content {
  margin-left: 32px;
}

.main__illustrations {
  position: relative;
}

.main__illustrations--large {
  height: 466px;
  width: 49vw;
}

.main__illustrations--poster {
  position: absolute;
  right: 32px;
  bottom: -32px;
  width: 291px;
  height: 396px;
}

h1 {
  margin-bottom: 18px;

  width: 555px;

  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 120%;

  letter-spacing: -0.03em;

  /* Neutrals/Black */

  color: #161616;
}

h3 {
  margin-bottom: 18px;

  width: 437px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;

  letter-spacing: -0.01em;

  /* Neutrals/Text/Primary */

  color: #434342;
}

.author {
  margin-bottom: 34px;
}

.button {
  margin-bottom: 50px;
}

/* transitions */

/* .slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.86,0,0.07,1);;
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: scaleX(0);
  transform-origin: left;
}

.slide-bottom-enter-active {
  transition: all 0.6s ease;
}
.slide-bottom-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-bottom-enter, .slide-bottom-leave-to{
  transform: scaleY(0);
  transform-origin: bottom;
} */
</style>
