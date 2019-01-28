<template>
  <div>
    <ChatPage />
    <Footer />
  </div>
</template>

<script>
import ChatPage from '@/components/ChatPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'chat',
  components: {
    ChatPage,
    Footer
  }
}
</script>