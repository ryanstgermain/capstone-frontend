<template>
  <div>
    <div class="footer">
      <h5>© 2019 GrailTrader</h5>
      <span class="icons">
        <i class="fab fa-instagram fa-2x icon-ig"></i>
        <i class="fab fa-linkedin-in fa-2x icon-in"></i>
        <i class="fab fa-facebook-f fa-2x icon-fb"></i>
        <i class="fab fa-twitter fa-2x icon-t"></i>
        <i class="fas fa-envelope fa-2x icon-e"></i>
        
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 123px;
  background-color: #ffffff;
  height: 70px;
  width: 100%;
  -webkit-box-shadow: 0px -1px 72px -9px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 0px -1px 72px -9px rgba(0, 0, 0, 0.52);
  box-shadow: 0px -1px 72px -9px rgba(0, 0, 0, 0.52);
  position: absolute;
  bottom: 0;
  position: fixed;
}

.icons {
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  color: #353535;
}

.icon-ig:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transition: 0.3s;
  color: #e8c80a;
}

.icon-in:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transition: 0.3s;
  color: #0077b5;
}

.icon-fb:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transition: 0.3s;
  color: #3b5998;
}

.icon-t:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transition: 0.3s;
  color: #4099ff;
}

.icon-e:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transition: 0.3s;
  color: #d34836;
}

h5 {
  display: flex;
  justify-content: center;
  align-content: flex-end;
  color: #353535;
  font-weight: 300;
}
</style>
