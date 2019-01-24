<template>
  <div>
    <div class="footer">
      <h5>© 2019 GrailTrader</h5>
      <span>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="fas fa-envelope"></i>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
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
  margin-top: 125px;
  background-color: #ffffff;
  height: 70px;
  width: 100%;
  -webkit-box-shadow: 0px -1px 72px -9px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 0px -1px 72px -9px rgba(0, 0, 0, 0.52);
  box-shadow: 0px -1px 72px -9px rgba(0, 0, 0, 0.52);
}

h5 {
  display: flex;
  justify-content: center;
  align-content: flex-end;
  color: #353535;
  font-weight: 300;
}


</style>
