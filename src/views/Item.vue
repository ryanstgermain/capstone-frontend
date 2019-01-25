<template>
  <div>
    <ItemPage />
    <Footer />
  </div>
</template>

<script>
import ItemPage from '@/components/ItemPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Item',
  components: {
    ItemPage,
    Footer
  }
}
</script>