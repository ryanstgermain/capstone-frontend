<template>
  <div class="centered">
    <div class="login-bg">
      <h1>Create an account</h1>
      <div>
        <fish-divider></fish-divider>
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
  justify-content: center;
  background-color: #ffffff;
  height: 500px;
  width: 900px;
  margin-top: 130px;
  border: 3px solid #bdbbb0;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0,0,0,0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0,0,0,0.45);
  box-shadow: 0px 0px 73px -10px rgba(0,0,0,0.45);
}

h1 {
  color: #8a897c;
  font-family: "Quicksand";
  font-size: 40px;
}
</style>
