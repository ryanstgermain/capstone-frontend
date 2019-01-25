<template>
  <div>
    <div class="divider">
      <fish-divider></fish-divider>
    </div>
    <div class="selector">
      <h1 class="start">Start trading!</h1>
      <h4>Select a location below</h4>
      <fish-select class="location-selection selection-font" v-model="singleSelectedValue">
        <router-link to="/listings">
          <fish-option index="0" content="Denver"></fish-option>
          <fish-option index="1" content="Colorado Springs"></fish-option>
          <fish-option index="2" content="Boulder"></fish-option>
          <fish-option index="3" content="Aurora"></fish-option>
          <fish-option index="4" content="Fort Collins"></fish-option>
          <fish-option index="5" content="Grand Junction"></fish-option>
          <fish-option index="6" content="Greeley"></fish-option>
          <fish-option index="7" content="Littleton"></fish-option>
          <fish-option index="8" content="Lakewood"></fish-option>
          <fish-option index="9" content="Golden"></fish-option>
          <fish-option index="10" content="Westminster"></fish-option>
          <fish-option index="11" content="Arvada"></fish-option>
          <fish-option index="12" content="Broomfield"></fish-option>
          <fish-option index="13" content="Thornton"></fish-option>
          <fish-option index="14" content="Castle Rock"></fish-option>
          <fish-option index="15" content="Lone Tree"></fish-option>
        </router-link>
      </fish-select>    
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
