<template>
  <div class="author">
    <img
      class="author__picture"
      src="../assets/img/profil.jpg"
      alt="profil picture"
    />
    <div class="author__infos">
      <h5 class="author__infos--name">Hayao Miyazaki</h5>
      <h6 class="author__infos--date">May 16, 2020</h6>
    </div>
  </div>
</template>

<style scoped>
.author {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.author__picture {
  width: 35px;
  height: 35px;
  border-radius: 1000px;
  margin-right: 10px;
}

h5 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  letter-spacing: -0.03em;

  /* Neutrals/Text/Primary */

  color: #434342;
}

h6 {
  margin-top: 4px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  letter-spacing: -0.03em;

  /* Neutrals/Text/Second */

  color: #676765;
}
</style>
