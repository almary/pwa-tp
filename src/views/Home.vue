<template>
  <div class="home">
    <Header/>
    <Carousel/>
    <FeaturedArticles/>
    <AllArticles/>
    <Chat/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Carousel from '@/components/Home/Carousel.vue'
import FeaturedArticles from '@/components/Home/FeaturedArticles.vue'
import AllArticles from '@/components/Home/AllArticles.vue'
import Footer from '@/components/Footer.vue'
import Chat from '@/components/Chat/Chat.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Carousel,
    FeaturedArticles,
    AllArticles,
    Footer,
    Chat,
  }
}
</script>

<style scoped>
  .home {
    background: #F5F5F0;
  }
</style>
