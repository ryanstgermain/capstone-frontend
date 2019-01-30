<template>
  <div class="centered">
    <div class="divider">
      <fish-divider></fish-divider>
    </div>
    <div class="listings" v-for="listings of listings" :key="listings.id">
      <router-link to="/item">
        <img class="item-img" :src="listings.image" alt="listing-img" v-on:click="select($event)">
      </router-link>
      <div class="listing-info">
        <h3>{{listings.title}}</h3>
        <div class="location">
          <i class="fas fa-map-marker-alt fa-1x location-icon"></i>
          <h6>{{listings.location}}</h6>
        </div>
        <div class="shit">
          <div class="item-description">
            <p>{{listings.description}}</p>
          </div>
          <div class="item-btns">
            <router-link to="/edit">
              <i class="fas fa-pen-square edit-btn fa-2x"></i>
            </router-link>
            <i class="fas fa-minus-square delete-btn fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListingsList",
  data() {
    return {
      listings: []
    };
  },
  methods: {
    loadPosts() {
      return axios.get("http://localhost:3000/");
    },
    select: function(id) {
      const post = `http://localhost:3000/`;
      console.log(post);
      return axios.get(post).then(response => response.data)
    }
  },
  created() {
    this.loadPosts()
      .then(response => {
        this.listings = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
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
  margin-bottom: 100px;
}

.listings {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  height: 130px;
  width: 1000px;
  border: 3px solid #bdbbb0;
  border-radius: 25px;
  margin-bottom: 30px;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
}

.item-img {
  height: 80px;
  width: 110px;
  margin-left: 7px;
  margin-top: 4px;
  /* border-radius: 50%; */
  /* border: 1px solid #bdbbb0; */
  transition: 0.3s;
}

.item-img:hover {
  height: 90px;
  width: 120px;
  margin-left: 7px;
  margin-top: 4px;
  /* border-radius: 50%; */
  /* border: 2px solid #bdbbb0; */
  transition: 0.3s;
}

.listing-info {
  background-color: #ffffff;
  height: 90px;
  width: 830px;
  border: 2px solid #bdbbb0;
  border-radius: 25px;
  margin-left: 20px;
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
  width: 400px;
  border: 2px solid #bdbbb0;
  border-radius: 10px;
  margin-top: -52px;
  margin-left: 330px;
  overflow-y: scroll;
  /* position: fixed; */
}

.item-btns {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* align-items: flex-end; */
  float: right;
  margin-left: 5px;
  margin-top: -55px;
  /* position: fixed; */
}

.edit-btn {
  color: #bdbbb0;
  transition: 0.3s;
}

.delete-btn {
  color: #bdbbb0;
  transition: 0.3s;
}

.edit-btn:hover {
  color: #8a897c;
  transition: 0.3s;
}

.delete-btn:hover {
  color: #8a897c;
  transition: 0.3s;
}

.shit {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-top: 20px;
}

h3 {
  font-family: "Raleway Dots";
  color: #8a897c;
  width: 500px;
  font-size: 15px;
  margin-left: 5px;
  margin-top: 8px;
  overflow-y: scroll; 
}

h6 {
  font-family: "Raleway Dots";
  color: #8a897c;
  font-size: 12px;
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
