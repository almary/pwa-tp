<template>
  <div class="button">
    <router-link class="link" :to="{ name: 'Listing'}">
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
  /* height: 46px; */
  border: none;

  /* Primary/Base */

  outline: #f66362 1px solid;
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

  transition: all 0.2s ease;
}

button:focus {
  outline: #f66362 1px solid;
}

button:hover {
  background: #f66362;
  color: #f5f5f0;
}

@media screen and (max-width: 850px) {
  .button {
    margin-top: 0;
  }

  button {
    width: 90vw;
    align-items: center;
  }
}
</style>
