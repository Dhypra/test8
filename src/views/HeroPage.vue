<template>
  <div
    style="
      background-image: url('src/assets/images/logisplay.gif');
      background-size: cover;

      height: 100vh;
      padding: 0;
      margin: 0;
    "
  >
    <NavBar :userName="userId" :logout="logout" />
    <div style="position: fixed; color: wheat" @click="logout">
      <!-- <p>User ID: {{ userId }}</p>
    <button>Logout</button> -->
    </div>
    <HomePage />
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'HeroPage',
  components: {
    HomePage,
    NavBar,
  },
  computed: {
    userId() {
      return this.$route.params.id // Mengambil ID dari URL
      console.log(this.$route.params.id)
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('userId') // Hapus user ID dari local storage
      this.$router.push({ name: 'login' }) // Redirect ke halaman Login
    },
  },
}
</script>
