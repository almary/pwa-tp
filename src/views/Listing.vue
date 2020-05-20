<template>
  <div class="listing">
    <Header />
    <div class="content">
      <h1>All Articles</h1>
      <div class="card" v-for="article in articles" :key="article.id">
        <router-link class="link" :to="`/article/${article.id}`">
          <BigCard 
            :title="article.title"
            :image="article.imageBackground"
            :id="article.id"
          />
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import BigCard from "@/components/BigCard.vue";
import Footer from "@/components/Footer.vue";
import axios from 'axios';

export default {
  name: "Listing",
  components: {
    Header,
    BigCard,
    Footer,
  },

  data() {
    return {
      articles: [],
    };
  },

  async created() {
    this.articles = await this.getArticles();
  },
  methods: {
    async getArticles() {
      const { data } = await axios.get('https://my-json-server.typicode.com/louis-genestier/typicode2/articles');
      return data;
    }
  }
};
</script>

<style scoped>
.listing {
  background: #f5f5f0;
  min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-bottom: 38px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 100%;
  /* identical to box height, or 32px */

  letter-spacing: -0.04em;

  /* Neutrals/Black */

  color: #161616;
}


</style>
