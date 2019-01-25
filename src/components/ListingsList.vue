<template>
  <div class="centered">
    <div class="divider">
      <fish-divider></fish-divider>
    </div>
    <div class="listings">
      <router-link to="/item">
        <img class="item-img" src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg" alt="listing-img">
      </router-link>
      <div class="listing-info">
        <h2>Item title goes here</h2>
        <div class="location">
          <i class="fas fa-map-marker-alt fa-1x location-icon"></i>
          <h4>Location goes here</h4>
        </div>
        <div class="item-description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae similique ab ipsa labore accusantium maiores asperiores, facere recusandae ducimus cumque, obcaecati velit aspernatur iste dignissimos ex vero beatae optio!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListingsList"
};
</script>

<style scoped>
.divider {
  width: 1000px;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
}

.listings {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  height: 100px;
  width: 1000px;
  border: 3px solid #bdbbb0;
  border-radius: 25px;
  margin-bottom: 10px;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
}

.item-img {
  height: 80px;
  width: 80px;
  margin-left: 7px;
  margin-top: 4px;
  border-radius: 50%;
  border: 1px solid #bdbbb0;
  transition: 0.3s;
}

.item-img:hover {
  height: 90px;
  width: 90px;
  margin-left: 7px;
  margin-top: 4px;
  border-radius: 50%;
  border: 2px solid #bdbbb0;
  transition: 0.3s;
}

.listing-info {
  background-color: #ffffff;
  height: 75px;
  width: 880px;
  border: 2px solid #bdbbb0;
  border-radius: 25px;
  margin-left: 7px;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.75);
}

.location-icon {
  color: #8a897c;
}

.location {
  margin-left: 5px;
  margin-top: -15px;
}

.item-description {
  background-color: #ffffff;
  height: 60px;
  width: 500px;
  border: 2px solid #bdbbb0;
  border-radius: 10px;
  margin-top: -52px;
  margin-left: 360px;
  overflow-y: scroll;
}

h2 {
  font-family: "Raleway Dots";
  color: #8a897c;
  margin-left: 5px;
  margin-top: 8px;
}

h4 {
  font-family: "Raleway Dots";
  color: #8a897c;
  margin-left: 15px;
  margin-top: -20px;
}

p {
  font-family: "Poiret One";
  font-weight: 600;
  color: #8a897c;
  margin: 5px;
}
</style>
