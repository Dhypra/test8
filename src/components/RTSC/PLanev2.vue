<template>
  <div class="sps" style="height: 100vh">
    <div class="andon-container">
      <!-- <div class="andon-header">
        <CCard style="border-radius: 15px">
          <CListGroup
            style="background-color: #4cadab; color: white; border-radius: 15px"
            class="text-center"
          >
            <div>
              <h1 style="font-size: 8rem; font-weight: 700; margin: 0">
                STOCK PLANE
              </h1>
            </div>
          </CListGroup>
        </CCard>
      </div> -->

      <div class="grid-container">
        <CCard class="headPlane brCard">
          <div
            class="title brCard"
            style="
              background-color: #4cadab;
              height: 20vh;
              font-size: 8rem;
              font-weight: 700;
            "
          >
            STOCK P-LANE
          </div>
        </CCard>
        <!-- Stock Chart -->
        <CCard class="item1 brCard">
          <div class="title brCard">Stock Chart</div>
          <div class="content" style="width: 1px; background-color: black">
            <div class="box1"></div>
            <div class="boxGap"></div>
            <div class="box2"></div>
            <div id="chart"></div>
          </div>
        </CCard>

        <!-- Next Delivery -->
        <CCard class="item2 brCard">
          <div class="title brCard">Out P-LANE</div>
          <div class="chartCard d-flex flex-row bT">
            <CCard class="col-6 bR fC cardA">10</CCard>
            <CCard class="col-6 fC cardA">10</CCard>
          </div>
          <CCard class="cCard" className="col-12">
            <div class="row zero">
              <div className=" col-9 zero">
                <div class="title">Fill In</div>
              </div>
              <div className=" col-3 zero  ">
                <div class="title bG3">1/5</div>
              </div>
            </div>
            <div>
              <CCardBody class="p-0" style="height: 100%">
                <div
                  style="height: 18%; font-size: 4vh"
                  class="title row zero border"
                >
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
                <div
                  style="height: 18%; font-size: 4vh"
                  class="title row zero border"
                >
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
                <div
                  style="height: 18%; font-size: 4vh"
                  class="title row zero border"
                >
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
                <div
                  style="height: 18%; font-size: 4vh"
                  class="title row zero border"
                >
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
                <div
                  style="height: 18%; font-size: 4vh"
                  class="title row zero border"
                >
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
              </CCardBody>
            </div>
          </CCard>
        </CCard>

        <!-- Critical Part -->

        <CCard class="item3 brCard">
          <div class="title brCard">Next Delivery</div>

          <CCardBody className="content d-flex flex-row bT">
            <CCard class="cCard" className="col-6 bR">
              <div class="title">Rx-01</div>
              <img
                src="@/assets/icons/circle-1.png"
                alt=""
                width="50rem"
                height="50rem"
                style="position: absolute; left: 0; top: 35%"
              />
              <img
                src="@/assets/images/truck.png"
                class="sidebar-brand-narrow"
                style="position: absolute; left: 10%; top: 50%"
                width="30%"
              />
              <div
                class="row"
                style="position: absolute; bottom: 20%; left: 3%; width: 50%"
              >
                <div
                  class="col-4"
                  style="
                    font-weight: bold;
                    color: white;
                    font-size: 20px;
                    background-color: red;
                  "
                >
                  223
                </div>
                <div
                  class="col-4"
                  style="
                    font-weight: bold;
                    color: white;
                    font-size: 20px;
                    background-color: green;
                  "
                >
                  2
                </div>
                <div
                  class="col-4"
                  style="
                    font-weight: bold;
                    color: white;
                    font-size: 20px;
                    background-color: orange;
                  "
                >
                  2
                </div>
              </div>
              <div
                class="title footer bR fZ1"
                style="width: 50%; font-size: 25px"
              >
                5 ' Remain
              </div>
            </CCard>
            <CCard class="cCard" className="col-6">
              <div class="title">Rz-02</div>
              <img
                src="@/assets/icons/circle-2.png"
                alt=""
                width="50rem"
                height="50rem"
                style="position: absolute; left: 50%; top: 35%"
              />

              <img
                src="@/assets/images/truck.png"
                class="sidebar-brand-narrow"
                style="position: absolute; right: 10%; top: 50%"
                width="30%"
              />
              <div
                class="row"
                style="position: absolute; bottom: 20%; left: 53%; width: 50%"
              >
                <div
                  class="col-4"
                  style="
                    font-weight: bold;
                    color: white;
                    font-size: 20px;
                    background-color: red;
                  "
                >
                  2
                </div>
                <div
                  class="col-4"
                  style="
                    font-weight: bold;
                    color: white;
                    font-size: 20px;
                    background-color: green;
                  "
                >
                  2
                </div>
                <div
                  class="col-4"
                  style="
                    font-weight: bold;
                    color: white;
                    font-size: 20px;
                    background-color: orange;
                  "
                >
                  2
                </div>
              </div>
              <div class="title footer fZ1" style="width: 50%; font-size: 25px">
                13 ' Remain
              </div>
            </CCard>
          </CCardBody>
        </CCard>

        <!-- Critical Part -->
        <CCard class="item4 brCard">
          <div class="title brCard">Critical Part</div>
          <div
            class="content row row-cols-2 row-cols-lg-5 g-2 g-lg-3 m-0"
            style="width: 100%"
          >
            <div
              class="col cCard zero"
              style="border-radius: 5px"
              v-for="(part, index) in criticalPart"
              :key="index"
            >
              <div style="font-size: 23px" class="title">
                {{ part.part }}
              </div>
              <div style="font-size: 23px; height: 50px; padding-top: 5px">
                {{ part.stockMinute }}Min
              </div>
              <div style="font-size: 23px" class="title">
                {{ index + 10 }}
              </div>
            </div>
          </div>
        </CCard>

        <CCard class="item5 brCard">
          <div class="title brCard">Next Out P-Lane</div>
          <CCardBody className="content d-flex bT">
            <CCard class="cCard" className="col-12">
              <CCardBody className="d-flex flex-row bR" style="height: 100%">
                <CCard className="col-6 bR">
                  <div class="title">P-Lane</div>
                  <div style="font-size: 6rem">8</div>
                </CCard>
                <CCard class="cCard" className="col-6">
                  <div class="title">Counter</div>
                  <div style="font-size: 6rem">11</div>
                </CCard>
              </CCardBody>
              <div class="title footer">10 Min left</div>
            </CCard>
          </CCardBody>
        </CCard>
      </div>
    </div>
  </div>
</template>

<script>
import ApexCharts from 'apexcharts'
import '@/components/RTSC/components/rtsc.css'
import data from '@/standalone/components/data.vue'
import { CCard } from '@coreui/vue'

export default {
  name: 'spsv2',
  components: {
    CCard,
  },
  data() {
    return {
      currentTime: '',
      today: '',
      shift: '',
      heightScreen: null,
      widthScreen: null,

      criticalPart: data.parts
        .filter((part) => part.stockMinute > 10)
        .sort((a, b) => a.stockMinute - b.stockMinute)
        .slice(0, 10),
    }
  },

  mounted() {
    // Request fullscreen when the component is mounted
    this.enterFullScreen()

    // Event listener to track fullscreen changes
    document.addEventListener('fullscreenchange', this.checkFullScreen)

    const options = {
      chart: {
        type: 'bar',
        height: 280,
        width: 820,
      },
      series: [
        {
          name: 'stock',
          data: [
            { x: 'Stock <20min', y: 4, fillColor: '#f00000' },
            { x: 'Stock 20-60min', y: 1, fillColor: '#228b22' },
            { x: 'Stock >60min', y: 200, fillColor: '#ff6600' },
          ],
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          dataLabels: {
            position: 'top',
            color: 'black', // Menempatkan label data di atas batang
          },
        },
      },
      xaxis: {
        categories: ['<20min', '20-60min', '>60min'],
        labels: { style: { fontSize: '35px' } },
      },
      grid: { show: false },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '35px', // Ubah ukuran font sesuai kebutuhan Anda
          fontWeight: 'bold',
        },
      },
    }

    const chart = new ApexCharts(document.querySelector('#chart'), options)
    chart.render()
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

<style>
.andon-container {
  display: flex;
  flex-direction: column;

  color: white;
  font-family: Arial, sans-serif;
  height: 100vh;
}

.andon-header {
  text-align: center;
  font-weight: bold;
  padding: 5px 10px;
}

.content-container {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 5px;
  gap: 10px;
  justify-content: space-between;
  margin: 0;
}

.grid-container {
  display: grid;
  gap: 5px;
  padding: 10px;
  text-align: center;
}

/* .grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px;
  font-size: 30px;
} */
grid-container > CCard {
  border-radius: 10px;
}

@media (max-width: 768px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
}

.content {
  height: 32vh;
  padding: 0;
}

.headPlane {
  grid-column: 1 / span 6;
  grid-row: 1;
  border-radius: 20px;
}
.item1 {
  grid-column: 1 / span 2;
  grid-row: 2;
  border-radius: 20px;
  /* max-width: 0vw; */
}

.item2 {
  grid-column: 3;
  grid-row: 2 / span 3;
  border-radius: 20px;
}
.item3 {
  grid-column: 4 / 7;
  grid-row: 2;
  border-radius: 20px;
}
.item4 {
  grid-column: 1 / span 2;
  grid-row: 3;
  border-radius: 20px;
}
.item5 {
  grid-column: 4 / 7;
  grid-row: 3;
  border-radius: 20px;
}

.brCard {
  border-radius: 10px;
  overflow: hidden;
}

.box1 {
  font-weight: bold;
  position: absolute;
  left: 9%;
  bottom: 15%;
  height: 65%;
  width: 28%;
  background: rgba(231, 31, 31, 0.3);
}
.boxGap {
  font-weight: bold;
  position: absolute;
  left: 36%;
  bottom: 15%;
  height: 67%;
  width: 1%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
}
.box2 {
  font-weight: bold;
  position: absolute;
  left: 37%;
  bottom: 15%;
  height: 65%;
  width: 61%;
  background: rgba(138, 231, 31, 0.3);
}
</style>
