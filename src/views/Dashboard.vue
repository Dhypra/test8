<template>
  <h1 style="text-align: center; font-size: 5rem">Welcome to RTSC</h1>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsStatsA from './widgets/WidgetsStatsTypeA.vue'
import WidgetsStatsD from './widgets/WidgetsStatsTypeD.vue'
import Content from '@/components/Content.vue'
import data from '@/standalone/components/data.vue'

export default {
  name: 'Dashboard',
  components: {
    Content,
    data,
  },
  data() {
    return {
      isFullScreen: false,
      heightValue: '80vh',
      tasks: data.parts
        .filter((part) => part.stockMinute < 100)
        .map((part) => part)
        .sort((a, b) => a.stockMinute - b.stockMinute),
    }
  },
  mounted() {
    // Update the date every minute

    // Event listener to track fullscreen changes
    document.addEventListener('fullscreenchange', this.checkFullScreen)
  },
  setup() {
    const progressGroupExample1 = [
      { title: 'Monday', value1: 34, value2: 78 },
      { title: 'Tuesday', value1: 56, value2: 94 },
      { title: 'Wednesday', value1: 12, value2: 67 },
      { title: 'Thursday', value1: 43, value2: 91 },
      { title: 'Friday', value1: 22, value2: 73 },
      { title: 'Saturday', value1: 53, value2: 82 },
      { title: 'Sunday', value1: 9, value2: 69 },
    ]
    const progressGroupExample2 = [
      { title: 'Male', icon: 'cil-user', value: 53 },
      { title: 'Female', icon: 'cil-user-female', value: 43 },
    ]
    const progressGroupExample3 = [
      {
        title: 'Organic Search',
        icon: 'cib-google',
        percent: 56,
        value: '191,235',
      },
      { title: 'Facebook', icon: 'cib-facebook', percent: 15, value: '51,223' },
      { title: 'Twitter', icon: 'cib-twitter', percent: 11, value: '37,564' },
      { title: 'LinkedIn', icon: 'cib-linkedin', percent: 8, value: '27,319' },
    ]
    const tableExample = []

    return {
      tableExample,
      progressGroupExample1,
      progressGroupExample2,
      progressGroupExample3,
    }
  },
  methods: {
    toggleFullScreen() {
      const doc = document.documentElement
      if (!document.fullscreenElement) {
        doc.requestFullscreen().catch((err) => {
          alert(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name} )`,
          )
        })
      } else {
        const currentHeight = parseInt(this.heightValue)
        this.heightValue = `100vh`
      }
    },

    checkFullScreen() {
      this.isFullScreen = !document.fullscreenElement
    },
  },
  beforeUnmount() {
    document.removeEventListener('fullscreenchange', this.checkFullScreen)
  },
}
</script>
