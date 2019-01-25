<template>
  <div>
    <ListingsPage />
    <Footer />
  </div>
</template>

<script>
import ListingsPage from '@/components/ListingsPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Listings',
  components: {
    ListingsPage,
    Footer
  }
}
</script>