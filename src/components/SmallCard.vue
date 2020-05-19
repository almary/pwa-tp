<template>
  <div class="smallCard">
    <router-link class="link" to="/">
      <img src="../assets/img/image.jpg" alt="image" />
      <h4>{{ msg }}</h4>
      <Author />
    </router-link>
  </div>
</template>

<script>
import Author from "../components/Author.vue";

export default {
  props: ["msg"],
  name: "SmallCard",
  components: {
    Author,
  },
};
</script>

<style scoped>
.smallCard {
  margin-right: 26px;
  width: 390px;
  cursor: pointer;
}

img {
  width: 390px;
  height: 216px;

  object-fit: cover;
}

h4 {
  margin: 10px 0 11px 0;

  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 117.7%;
  /* or 28px */

  letter-spacing: -0.03em;

  /* Neutrals/Black */

  color: #161616;
}

@media screen and (max-width: 1350px) {
  img {
    width: 315px;
  }
}

@media screen and (max-width: 1150px) {
  img {
    width: 244px;
    height: 146px;
  }
}

@media screen and (max-width: 850px) {
  .smallCard {
    width: 90vw;
    margin-right: 12px;
  }

  img {
    width: 90vw;
    height: 200px;
  }
}
</style>
