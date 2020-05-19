<template>
  <div class="button">
    <router-link class="link" to="/">
      <button>Read the article</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
}
</script>

<style scoped>
.button {
  display: inline-block;
}

button {
  display: flex;
  flex-direction: column;
  padding: 14px 44px;
  height: 46px;
  border: none;

  /* Primary/Base */

  background: #f66362;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.03em;

  color: #f5f5f0;
  
  cursor: pointer;
}

button:focus {
  outline: none;
}

.link {
  text-decoration: none;
}
</style>
