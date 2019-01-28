<template>
  <div class="centered">
    <div class="chat-bg">
      <div class="chat-window">
        <div class="chat-text">
          <h5>Name:</h5>
          <p>text goes here</p>
        </div>
      </div>
      <div class="chat-controls">
        <fish-input class="chat-input" type="text" hint="..." transparent></fish-input>
        <fish-button class="send-btn" type="basic">Send</fish-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat"
};
</script>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-bg {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  height: 675px;
  width: 1100px;
  margin-top: 38px;
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
  border: 3px solid #bdbbb0;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
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
  padding: 20px;
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
