<template>
  <div id="app">
    <div id="nav">
      <div>
        <fish-menu mode="horizontal" defaultActive="1">
          <router-link to="/">
            <img  class="gt-logo" src="../public/logo_transparent.png" alt="logo">
          </router-link>
          <div class="nav-right nav-btns">
            <router-link to="/">
              <fish-option class="nav-font" index="0" content="Home -"></fish-option>
            </router-link>
            <router-link to="/signup">
              <fish-option class="nav-font" index="1" content="Sign Up -"></fish-option>
            </router-link>
            <router-link to="/about">
              <fish-option class="nav-font" index="2" content="About -"></fish-option>
            </router-link>
          </div>
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

.font-fam {
  font-family: "Major Mono Display", monospace;
  font-family: "Poiret One", cursive;
  font-family: "Quicksand", sans-serif;
  font-family: "Raleway Dots", cursive;
  font-family: "Thasadith", sans-serif;
}

#app {
  /* height: 400%; */
  background-color: #d2d7df;
  background: linear-gradient(0deg, #d2d7df, #ffffff);
  background-size: 400% 400%;
  margin-bottom: -30px;

  -webkit-animation: AnimationName 10s ease infinite;
  -moz-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;
}

#nav {
  -webkit-box-shadow: 0px 6px 59px -28px rgba(53, 53, 53, 1);
  -moz-box-shadow: 0px 6px 59px -28px rgba(53, 53, 53, 1);
  box-shadow: 0px 6px 59px -28px rgba(53, 53, 53, 1);
}

.nav-font {
  font-family: "Thasadith";
  font-size: 17px;
  font-weight: 100;
}

.nav-font:hover {
  font-family: "Thasadith";
  font-size: 17px;
  font-weight: 100;
  background-color: aqua;
}

.nav-btns {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.nav-right {
  margin-left: 1460px;
}

.gt-logo {
  height: 120px;
  width: 120px;
  margin-left: 5px;
  margin-top: 5px;
  transition: 0.3s;
  border: 1px solid #8a897c;
  border-radius: 30%;
  background-color: #bdbbb0;
}

.gt-logo:hover {
  height: 110px;
  width: 110px;
  margin-left: 10px;
  margin-top: 10px;
  transition: 0.3s;
  border: 2px solid #353535;
  border-radius: 43%;
  background-color: #8a897c;
  -webkit-box-shadow: 0px 6px 59px -28px rgba(53, 53, 53, 1);
  -moz-box-shadow: 0px 6px 59px -28px rgba(53, 53, 53, 1);
  box-shadow: 0px 6px 59px -28px rgba(53, 53, 53, 1);
}

@-webkit-keyframes AnimationName {
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
}
@keyframes AnimationName {
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
}
</style>
