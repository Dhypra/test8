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
 
  <h1 style="font-size:4rem">Under Construction</h1>
  <h1 style="font-size:4rem">PJT.Real Time Stock Control</h1>
  <h1 style="font-size:4rem">Go Live:January 2025</h1>
  </div> -->
  <div class="sps" style="height: 100vh; overflow: hidden; filter: blur(2px)">
    <h1
      style="
        text-align: center;
        background-color: black;
        position: fixed;
        color: #ffffff;
        font-size: 6rem;
        font-weight: bolder;
        z-index: 99;
        width: 90%;
        margin: 25% 5%;
      "
    >
      UNDER CONSTRUCTION
    </h1>
    <div class="andon-container">
      <div class="andon-header">
        <CCard style="border-radius: 15px">
          <CListGroup
            style="background-color: #4cadab; color: white; border-radius: 15px"
            class="text-center"
          >
            <div
              style="
                text-align: left;
                font-weight: bold;
                font-size: 1.5rem;
                color: #e0e0e0;
                position: absolute;
                top: 0;
                left: -85px;
              "
            >
              <pre>
        {{ today }}
        {{ currentTime }} WIB
        {{ shift }} Shift
      </pre
              >
            </div>

            <div>
              <h1 style="font-size: 8rem; font-weight: 700; margin: 0">
                STOCK SPS
              </h1>
            </div>
          </CListGroup>
        </CCard>
      </div>

      <div class="content-container">
        <!-- Stock Chart -->
        <CCard class="content content1">
          <div class="title">Stock Chart</div>

          <div style="width: 100%">
            <CCard style="width: 30%" class="cCard chartPline">
              <div class="title">P-Lane</div>
              <div class="chartCard d-flex flex-row bT">
                <CCard class="col-6 bR fC cardA">10</CCard>
                <CCard class="col-6 fC cardA">10</CCard>
              </div>
            </CCard>
            <CCardText>
              <div id="chart"></div>
            </CCardText>
          </div>
        </CCard>

        <!-- Next Delivery -->
        <CCard class="content content2">
          <div class="title">Next Fill In</div>
          <div class="d-flex flex-row">
            <CCard class="col-6 bR">
              <div class="title">P-Lane</div>
              <CCardBody>
                <CCardText class="fC cardA">8</CCardText>
              </CCardBody>
            </CCard>
            <CCard class="col-6">
              <div class="title">Counter</div>
              <CCardBody>
                <CCardText class="fC cardA">11</CCardText>
              </CCardBody>
            </CCard>
          </div>
          <CCardFooter class="title footer">30 Min left</CCardFooter>
        </CCard>

        <!-- Critical Part -->
        <CCard class="content content3">
          <div class="title">Critical Part</div>

          <CCardBody style="overflow: hidden" class="container text-center p-0">
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 m-0">
              <div
                class="col cTable cCard"
                style="border-radius: 10px"
                v-for="(part, index) in criticalPart"
                :key="index"
              >
                <div class="title fZ1">-</div>
                <div style="font-size: 2.2rem">-</div>
                <div class="fZ1 cPartCard">-</div>
              </div>
            </div>
          </CCardBody>
        </CCard>

        <!-- Out PLane -->
        <CCard class="content content4">
          <div class="title">Out Variant</div>
          <div class="d-flex flex-row">
            <CCard class="col-6 cCardH">
              <CCardBody>
                <CCardText class="fZ3" style="padding-top: 3rem">170</CCardText>
              </CCardBody>
            </CCard>
            <CCard class="col-6 bT">
              <div class="title">Next Variant</div>
              <div
                class="zero bZ"
                v-for="(part, index) in nextVariant"
                :key="index"
              >
                <div class="title row zero border list">
                  <div class="col-2 zero cPartCard fZ1">{{ index + 1 }}</div>
                  <div class="col-10 zero">{{ part.part }}</div>
                </div>
              </div>
            </CCard>
          </div>
        </CCard>
      </div>
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
import ApexCharts from 'apexcharts'
import '@/components/RTSC/components/rtsc.css'
import data from '@/standalone/components/data.vue'
import { CCard } from '@coreui/vue'

export default {
  name: 'spsv2',
  components: {
    CCard,
    ApexCharts,
    data,
  },
  data() {
    return {
      currentTime: '',
      today: '',
      shift: '',
      heightScreen: null,
      widthScreen: null,

      nextVariant: data.parts
        .filter((part) => part.stockMinute > 10)
        .sort((a, b) => a.stockMinute - b.stockMinute)
        .slice(0, 5),

      criticalPart: data.parts
        .filter((part) => part.stockMinute > 10)
        .sort((a, b) => a.stockMinute - b.stockMinute)
        .slice(0, 10),

      // underTwenty: data.parts.filter((part) => part.stockMinute < 20),
      // underAHour: data.parts.filter(
      //   (part) => part.stockMinute > 20 && part.stockMinute < 60,
      // ),
      // aboveAHour: data.parts.filter((part) => part.stockMinute > 60),
      underTwenty: 0,
      underAHour: 1,
      aboveAHour: 150,
    }
  },
  mounted() {
    this.enterFullScreen()
    document.addEventListener('fullscreenchange', this.checkFullScreen)

    this.setFullHeight()
    window.addEventListener('resize', this.setFullHeight)

    this.getCurrentTime()
    this.getNameDay()
    setInterval(this.getCurrentTime, 1000)
    setInterval(this.getNameDay, 1000)

    let underTwenty = this.underTwenty.length
    let underAHour = this.underAHour.length
    let aboveAHour = this.aboveAHour.length

    const options = {
      chart: {
        type: 'bar',
        height: this.heightScreen * 0.4,
        width: this.widthScreen,
      },
      series: [
        {
          name: 'stock',
          data: [
            { x: 'Stock <20min', y: 0, fillColor: '#f00000' },
            { x: 'Stock 20-60min', y: 0, fillColor: '#228b22' },
            { x: 'Stock >60min', y: 150, fillColor: '#ff6600' },
          ],
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          dataLabels: { enabled: false },
        },
      },
      xaxis: {
        categories: ['<20min', '20-60min', '>60min'],
        labels: { style: { fontSize: '1rem' } },
      },
      grid: { show: false },
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
    setFullHeight() {
      const container = document.querySelector('.andon-container')
      const height = window.innerHeight
      container.style.height = `${height}px`

      document.querySelector('.content1').style.height = `${height * 0.38}px`
      document.querySelector('.content2').style.height = `${height * 0.38}px`
      document.querySelector('.content3').style.height = `${height * 0.37}px`
      document.querySelector('.content4').style.height = `${height * 0.37}px`

      this.heightScreen = height
      this.widthScreen = height
    },
    getNameDay() {
      const days = [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu',
      ]
      const months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Augustus',
        'September',
        'Oktober',
        'November',
        'Desember',
      ]
      const date = new Date()
      const hour = date.getHours()
      const day = date.getDay()
      const hari = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      this.today = `${days[day]}, ${hari}-${months[month]}-${year}`
      this.shift = hour >= 5 && hour <= 17 ? 'Day' : 'Night'
    },
    getCurrentTime() {
      const padWithZero = (number) => (number < 10 ? '0' + number : number)
      const now = new Date()
      const hours = padWithZero(now.getHours())
      const minutes = padWithZero(now.getMinutes())
      const seconds = padWithZero(now.getSeconds())

      this.currentTime = `${hours}:${minutes}:${seconds}`
    },
  },
  beforeUnmount() {
    document.removeEventListener('fullscreenchange', this.checkFullScreen)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setFullHeight)
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
  overflow: hidden;
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
  padding: 10px;
  gap: 10px;
  justify-content: space-between;
  margin: 0;
}

.content {
  display: flex;

  border-radius: 10px;
  flex-grow: 1;
  text-align: center;
  min-width: 150px;
  margin: 0;
  overflow: hidden;
}

.content1 {
  flex: 0 0 69%;
}

.content2 {
  flex: 0 0 30%;
}

.content3 {
  flex: 0 0 54%;
}

.content4 {
  flex: 0 0 45%;
}
</style>
