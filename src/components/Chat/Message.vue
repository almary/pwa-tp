<template>
  <p class="message">
    <span class="message__author">{{ username }} :</span
    > <span class="message__content">{{ content }}</span>
  </p>
</template>

<script>
export default {
  name: "Message",
  props: ["username", "content"],
};
</script>

<style scoped>
.message {
  margin-bottom: 5px;
}

.message__author {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.01em;

  /* Primary/Base */

  color: #f66362;
}

.message__content {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.01em;

  /* Neutrals/Black */

  color: #161616;
}
</style>
