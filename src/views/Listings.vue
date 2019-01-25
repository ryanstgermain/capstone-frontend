<template>
  <div>
    <ListingsTitle />
    <ListingsList />
    <Footer />
  </div>
</template>

<script>
import ListingsTitle from '@/components/ListingsTitle.vue'
import ListingsList from '@/components/ListingsList.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Listings',
  components: {
    ListingsTitle,
    ListingsList,
    Footer
  }
}
</script>