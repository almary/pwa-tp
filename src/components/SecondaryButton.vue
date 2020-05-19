<template>
  <div class="button">
    <router-link class="link" to="/">
      <button>View all articles</button>
    </router-link>
  </div>
</template>

<style scoped>
.button {
  margin-top: 20px;
  display: inline-block;
}

button {
  display: flex;
  flex-direction: column;
  padding: 14px 44px;
  height: 46px;
  border: none;

  /* Primary/Base */

  outline: #f66362 2px solid;
  background: none;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.03em;

  color: #f66362;

  cursor: pointer;
}

button:focus {
  outline: none;
}
</style>
