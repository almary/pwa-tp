<template>
  <div class="chat">
    <h3>Chat</h3>
    <div class="username-panel" v-if="username === ''">
      <form @submit="handleUsernameForm">
        <label for="username">Entrer votre pseudo: </label>
        <input type="text" v-model="inputUsername" name="username" placeholder="Visiteur">
        <button type="submit">Valider</button>
      </form>
    </div>
    <div class="messages-panel" v-if="username !== ''">
      <div class="messages">
        <Message 
          v-for="message in messages"
          :username="message.username"
          :content="message.content"
          :key="message.id"
        />
      </div>
      <form @submit="handleMessageForm">
        <input type="text" v-model="content">
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .chat {
    border: 1px red solid;
  }
</style>

<script>
import Message from './Message';

export default {
  name: 'Chat',
  components: {
    Message
  },
  data() {
    return {
      inputUsername: '',
      username: '',
      message: '',
      content: '',
      messages: [],
    }
  },
  sockets: {
    newMessage(data) {
      this.messages.push(data);
    }
  },
  methods: {
    handleMessageForm(e) {
      e.preventDefault();
      this.sendChat({ username: this.username, content: this.content, id: Math.round(Math.random() * 5000) });
      this.content = '';
    },
    handleUsernameForm(e) {
      e.preventDefault();
      this.username = this.inputUsername;
    },
    sendChat(data) {
      this.$socket.emit('sendChat', data);
    }
  }
}
</script>