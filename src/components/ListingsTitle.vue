<template>
  <div>
    <div>
      <span class="create-icon">
        <router-link to="/create">
          <i class="fas fa-plus-circle fa-3x add-icon"></i>
        </router-link>
      </span>
      <h1>Listings in "Location"</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListingsTitle"
};
</script>

<style scoped>
.add-icon {
  float: left;
  margin-left: 30px;
  color: #bdbbb0;
  transition: 0.3s;
}

.add-icon:hover {
  float: left;
  margin-left: 30px;
  color: #8a897c;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transition: 0.3s;
}

h1 {
  color: #8a897c;
  font-family: "Quicksand";
  font-size: 40px;
  text-align: center;
  margin-top: 30px;
  margin-right: 60px;
}
</style>
