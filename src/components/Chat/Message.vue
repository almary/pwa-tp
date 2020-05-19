<template>
  <p class="message">
    <span class="message__author">{{ username }}</span>: <span class="message__content">{{ content }}</span>
  </p>
</template>

<script>
export default {
name: 'Message',
props: ['username', 'content'],
}
</script>