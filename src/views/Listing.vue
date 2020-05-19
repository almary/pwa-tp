<template>
  <div class="listing">
    <Header />
    <div class="content">
    <h1>All Articles</h1>
      <div class="card" v-for="post in posts" :key="post.id">
        <router-link class="link" :to="`/article/${post.id}`">
          <BigCard />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import BigCard from "@/components/BigCard.vue";

export default {
  name: "Listing",
  components: {
    Header,
    BigCard,
  },

  data() {
    return {
      posts: null,
    };
  },

  created() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((data) => {
        this.posts = data;
      });
    });
  },
};
</script>

<style scoped>
.listing {
  background: #F5F5F0;
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
