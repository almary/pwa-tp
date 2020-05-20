<template>
  <div class="home">
    <Header/>
    <Carousel
      :articles="articles"
    />
    <FeaturedArticles
      :articles="articles"
    />
    <AllArticles
      :articles="articles"
    />
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
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Header,
    Carousel,
    FeaturedArticles,
    AllArticles,
    Footer,
    Chat,
  },
  data() {
    return {
      articles: []
    }
  },
  created: async function() {
    this.articles = await this.getArticles();
  },
  methods: {
    async getArticles() {
      const { data } = await axios.get('https://my-json-server.typicode.com/louis-genestier/typicode2/articles');
      return data;
    }
  }
}
</script>

<style scoped>
  .home {
    background: #F5F5F0;
  }
</style>
