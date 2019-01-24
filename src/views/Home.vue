<template>
  <div>
    <HomePage />
    <HomeLogin />
    <Footer />
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
import HomeLogin from '@/components/HomeLogin.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    HomePage,
    HomeLogin,
    Footer
  }
}
</script>