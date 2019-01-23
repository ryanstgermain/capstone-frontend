<template>
  <div id="app">
    <div id="nav">
      <div>
        <fish-menu mode="horizontal" defaultActive="1">
          <router-link to="/">
            <h1>GrailTrader</h1>
          </router-link>
          <router-link to="/">
            <fish-option index="0" content="Home"></fish-option>
          </router-link>
          <router-link to="/signup">
            <fish-option index="1" content="Sign Up"></fish-option>
          </router-link>
          <router-link to="/about">
            <fish-option index="2" content="About"></fish-option>
          </router-link>
        </fish-menu>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
}

#app {
  background-color: #d2d7df;
}
#nav {
  -webkit-box-shadow: 0px 23px 42px -13px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 23px 42px -13px rgba(0, 0, 0, 0.62);
  box-shadow: 0px 23px 42px -13px rgba(0, 0, 0, 0.62);
}

h1 {
  color: #8a897c;
  text-align: center;
  transition: 0.3s;
}

h1:hover {
  color: #bdbbb0;
  text-align: center;
  transition: 0.3s;
}
</style>
