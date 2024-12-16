<template>
   <!-- <div
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
      background: rgba(0, 0, 0, 0.80);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
overflow: hidden;
    "
  >
 
  <h1 style="font-size:6rem">Under Construction</h1>
  <h1 style="font-size:6rem">PJT.Real Time Stock Control</h1>
  <h1 style="font-size:6rem">Go Live:January 2025</h1>
  </div> -->
  <!-- <h1 style="text-align: center; background-color: black;position: fixed;color: #ffffff;font-size: 6rem;font-weight: bolder ;z-index: 99;width: 90%;margin: 25% 5%">UNDER CONSTRUCTION</h1> -->
  <div class="sps" style=" height: 100vh;
  overflow: hidden;
  /* filter: blur(5px); */
  ">
    <RTSCHead :area="area" class="m-2"/>
    
    <div class="row justify-content-between" style="width: 100%;margin: 0">
      
      <RTSCStockChartImport :pLane="pLane" :counter="counter" class="col-lg-7 col-12 m-2"style="width: 70%;"/>
      <RTSCNextDeliveryImport class="col-lg-4 col-12 m-2"style="width: 27.5%;"
      
      />
      <RTSCStockShift class="col-lg-6 col-12 m-2"style="width: 60%;"/>
      <RTSCOutUnpacking class=" m-2" style="width: 37.5%;"/>
    </div>
    <div class="area" >
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
      </div >
  </div>
</template>

<script>


import RTSCHead from '@/components/RTSC/components/RTSCHead.vue';
import RTSCStockChartImport from '@/components/RTSC/components/RTSCStockChartImport.vue';
import RTSCNextFillIn from '@/components/RTSC/components/RTSCNextFillIn.vue';
import RTSCStockShift from '@/components/RTSC/components/RTSCStockShift.vue';
import RTSCNextDeliveryImport from '@/components/RTSC/components/RTSCNextDeliveryImport.vue';
import RTSCOutUnpacking from '@/components/RTSC/components/RTSCOutUnpacking.vue';
import '@/components/RTSC/components/rtsc.css'

export default {
  name: 'pLine',
  components: {
    RTSCHead,
    RTSCStockChartImport,
    RTSCNextFillIn,
    RTSCStockShift,
    RTSCNextDeliveryImport,
    RTSCOutUnpacking
  },
  data() {
    return {
      area: 'IMPORT', 
//moduleStock
moduleTMC: 5,
moduleSTM: 10,
moduleUMWT: 8,
moduleTMV: 9,
stdModule:8,
pLane: 12,
counter: 13,
pLineStd: 2,
//nextTruck
curTruck: 'Rz-02-01',
planeTime: 60,
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

<style>
.fullscreen-btn {
  right: 0;
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
}</style>
