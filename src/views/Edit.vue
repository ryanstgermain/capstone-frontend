<template>
  <div>
    <EditPage />
    <Footer />
  </div>
</template>

<script>
import EditPage from '@/components/EditPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'edit',
  components: {
    EditPage,
    Footer
  }
}
</script>