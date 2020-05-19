<template>
  <div class="article" v-if="post">
    <Header />
    <div class="hero">
      <h1>The Meaning of Studio Ghibli's 'Spirited Away'</h1>
    </div>
    <article>
      <div class="article__container">
        <p class="article__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue quis
          id blandit gravida sed neque venenatis. Est morbi id nisi, venenatis
          est fermentum. Eget lobortis morbi suspendisse malesuada iaculis.
          Nisi, orci enim justo vehicula urna. Ac ut faucibus netus vivamus
          mauris et convallis lobortis auctor. Ut posuere eget vulputate a,
          tellus sagittis porttitor. Odio curabitur pellentesque turpis
          elementum ac integer sit dictum nisi. Risus enim arcu natoque massa
          arcu blandit duis. Tempor lorem tempus at gravida interdum. Nibh
          accumsan pretium feugiat varius faucibus orci. Risus faucibus quis vel
          egestas senectus mauris lacinia odio. Ullamcorper viverra mauris
          tortor, pellentesque velit eget metus. Faucibus turpis egestas
          convallis tortor. Elit varius congue id adipiscing. Lacus, nibh
          ullamcorper enim, a. Pulvinar suscipit facilisis quam nec diam. Quam
          eros, et sollicitudin sed tristique nunc, sed ac. Senectus amet
          scelerisque odio mauris. Orci dolor quam sed id purus, justo massa.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue quis
          id blandit gravida sed neque venenatis. Est morbi id nisi, venenatis
          est fermentum. Eget lobortis morbi suspendisse malesuada iaculis.
          Nisi, orci enim justo vehicula urna. Ac ut faucibus netus vivamus
          mauris et convallis lobortis auctor. Ut posuere eget vulputate a,
          tellus sagittis porttitor. Odio curabitur pellentesque turpis
          elementum ac integer sit dictum nisi. Risus enim arcu natoque massa
          arcu blandit duis. Tempor lorem tempus at gravida interdum. Nibh
          accumsan pretium feugiat varius faucibus orci. Risus faucibus quis vel
          egestas senectus mauris lacinia odio. Ullamcorper viverra mauris
          tortor, pellentesque velit eget metus. Faucibus turpis egestas
          convallis tortor. Elit varius congue id adipiscing. Lacus, nibh
          ullamcorper enim, a. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Congue quis id blandit gravida sed neque venenatis.
          Est morbi id nisi, venenatis est fermentum. Eget lobortis morbi
          suspendisse malesuada iaculis. Nisi, orci enim justo vehicula urna. Ac
          ut faucibus netus vivamus mauris et convallis lobortis auctor. Ut
          posuere eget vulputate a, tellus sagittis porttitor. Odio curabitur
          pellentesque turpis elementum ac integer sit dictum nisi. Risus enim
          arcu natoque massa arcu blandit duis. Tempor lorem tempus at gravida
          interdum. Nibh accumsan pretium feugiat varius faucibus orci. Risus
          faucibus quis vel egestas senectus mauris lacinia odio. Ullamcorper
          viverra mauris tortor, pellentesque velit eget metus. Faucibus turpis
          egestas convallis tortor. Elit varius congue id adipiscing. Lacus,
          nibh ullamcorper enim, a. Pulvinar suscipit facilisis quam nec diam.
          Quam eros, et sollicitudin sed tristique nunc, sed ac. Senectus amet
          scelerisque odio mauris. Orci dolor quam sed id purus, justo massa.
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
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Author from "@/components/Author.vue";

export default {
  name: "Article",
  components: {
    Header,
    Footer,
    Author,
  },

  data() {
    return {
      post: null,
    };
  },

  created() {
    console.log("created");

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
    ).then((response) => {
      response.json().then((data) => {
        this.post = data;
        console.log(this.post);
      });
    });
  },
};
</script>

<style scoped>
.article {
  background: #f5f5f0;
  min-height: 100vh;
}

.hero {
  width: 100vw;
  height: 320px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url("../assets/img/image.jpg");

  display: flex;
  justify-content: center;
  align-items: flex-end;
}

h1 {
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
