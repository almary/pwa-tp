<template>
  <div class="featuredArticles">
    <div class="featuredArticles__content">
      <h2>Featured Articles</h2>
      <div class="slider">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
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
};
</script>

<style scoped>
.featuredArticles {
  margin-top: calc(120px + 32px);

  width: 100vw;
  display: flex;
  justify-content: center;
}

.featuredArticles__content {
  width: 1222px;
}

.slider {
  display: flex;
  flex-direction: row;

  transform: translateX(-416px);
}
</style>
