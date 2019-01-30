<template>
  <div>
    <div class="divider">
      <fish-divider></fish-divider>
    </div>
    <div class="selector">
      <h1 class="start">Start trading!</h1>
      <h4>Select a location below</h4>
      <router-link to="/listings">
        <fish-button class="btn-font" type="basic">View Listings</fish-button>
      </router-link> 
    </div>
    <div class="divider2">
      <fish-divider></fish-divider>
    </div>
    <div class="login-section">
      <h1>Have an account?</h1>
      <fish-input hint="Username" transparent type="text" class="inputs input-font"></fish-input>
      <fish-input hint="Password" transparent type="password" class="inputs input-font"></fish-input>
    </div>
    <div class="home-btns">
      <fish-button class="btn-font" type="basic">Login</fish-button>
      <router-link to="/signup">
        <fish-button class="btn-font" type="basic">Create Account</fish-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homelogin"
};
</script>

<style scoped>
.divider {
  margin-left: 169px;
  width: 1000px;
}

.divider2 {
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: 169px;
  width: 1000px;
}

.selector {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
}

.location-selection {
  width: 300px;
}

.login-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputs {
  height: 25px;
  width: 200px;
  margin: 10px;
  transition: 0.6s;
}

.inputs:hover {
  height: 30px;
  width: 250px;
  margin: 10px;
  transition: 0.6s;
}

.home-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.btn-font {
  font-family: "Thasadith";
  color: #8a897c;
  font-weight: bold;
  transition: 0.6s;
}

.start {
  color: #8a897c;
  font-family: "Quicksand";
  font-size: 50px;
}

.selection-font {
  font-family: "Thasadith";
  color: black;
  font-weight: bolder;
}

.input-font {
  font-family: "Thasadith";
}

h1 {
  color: #8a897c;
  font-family: "Quicksand";
  font-size: 35px;
}

h4 {
  color: #8a897c;
  font-family: "Quicksand";
  margin-top: -5px;
}
</style>
