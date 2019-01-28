<template>
  <div>
    <div>
      <div class="listing-title">
        <router-link to="/listings">
          <i class="fas fa-arrow-circle-left fa-3x back-icon"></i>
        </router-link>
        <h1 class="item-title">Item title goes here</h1>
      </div>
      <div class="divider">
        <fish-divider></fish-divider>
      </div>
      <div class="item-img-center">
        <img class="item-img" src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg" alt="item-img">
      </div>
      <h5>Posted by "user"</h5>
      <div class="item-info">
        <h3>Location</h3>
        <fish-divider class="inner-divider"></fish-divider>
        <div class="location-info">
          <i class="fas fa-map-marker-alt fa-1x location-icon"></i>
          <h4>Location goes here</h4>
        </div>
        <h3>I want to trade for</h3>
        <fish-divider class="inner-divider-bigger"></fish-divider>
        <div class="wish-list">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quod labore voluptatum ipsam repellat sit blanditiis inventore corrupti harum? Quos voluptatum est iusto aut? Maxime commodi omnis consectetur praesentium velit.</p>
        </div>
      </div>
      <div class="item-page-right-side">
        <h3 class="description-title">Description</h3>
        <fish-divider class="inner-divider-bigger"></fish-divider>
        <div class="description">
          <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque provident quidem quod, exercitationem laudantium officiis! Consequuntur perspiciatis molestias magni veritatis quas consectetur, minima aspernatur, reprehenderit exercitationem, nesciunt maiores ducimus id!</p>
        </div>
        <div>
          <router-link to="/message">
            <i class="fas fa-envelope fa-4x message-icon"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Itempage"
};
</script>

<style scoped>
.listing-title {
  display: flex;
  flex-direction: row;
}

.item-title {
  color: #8a897c;
  font-family: "Quicksand";
  font-size: 30px;
  margin: 30px;
}

.divider {
  width: 450px;
  margin-left: 60px;
}

.inner-divider {
  width: 75px;
  margin-left: 10px;
  margin-top: -10px;
}

.inner-divider-bigger {
  width: 150px;
  margin-left: 10px;
  margin-top: -10px;
}

.item-img-center {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: -110px;
}

.item-img {
  height: 315px;
  width: 315px;
  /* margin-left: 170px; */
  margin-top: 20px;
  border: 2px solid #bdbbb0;
  transition: 0.3s;
}

.item-img:hover {
  height: 400px;
  width: 400px;
  /* margin-left: 170px; */
  margin-top: 25px;
  border: 3px solid #8a897c;
  transition: 0.3s;
}

.item-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 120px;
  margin-top: 30px;
  width: 300px;
  height: 320px;
  background-color: #ffffff;
  border-radius: 10%;
  border: 3px solid #bdbbb0;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
}

.location-icon {
  color: #8a897c;
  margin-left: 10px;
}

.location-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -20px;
}

.back-icon {
  color: #bdbbb0;
  transition: 0.3s;
  margin: 30px;
}

.back-icon:hover {
  color: #8a897c;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transition: 0.3s;
  margin: 30px;
}

.wish-list {
  margin-left: 10px;
  width: 275px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 5%;
  border: 2px solid #bdbbb0;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  overflow-y: scroll;
}

.item-page-right-side {
  float: right;
  margin-right: 122px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  margin-top: -320px;
  width: 1100px;
  height: 320px;
  background-color: #ffffff;
  border: 3px solid #bdbbb0;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45)
}

.description-title {
  font-family: "Raleway Dots";
  font-size: 28px;
}

.description {
  width: 900px;
  height: 200px;
  background-color: #ffffff;
  border: 2px solid #bdbbb0;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  overflow-y: scroll;
  margin: 10px;
}

.description-text {
  font-size: 20px;
  padding: 5px;
}

.message-icon {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10px;
  color: #bdbbb0;
  transition: 0.3s;
}

.message-icon:hover {
  /* display: flex;
  justify-content: flex-end;
  align-items: flex-end; */
  margin-right: 10px;
  float: right;
  color: #8a897c;
  transition: 0.3s;
}

h3 {
  font-family: "Raleway Dots";
  color: #8a897c;
  margin-left: 10px;
  margin-top: 20px;
}

h4 {
  font-family: "Thasadith";
  color: #8a897c;
  font-weight: bolder;
  margin-left: 10px;
}

h5 {
  margin-left: 150px;
  margin-top: 10px;
  margin-bottom: -20px;
  font-size: 15px;
  color: #8a897c;
  font-family: "Quicksand";
}

p {
  font-family: "Poiret One";
  font-weight: 600;
  color: #8a897c;
  margin: 5px;
}
</style>
