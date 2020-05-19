<template>
  <div class="featuredArticles">
    <div class="featuredArticles__content">
      <h2>Featured Articles</h2>
    </div>
    <div class="slider--container">
      <div class="slider">
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
  overflow: hidden;

  margin-top: calc(120px + 32px);

  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.featuredArticles__content {
  width: 1222px;
}

.slider--container {
  position: relative;
  overflow: hidden;
}

.slider--container::before {
  content: "";
  position: absolute;
  width: 173px;
  height: 351px;
  left: 0;
  top: 0;

  z-index: 1;
  background: linear-gradient(270deg, rgba(245, 245, 240, 0) 0%, #f5f5f0 100%);
}

/* show them only after 2000px */

.slider--container::after {
  content: "";
  position: absolute;
  width: 173px;
  height: 351px;
  right: 0;
  top: 0;

  z-index: 1;
  background: linear-gradient(270deg, rgba(245, 245, 240, 0) 0%, #f5f5f0 100%);
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.slider {
  display: flex;
  flex-direction: row;

  transform: translateX(-68px);

  width: 1920px;
}
</style>
