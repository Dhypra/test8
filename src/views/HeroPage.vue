<template>

  
  <video
  autoplay
    muted
    loop
    id="myVideo"
    style="
      position: absolute;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 90%;
      filter: brightness(50%)
    "
  >
    <source src="@/assets/images/video.mp4" type="video/mp4" />
  </video>
  <NavBar :userName='userId' :logout='logout'/>
  <div style="position: fixed;color: wheat;" @click="logout">

    <!-- <p>User ID: {{ userId }}</p>
    <button>Logout</button> -->
  </div>
  <HomePage/>
</template>

<script>
 
import HomePage from '@/components/HomePage.vue';
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'HeroPage',
  components: {
    HomePage,
    NavBar
  },
  computed: {
    userId() {
      return this.$route.params.id; // Mengambil ID dari URL
      console.log(this.$route.params.id)
    }
  }, methods: {
    logout() {
      localStorage.removeItem('userId'); // Hapus user ID dari local storage
      this.$router.push({ name: 'login' }); // Redirect ke halaman Login
    }
  }
}
</script>


