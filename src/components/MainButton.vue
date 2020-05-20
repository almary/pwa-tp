<template>
  <div class="button">
    <router-link class="link" to="/">
      <button>Read the article</button>
    </router-link>
  </div>
</template>

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

  transition: all 0.2s ease;
}

button:focus {
  outline: none;
}

button:hover {
  outline: #f66362 1px solid;
  background: none;
  color: #f66362;
}

.link {
  text-decoration: none;
}

@media screen and (max-width: 850px) {
  button {
    width: 90vw;
    align-items: center;
  }
}
</style>
