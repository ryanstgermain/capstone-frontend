<template>
  <div>
    <CreatePage />
    <Footer />
  </div>
</template>

<script>
import CreatePage from '@/components/CreatePage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'create',
  components: {
    CreatePage,
    Footer
  }
}
</script>