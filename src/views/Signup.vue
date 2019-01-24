<template>
  <div>
    <SignupPage />
    <Footer />
  </div>
</template>

<script>
import SignupPage from '@/components/SignupPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'signup',
  components: {
    SignupPage,
    Footer
  }
}
</script>