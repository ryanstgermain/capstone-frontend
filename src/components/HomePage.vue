<template>
  <div class="home">
    <div class="greeting">
      <h2 class="font">Trade your</h2>
      <h2 class="welcome-text font">|</h2>
      <h2 class="item-1 font">"Supreme"</h2>
      <h2 class="item-2 font">"Jordans"</h2>
      <h2 class="item-3 font">"Artist Merch"</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage"
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}

.greeting {
  margin-left: -180px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.welcome-text {
  margin-left: 20px;
  margin-right: 20px;
}

.item-1,
.item-2,
.item-3 {
  position: absolute;
  display: block;
  margin-top: 25px;
  margin-left: 445px;

  width: 60%;

  font-size: 24px;

  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.item-1 {
  animation-name: anim-1;
}

.item-2 {
  animation-name: anim-2;
}

.item-3 {
  animation-name: anim-3;
}

.font {
  color: #8a897c;
  font-family: "Major Mono Display";
}

@keyframes anim-1 {
  0%,
  8.3% {
    left: -100%;
    opacity: 0;
  }
  8.3%,
  25% {
    left: 25%;
    opacity: 1;
  }
  33.33%,
  100% {
    left: 110%;
    opacity: 0;
  }
}

@keyframes anim-2 {
  0%,
  33.33% {
    left: -100%;
    opacity: 0;
  }
  41.63%,
  58.29% {
    left: 25%;
    opacity: 1;
  }
  66.66%,
  100% {
    left: 110%;
    opacity: 0;
  }
}

@keyframes anim-3 {
  0%,
  66.66% {
    left: -100%;
    opacity: 0;
  }
  74.96%,
  91.62% {
    left: 25%;
    opacity: 1;
  }
  100% {
    left: 110%;
    opacity: 0;
  }
}
</style>
