<template>
  <div class="smallCard">
    <router-link class="link" :to="{ name: 'Article', params: { id: id }}">
      <img :src="image" alt="image" />
      <h4>{{ title }}</h4>
      <Author />
    </router-link>
  </div>
</template>

<script>
import Author from "../components/Author.vue";

export default {
  props: ["title", "image", "id"],
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

.smallCard:hover img {
  opacity: 0.8;
}

img {
  width: 390px;
  height: 216px;

  object-fit: cover;

  transition: all 0.2s ease;
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
    width: 87vw;
    height: 200px;
  }
}
</style>
