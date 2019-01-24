<template>
  <div class="centered">
    <div class="login-bg">
      <span>
        <router-link to="/">
          <i class="fas fa-arrow-circle-left fa-3x back-icon"></i>
        </router-link>
      </span>
      <h1>Create an account</h1>
      <div class="login-info">
        <h2>Email</h2>
        <fish-input hint="johnsmith@gmail.com" transparent="true" type="text" class="inputs input-font"></fish-input>
        <h2>Username</h2>
        <fish-input hint="JohnSmith123" transparent="true" type="text" class="inputs input-font"></fish-input>
        <h2>Password</h2>
        <fish-input hint="Password" transparent="true" type="password" class="inputs input-font"></fish-input>
        <router-link to="/signup">
          <fish-button class="create-btn" type="basic">Create Account</fish-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-bg {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  height: 500px;
  width: 900px;
  margin-top: 130px;
  border: 3px solid #bdbbb0;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
}

.login-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.inputs {
  height: 25px;
  width: 150px;
  margin: 10px;
  transition: 0.6s;
}

.inputs:hover {
  height: 30px;
  width: 200px;
  margin: 10px;
  transition: 0.6s;
}

.create-btn {
  margin-top: 30px;
  font-family: "Thasadith";
  color: #8a897c;
  font-weight: bold;
}

.back-icon {
  margin-top: 10px;
  margin-right: 830px;
  color: #bdbbb0;
  transition: 0.3s;
}

.back-icon:hover {
  margin-top: 10px;
  margin-right: 830px;
  color: #8a897c;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transition: 0.3s;
}

.input-font {
  font-family: "Thasadith";
}

h1 {
  margin-top: -50px;
  color: #bdbbb0;
  font-family: "Quicksand";
  font-size: 40px;
}

h2 {
  font-family: "Poiret One";
  color: #8a897c;
}
</style>
