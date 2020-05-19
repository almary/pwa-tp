<template>
  <div>
    <div class="allArticles__container">
      <div class="allArticles">
        <div class="AllArticles__content">
          <h2>All Articles</h2>
        </div>
        <div class="allArticlesList">
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
      </div>
      <SecondaryButton />
    </div>
  </div>
</template>

<script>
import BigCard from "@/components/BigCard.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";

export default {
  name: "AllArticles",
  components: {
    BigCard,
    SecondaryButton,
  },
};
</script>

<style scoped>
.allArticles {
  width: 1222px;
}

.allArticles__container {
  margin-top: 120px;

  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1350px) {

.allArticles {
  width: 1000px;
}

}
</style>
