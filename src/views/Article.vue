<template>
  <div class="article" v-if="article">
    <Header />
    <div class="hero" :style="{ backgroundImage: `url('${article.imageBackground}')` }">
      <h1> {{ article.title }} </h1>
    </div>
    <article>
      <div class="article__container">
        <p class="article__content">
          {{ article.content }}
        </p>
        <div class="article__bottom">
          <Author />
          <div class="article__bottom--share">
            <img src="../assets/svg/twitter.svg" alt="twitter" />
            <img src="../assets/svg/facebook.svg" alt="facebook" />
            <img src="../assets/svg/linkedin.svg" alt="linkedin" />
          </div>
        </div>
      </div>
    </article>
    <FeaturedArticles :articles="articles"/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Author from "@/components/Author.vue";
import FeaturedArticles from "@/components/Home/FeaturedArticles.vue";
import axios from 'axios';

export default {
  name: "Article",
  components: {
    Header,
    Footer,
    Author,
    FeaturedArticles,
  },

  data() {
    return {
      article: null,
      articles: []
    };
  },

  async created() {
    this.article = await this.getArticle(this.$route.params.id);
    this.articles = await this.getArticles();
  },

  methods: {
    async getArticle(id) {
      const  { data } = await axios.get(`https://my-json-server.typicode.com/louis-genestier/typicode2/articles/${id}`)
      return data;
    },

    async getArticles() {
      const { data } = await axios.get('https://my-json-server.typicode.com/louis-genestier/typicode2/articles');
      return data;
    }
  },

  watch: {
    '$route.params.id': async function() {
      this.article = await this.getArticle(this.$route.params.id);
      window.scrollTo(0,0);
    }
  }

};
</script>

<style scoped>
.article {
  background: #f5f5f0;
  min-height: 100vh;
}

.hero {
  position: relative;
  width: 100vw;
  height: 320px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.4;
}

h1 {
  z-index: 1;

  display: block;
  width: 1000px;
  text-align: center;

  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 117.7%;
  /* identical to box height, or 47px */

  letter-spacing: -0.03em;

  color: #f5f5f0;

  margin-bottom: 40px;
}

article {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.article__container {
  max-width: 672px;
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 156%;
  /* or 28px */

  letter-spacing: -0.01em;

  /* Neutrals/Text/Primary */

  color: #434342;
}

.article__bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
}

.article__bottom--share {
  display: flex;
  flex-direction: row;
}

.article__bottom--share img {
  margin-left: 16px;
  cursor: pointer;
}

@media screen and (max-width: 850px) {
  .hero {
    height: 200px;
    align-items: center;
  }

  h1 {
    font-size: 32px;
    width: 90vw;
    margin-bottom: 0;
  }

  article {
    margin-top: 20px;
  }

  .article__container {
    width: 90vw;
  }
}
</style>
