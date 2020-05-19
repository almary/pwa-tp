<template>
  <div class="chat" v-bind:class="{ hide: hideChat }">
    <div class="head" @click="hideChat = !hideChat">
      <div class="close"></div>
      <h3>Chat</h3>
    </div>
    <div class="messages">
      <Message
        v-for="message in messages"
        :username="message.username"
        :content="message.content"
        :key="message.id"
      />
    </div>
    <div class="input-panel messages-panel" v-if="username !== ''">
      <form @submit="handleMessageForm">
        <input type="text" v-model="content" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
    <div class="input-panel username-panel" v-if="username === ''">
      <form @submit="handleUsernameForm">
        <input
          type="text"
          v-model="inputUsername"
          name="username"
          placeholder="Votre pseudo"
        />
        <button type="submit">Choisir</button>
      </form>
    </div>
  </div>
</template>

<script>
import Message from "./Message";

export default {
  name: "Chat",
  components: {
    Message,
  },
  data() {
    return {
      inputUsername: "",
      username: "",
      message: "",
      content: "",
      messages: [],
      hideChat: false,
    };
  },
  sockets: {
    newMessage(data) {
      this.messages.push(data);
    },
  },
  methods: {
    handleMessageForm(e) {
      e.preventDefault();
      this.sendChat({
        username: this.username,
        content: this.content,
        id: Math.round(Math.random() * 5000),
      });
      this.content = "";
    },
    handleUsernameForm(e) {
      e.preventDefault();
      this.username = this.inputUsername;
    },
    sendChat(data) {
      this.$socket.emit("sendChat", data);
    },
  },
};
</script>

<style scoped>
.chat {
  z-index: 5;

  position: fixed;
  bottom: 0;
  right: 32px;
  width: 320px;
  height: 300px;

  background: #f5f5f0;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.13);

  transition: transform 0.2s ease;
}

.chat.hide {
  transform: translateY(252px);
}

.head {
  cursor: pointer;
}

.close {
  width: 14px;
  height: 2px;

  position: absolute;
  right: 20px;
  top: 22px;

  background: #f66362;
}

h3 {
  width: 100%;
  padding: 12px;

  background: #ebebe6;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */

  letter-spacing: -0.01em;

  /* Neutrals/Black */

  color: #161616;
}

.messages {
  overflow-wrap: break-word;
  padding: 12px;
  height: 190px;
  overflow-y: scroll;
}

.input-panel {
  position: absolute;
  bottom: 0;

  width: 100%;
  padding: 12px;

  background: #ebebe6;

  display: flex;
  flex-direction: row;
  align-items: space-between;
}

.input-panel form {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.input-panel input {
  background: #f5f5f0;
  border: 1px solid #d0d0d0;
  box-sizing: border-box;
  width: 100%;
  float: left;
  margin-right: 8px;
  padding: 6px;
}

.input-panel input::placeholder {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.01em;

  /* Neutrals/Black */

  color: #161616;
  opacity: 0.2;
}

.input-panel input {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.01em;

  /* Neutrals/Black */

  color: #161616;
}

.input-panel input:focus {
  border: #f66362 1px solid;
  outline: none;
}

button {
  cursor: pointer;

  background: #f66362;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  /* identical to box height, or 17px */

  letter-spacing: 0em;
  text-transform: uppercase;

  color: #f5f5f0;
  border: none;

  padding: 10px 6px 10px 6px;
}

button:focus {
  outline: none;
}
</style>
