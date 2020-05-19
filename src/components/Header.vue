<template>
  <div class="header">
    <router-link to="/"
      ><img src="../assets/svg/logo.svg" alt="logo"
    /></router-link>
    <div class="header__links">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/listing" class="link">All Articles</router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 26px 32px 26px 32px;

  /* box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14); */
}

.header__links {
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-weight: bold;
  font-size: 16px;

  letter-spacing: -0.06em;
}

.link {
  text-decoration: none;
  color: #161616;
}
</style>
