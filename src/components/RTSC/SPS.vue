<template>

  <div class="sps" style="height: 100vh; overflow: hidden;
   /* filter: blur(5px) */
   ">
    <!-- <a
    href="#/app/andon/sps"
    class="menu-right"
    > -->
    <!-- <button
    style="position: fixed; z-index: 99; right: 0; text-decoration: none"
    class="fullscreen-btn"
      v-if="!isFullScreen"
      @click="toggleFullScreen"
    >
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-maximize"
      >
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
        <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      </svg>
      <span>Fullscreen</span>
    </button> -->

      <RTSCHead :area="area" class="m-2" />
      <div class="row justify-content-between" style="width: 100%;margin: 0">
      <StockChart
        class="col-lg-7 col-12 m-2"
        style="width: 70%"
        :chartTitle="Chart"
        :pLane="pLane"
        :counter="counter"
      />
      <CounterPline
        :pLane="pLane"
        :counter="counter"
        :pLineTime="pLineTime"
        class="col-lg-4 col-12 m-2"
        style="width: 27.5%"
      />
      <RTSCCriticalPart class="col-lg-6 col-12 m-2" style="width: 60%" />
      <VariantProgress class="m-2" style="width: 37.5%" />
    </div>
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import ConditionStock from '@/components/RTSC/components/ConditionStock.vue'
import Content from '@/components/Content.vue'
import CounterPline from '@/components/RTSC/components/RTSCNextFillIn.vue'
import VariantProgress from '@/components/RTSC/components/RTSCOutVariant.vue'
import StockChart from '@/components/RTSC/components/RTSCStockChart.vue'
import Data from '@/standalone/components/data.vue'
import RTSCHead from '@/components/RTSC/components/RTSCHead.vue'
import RTSCCriticalPart from '@/components/RTSC/components/RTSCCriticalPart.vue'
import RTSCPartCritical from '@/components/RTSC/components/RTSCPartCritical.vue'
import RTSCEffect from '@/components/RTSC/components/RTSCEffect.vue'
import { chart } from 'highcharts'

export default {
  name: 'sps',
  components: {
    CounterPline,
    ConditionStock,
    Content,
    VariantProgress,
    StockChart,
    RTSCHead,
    Data,
    RTSCCriticalPart,
    RTSCPartCritical,
  },
  data() {
    return {
      // head
      area: 'SPS',
      //conditionStock
      condStock: 1,
      condStd: 60,
      // pLine
      pLane: 11,
      counter: 30,
      pLaneTime: 2,
      // variantProgress
      VariantProgress: 170,
    }
  },
  mounted() {
    // Update the date every minute

    // Event listener to track fullscreen changes
    document.addEventListener('fullscreenchange', this.checkFullScreen)
  },
  mounted() {
    // Request fullscreen when the component is mounted
    this.enterFullScreen()

    // Event listener to track fullscreen changes
    document.addEventListener('fullscreenchange', this.checkFullScreen)
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
  },
  beforeDestroy() {
    document.removeEventListener('fullscreenchange', this.checkFullScreen)
  },
}
</script>

<style scoped>
/* Apply background image to the app */
.app-background {
  background-image: url('@/assets/images/bg-blurred_06.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Header Styles */
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(152, 4, 4, 0.8);
  color: white;
  padding: 20px;
  transition: width 0.5s ease;
  width: 100%;
  margin: 0 auto;
}

.menu-header.fullscreen-mode {
  width: 100%;
}

.menu-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
}

.menu-left h2 {
  margin: 0;
  font-size: 3rem;
}

.menu-left p {
  margin: 0;
  font-size: 40px;
  color: #decdcd;
}

.menu-right {
  display: flex;
  align-items: center;
}

.fullscreen-btn {
  background-color: #910404;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 16px;
}

.fullscreen-btn svg {
  margin-right: 5px;
}

.fullscreen-btn:hover {
  background-color: #0056b3;
}

/* Most Critical Parts Section */
.critical-parts {
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  text-align: center;
}

.critical-parts h3 {
  margin-bottom: 20px;
  color: black;
  font-size: 30px;
  font-weight: bold;
}

.part-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

.part-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e6e6;
  border-radius: 8px;
  padding: 15px;
  width: 120px;
  /* Adjust width */
  height: 120px;
  /* Adjust height */
}

.part-code {
  background-color: #7f0602;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 24px;
  /* Adjust font size */
  border-radius: 5px;
}

.part-time {
  background-color: #000;
  color: white;
  padding: 5px;
  font-size: 20px;
  /* Adjust font size */
  border-radius: 5px;
  margin-top: 5px;
}
</style>
