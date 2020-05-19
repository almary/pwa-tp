<template>
  <div>
    <main>
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
      <div class="main__content">
        <h1>The Meaning of Studio Ghibli's 'Spirited Away'</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
          tincidunt odio platea dolor sed sagittis vitae libero, elit. Mollis
          nibh felis facilisis imperdiet quam id mi. Sem Pharetra, tincidunt
          odio platea dolor sed sagittis vitae liber...
        </h3>
        <Author class="author" />
        <MainButton class="button"/>
        <div>sélecteur</div>
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
};
</script>

<style scoped>
main {
  display: flex;
  margin-top: 24px;
  align-items: center;
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
