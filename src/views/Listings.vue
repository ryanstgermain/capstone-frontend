<template>
  <div>
    <ListingsTitle/>
    <ListingsList />
    <Footer/>
  </div>
</template>

<script>
import ListingsTitle from "@/components/ListingsTitle.vue";
import ListingsList from "@/components/ListingsList.vue";
import Footer from "@/components/Footer.vue";
// import axios from "axios";
// const API_URL = "http://localhost:3000/"
// import VueAxios from "vue-axios";

export default {
  name: "Listings",
  components: {
    ListingsTitle,
    ListingsList,
    Footer
  }
  // data() {
  //   return {
  //     listings: []
  //   };
  // },
  // methods: {
  //   loadPosts() {
  //     return axios.get("http://localhost:3000/");
  //   }
  // },
  // created() {
  //   this.loadPosts()
  //     .then(response => {
  //       this.listings = response.data;
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // }
};
</script>