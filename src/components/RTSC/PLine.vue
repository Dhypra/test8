<template>
  <div
    style="
      border-radius: 30px;
      font-weight: bold;
      position: fixed;
      height: 50vh;
      margin: 30vh 5%;
      width: 90%;
      z-index: 80;
      color: white;
      text-align: center;
      background: rgba(0, 0, 0, 0.8);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(0, 0, 0, 0.3);
      overflow: hidden;
    "
  >
    <h1 style="font-size: 6rem">Under Construction</h1>
    <h1 style="font-size: 6rem">PJT.Real Time Stock Control</h1>
    <h1 style="font-size: 6rem">Go Live:January 2025</h1>
  </div>
  <!-- <h1 style="text-align: center; background-color: black;position: fixed;color: #ffffff;font-size: 6rem;font-weight: bolder ;z-index: 99;width: 90%;margin: 25% 5%">UNDER CONSTRUCTION</h1> -->
  <div class="sps" style="height: 100vh; overflow: hidden; filter: blur(5px)">
    <RTSCHead :area="area" class="m-2" />

    <div class="row justify-content-between" style="width: 100%; margin: 0">
      <RTSCStockChart
        :pLane="pLane"
        :counter="counter"
        class="col-lg-7 col-12 m-2"
        style="width: 70%"
      />
      <RTSCNextDelivery
        :curTruck="curTruck"
        :curTime="curTime"
        :planTruck="planTruck"
        :planTime="planTime"
        class="col-lg-4 col-12 m-2"
        style="width: 27.5%"
      />
      <RTSCCriticalPart class="col-lg-6 col-12 m-2" style="width: 55%" />
      <RTSCOutPLane
        :pLane="pLane"
        :counter="counter"
        :pLineStd="pLineStd"
        class="m-2"
        style="width: 42.5%"
      />
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
import RTSCHead from '@/components/RTSC/components/RTSCHead.vue'
import RTSCStockChart from '@/components/RTSC/components/RTSCStockChart.vue'
import RTSCNextFillIn from '@/components/RTSC/components/RTSCNextFillIn.vue'
import RTSCCriticalPart from '@/components/RTSC/components/RTSCCriticalPart.vue'
import RTSCOutVariant from '@/components/RTSC/components/RTSCOutVariant.vue'
import RTSCNextDelivery from '@/components/RTSC/components/RTSCNextDelivery.vue'
import RTSCOutPLane from '@/components/RTSC/components/RTSCOutPLane.vue'
import '@/components/RTSC/components/rtsc.css'

export default {
  name: 'pLine',
  components: {
    RTSCHead,
    RTSCStockChart,
    RTSCNextFillIn,
    RTSCCriticalPart,
    RTSCOutVariant,
    RTSCNextDelivery,
    RTSCOutPLane,
  },
  data() {
    return {
      //Head
      area: 'P-LANE',
      //conditionStock
      condStock: 2,
      condStd: 3,

      // NextTruckDelivery
      curTruck: 'Rz-01',

      curTime: '30',
      planTruck: 'Rz-02',
      planTime: '60',

      pLane: 11,
      counter: 30,
      pLineTime: 30,
    }
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
  beforeUnmount() {
    document.removeEventListener('fullscreenchange', this.checkFullScreen)
  },
}
</script>
