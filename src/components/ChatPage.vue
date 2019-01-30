<template>
  <div>
    <router-link to="/item">
      <i class="fas fa-arrow-circle-left fa-3x back-icon"></i>
    </router-link>
    <div class="centered">
      <div class="chat-bg">
        <div class="chat-window">
            <div class="chat-text" v-for="(msg, index) in messages" :key="index">
              <h5>{{ msg.name }}</h5>
              <p>{{ msg.message }}</p>
            </div>
            <div class="chat-controls">
            <form @submit.prevent="sendMessage">
              <fish-input class="chat-input" type="text" hint="..." transparent v-model="message"></fish-input>
              <div class="button">
                <fish-button class="send-btn" type="Submit">Send</fish-button>
              </div>
            </form>    
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"

export default {
  name: "chat",
  data () {
    return {
      message: "",
      name: "Ryan:",
      messages: [{message: ""}],
      socket: io.connect("http://localhost:3000/")
    }
  },
  methods: {
    sendMessage (e) {
      e.preventDefault()
      this.socket.emit("SEND_MESSAGE", {
        message: this.message,
        name: this.name
      })
      this.message = ""
    }
  },
  mounted () {
    this.socket.on("MESSAGE", (data) => {
      this.messages = [...this.messages, data]
    })
  }
};
</script>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -62px;
}

.button {
  float: right;
  /* display: flex;
  justify-content: flex-end;
  align-items: flex-end; */
}

.chat-bg {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  height: 675px;
  width: 1100px;
  border: 3px solid #bdbbb0;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
}

.chat-window {
  background-color: #ffffff;
  height: 600px;
  width: 1000px;
  margin-top: 13px;
  border: 3px solid #bdbbb0;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  overflow-y: scroll;
}

.chat-controls {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  height: 35px;
  width: 1000px;
  margin-top: 10px;
  margin-bottom: 130px;
  border: 3px solid #bdbbb0;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  position: fixed;
  position: absolute;
  bottom: 0;
}

.chat-input {
  width: 930px;
  margin-left: 5px;
  font-family: "Thasadith";
}

.send-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 50px;
  font-family: "Thasadith";
  color: #8a897c;
  font-weight: bold;
}

.chat-text {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 10px;
}

.back-icon {
  color: #bdbbb0;
  transition: 0.3s;
  margin: 30px;
}

.back-icon:hover {
  color: #8a897c;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transition: 0.3s;
  margin: 30px;
}

h5 {
  font-weight: 300;
  color: #353535;
}

p {
  margin-left: 10px;
  font-family: "Thasadith";
  color: #353535;
}
</style>
