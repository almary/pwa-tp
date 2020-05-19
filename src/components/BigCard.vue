<template>
  <div class="bigCard">
    <img :src="image" alt="image" />
    <div class="bigCard__content">
      <h4>{{ title }}</h4>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
        tincidunt odio platea dolor sed sagittis vitae libero, elit. Mollis nibh
        felis facilisis imperdiet quam id mi. Sem Pharetra, tincidunt odio
        platea dolor sed sagittis vitae liber elit. Mollis nibh felis facilisis
        imperdiet quam id mi.
      </h5>
      <Author class="author" />
      <MainButton 
        :id="id"
      />
    </div>
  </div>
</template>

<script>
import Author from "@/components/Author.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  name: "BigCard",
  components: {
    Author,
    MainButton,
  },
  props: ["title", "image", "id"],
};
</script>

<style scoped>
.bigCard {
  max-width: 1180px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 48px;
}

img {
  width: 593px;
  height: 334px;
}

.bigCard__content {
  margin-left: 32px;
}

h4 {
  margin-bottom: 17px;

  max-width: 555px;

  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 117.7%;
  /* or 38px */

  letter-spacing: -0.03em;

  /* Neutrals/Black */

  color: #161616;
}

h5 {
  margin-bottom: 22px;

  width: 480px;

  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.01em;

  /* Neutrals/Text/Primary */

  color: #434342;
}

.author {
  margin-bottom: 27px;
}
</style>
