<template>
  <div>
    <HomePage />
    <HomeLogin />
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
import HomeLogin from '@/components/HomeLogin.vue'

export default {
  name: 'home',
  components: {
    HomePage,
    HomeLogin
  }
}
</script>