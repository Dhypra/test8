<template>
  <div class="andon-container">
    <div class="andon-header">STOCK SPS</div>
    <div class="content-container">
      <div class="content content1">{{ FullScreen }}</div>
      <div class="content content2">Content 2</div>
      <div class="content content3">Content 3</div>
      <div class="content content4">Conten 4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'spsv2',
  data() {
    return {
      FullScreen: null,
    }
  },
  mounted() {
    // Request fullscreen when the component is mounted
    this.enterFullScreen()

    // Event listener to track fullscreen changes
    document.addEventListener('fullscreenchange', this.checkFullScreen)

    this.setFullHeight()
    window.addEventListener('resize', this.setFullHeight)
  },
  methods: {
    enterFullScreen() {
      const doc = document.documentElement
      if (!document.fullscreenElement) {
        doc.requestFullscreen().catch((err) => {
          alert(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
          )
        })
      }
    },
    checkFullScreen() {
      this.isFullScreen = !document.fullscreenElement
    },
    setFullHeight() {
      // Menyesuaikan tinggi elemen dengan tinggi layar
      document.querySelector('.andon-container').style.height =
        window.innerHeight + 'px'
        
        this.FullScreen = window.innerHeight + 'px '+'x '+window.innerWidth+ 'px'
    },
  },
  beforeDestroy() {
    document.removeEventListener('fullscreenchange', this.checkFullScreen)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setFullHeight)
  },
}
</script>

<style>
/* Container Utama */
.andon-container {
  display: flex;
  flex-direction: column;
  background-color: #366ecb;
  color: white;
  font-family: Arial, sans-serif;
  height: 100vh; /* Backup: Tinggi default fullscreen */
  overflow: hidden;
}

/* Header */
.andon-header {
  text-align: center;
  font-size: 5em;
  font-weight: bold;
  padding: 10px;
  background-color: #2d5baa;
}

/* Container Konten */
.content-container {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 10px;
  gap: 10px;
  justify-content: space-between;
}

/* Konten */
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d5baa;
  border-radius: 5px;
  font-size: 1.5em;
  flex-grow: 1;
  text-align: center;
  min-width: 150px;
}

/* Lebar Konten Sesuai Permintaan */
.content1 {
  flex: 0 0 69%; /* Lebar 80% */
}

.content2 {
  flex: 0 0 30%; /* Lebar 20% */
}

.content3 {
  flex: 0 0 59%; /* Lebar 60% */
}

.content4 {
  flex: 0 0 40%; /* Lebar 40% */
}
</style>
