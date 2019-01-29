<template>
  <div class="title">
    <router-link to="/listings">
      <i class="fas fa-arrow-circle-left fa-3x back-icon"></i>
    </router-link>
    <div class="create-title">
      <h1>Edit a listing</h1>
      <div class="divider">
        <fish-divider></fish-divider>
      </div>
    </div>
    <div class="create-bg">
      <h3>Title</h3>
      <fish-input hint="..." transparent type="text" class="inputs input-font"></fish-input>
      <fish-divider class="divider-long"></fish-divider>
      <h3>Location</h3>
      <fish-input hint="..." transparent type="text" class="inputs input-font"></fish-input>
      <fish-divider class="divider-long"></fish-divider>
      <h3>I want to trade for</h3>
      <fish-input hint="..." type="textarea" class="big-input"></fish-input>
      <fish-divider class="divider-long"></fish-divider>
      <h3>Description</h3>
      <fish-input hint="..." type="textarea" class="big-input"></fish-input>
      <fish-divider class="divider-long"></fish-divider>
      <h3>Item image</h3>
      <fish-upload action="//jsonplaceholder.typicode.com/posts/" v-model="files1"
               :withCredentials="true">
        <fish-button><i class="fa fa-upload" aria-hidden="true" style="margin-right: 5px;"></i> Upload</fish-button>
      </fish-upload>
      <div class="btn">
        <router-link to="/listings">
            <fish-button class="btn-font" type="basic">Edit Listing</fish-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit",
  
  data () {
    return {
      files1: [{name: '',url: ''}]
    }
  }
};
</script>

<style scoped>
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

.title {
  display: flex;
  flex-direction: row;
}

.divider {
  width: 180px;
  margin-left: 15px;
}

.divider-long {
  width: 1050px;
  margin-top: 30px;
  margin-left: 0px;
  margin-bottom: -10px;
}

.create-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.create-bg {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 42px;
  padding: 20px;
  margin-left: 50px;
  background-color: #ffffff;
  height: 675px;
  width: 1100px;
  border: 3px solid #bdbbb0;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 73px -10px rgba(0, 0, 0, 0.45);
}

.inputs {
  height: 25px;
  width: 350px;
  border: 1px solid #bdbbb0;
  transition: 0.6s;
}

.inputs:hover {
  height: 30px;
  width: 400px;
  border: 1px solid #8a897c;
  transition: 0.6s;
}

.big-input {
  height: 60px;
  width: 350px;
  border: 1px solid #bdbbb0;
  transition: 0.6s;
  font-family: "Thasadith";
}

.big-input:hover {
  height: 70px;
  width: 400px;
  border: 1px solid #8a897c;
  transition: 0.6s;
  font-family: "Thasadith";
}

.input-font {
  font-family: "Thasadith";
}

.btn-font {
  font-family: "Thasadith";
  color: #8a897c;
  font-weight: bold;
  transition: 0.6s;
}

.btn {
  margin-left: 470px;
}

h1 {
  color: #8a897c;
  font-family: "Quicksand";
  font-size: 30px;
  margin: 30px;
}

h3 {
  font-family: "Thasadith";
  color: #8a897c;
  font-weight: bolder;
}
</style>
