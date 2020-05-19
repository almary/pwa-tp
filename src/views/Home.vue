<template>
  <div class="home">
    <Header/>
    <Carousel/>
    <FeaturedArticles/>
    <AllArticles/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Carousel from '@/components/Home/Carousel.vue'
import FeaturedArticles from '@/components/Home/FeaturedArticles.vue'
import AllArticles from '@/components/Home/AllArticles.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Carousel,
    FeaturedArticles,
    AllArticles,
  }
}
</script>

<style scoped>
  .home {
    background: #F5F5F0;
  }
</style>
