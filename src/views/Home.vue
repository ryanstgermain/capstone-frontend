<template>
  <div class="home">
    <div>
      <router-link to="/">
        <div class="welcome">
          <h3>View Items</h3>
        </div>
      </router-link>
    </div>
    <br>
    <fish-divider></fish-divider>
    <br>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>

<style>
  .welcome {
    margin-top: 80px;
    height: 30px;
    width: 200px;
    background-color: #ffffff;
    border: 2px solid #8a897c;
    -webkit-box-shadow: 0px 23px 42px -13px rgba(0, 0, 0, 0.62);
    -moz-box-shadow: 0px 23px 42px -13px rgba(0, 0, 0, 0.62);
    box-shadow: 0px 23px 42px -13px rgba(0, 0, 0, 0.62);
    border-radius: 50px 20px;
    transition: 0.3s;
  }

  .welcome:hover {
    margin-top: 80px;
    height: 40px;
    width: 400px;
    background-color: #bdbbb0;
    border: 2px solid #8a897c;
    -webkit-box-shadow: 0px 23px 42px -13px rgba(0, 0, 0, 0.62);
    -moz-box-shadow: 0px 23px 42px -13px rgba(0, 0, 0, 0.62);
    box-shadow: 0px 23px 42px -13px rgba(0, 0, 0, 0.62);
    border-radius: 50px 20px;
    transition: 0.3s;
  }

  .home {
    display: flex;
    justify-content: center;
  }
  
  h3 {
    color:#8a897c;
    display: flex;
    justify-content: center;
    margin: 20px;
    text-align: center;
  }
</style>
