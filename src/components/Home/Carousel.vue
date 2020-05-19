<template>
  <div>
    <main>
      <div v-if="selectedArticle == 1" class="article">
        <div class="main__illustrations">
          <img
            src="../../assets/img/image.jpg"
            alt="illustration"
            class="main__illustrations--large"
          />
          <img
            src="../../assets/img/image.jpg"
            alt="poster"
            class="main__illustrations--poster"
          />
        </div>
        <div class="main__content--container">
          <div class="main__content">
            <h1>The Meaning of Studio Ghibli's 'Spirited Away'</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
              tincidunt odio platea dolor sed sagittis vitae libero, elit.
              Mollis nibh felis facilisis imperdiet quam id mi. Sem Pharetra,
              tincidunt odio platea dolor sed sagittis vitae liber...
            </h3>
            <Author class="author" />
            <MainButton class="button" />
          </div>
          <div class="select select--one">
            <span v-on:click="selectedArticle = 1">01</span>
            <span v-on:click="selectedArticle = 2">02</span>
            <span v-on:click="selectedArticle = 3">03</span>
            <div class="timebar"></div>
          </div>
        </div>
      </div>
      <div v-if="selectedArticle == 2" class="article">
        <div class="main__illustrations">
          <img
            src="../../assets/img/image.jpg"
            alt="illustration"
            class="main__illustrations--large"
          />
          <img
            src="../../assets/img/image.jpg"
            alt="poster"
            class="main__illustrations--poster"
          />
        </div>
        <div class="main__content--container">
          <div class="main__content">
            <h1>Yo</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
              tincidunt odio platea dolor sed sagittis vitae libero, elit.
              Mollis nibh felis facilisis imperdiet quam id mi. Sem Pharetra,
              tincidunt odio platea dolor sed sagittis vitae liber...
            </h3>
            <Author class="author" />
            <MainButton class="button" />
          </div>
          <div class="select select--one">
            <span v-on:click="selectedArticle = 1">01</span>
            <span v-on:click="selectedArticle = 2">02</span>
            <span v-on:click="selectedArticle = 3">03</span>
            <div class="timebar"></div>
          </div>
        </div>
      </div>
      <div v-if="selectedArticle == 3" class="article">
        <div class="main__illustrations">
          <img
            src="../../assets/img/image.jpg"
            alt="illustration"
            class="main__illustrations--large"
          />
          <img
            src="../../assets/img/image.jpg"
            alt="poster"
            class="main__illustrations--poster"
          />
        </div>
        <div class="main__content--container">
          <div class="main__content">
            <h1>Hey</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
              tincidunt odio platea dolor sed sagittis vitae libero, elit.
              Mollis nibh felis facilisis imperdiet quam id mi. Sem Pharetra,
              tincidunt odio platea dolor sed sagittis vitae liber...
            </h3>
            <Author class="author" />
            <MainButton class="button" />
          </div>
          <div class="select select--one">
            <span v-on:click="selectedArticle = 1">01</span>
            <span v-on:click="selectedArticle = 2">02</span>
            <span v-on:click="selectedArticle = 3">03</span>
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
  name: "Carousel",
  components: {
    Author,
    MainButton,
  },

  data() {
    return {
      selectedArticle: 1,
    };
  },
};
</script>

<style scoped>
.article {
  display: flex;
  margin-top: 24px;
  align-items: center;
}

.main__content--container {
  border: red 2px solid;
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

  margin-right: 20px;

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

.timebar {
  width: 86px;
  height: 2px;

  margin-top: 4px;

  /* Neutrals/Black */

  background: #161616;
  opacity: 0.2;
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
  width: 48vw;
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
</style>
