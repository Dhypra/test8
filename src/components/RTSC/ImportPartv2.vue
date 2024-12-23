<template>
  <div class="sps">



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
              STOCK IMPORT
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
            <CCardBody className="chartCard d-flex flex-row bT">
              <CCard className="col-6 bR fC cardA">10</CCard>
              <CCard className="col-6 fC cardA">10</CCard>
            </CCardBody>
          </CCard>
          <CCardText>
            <div id="chart"></div>
          </CCardText>
        </div>
      </CCard>

      <!-- Next Delivery -->
      <CCard class="content content2">
        <div class="title">Next Delivery</div>
        <div class="title row zero border list">
          <div className="col-3 zero bG1 fZ1">IN-03</div>
          <div className="col-5 zero fZ1 bG2">31-11-2024</div>
          <div className="col-4 zero fZ1 bG2">03:00 WIB</div>
        </div>
        <div class="title">
          <img
            src="@/assets/images/truck.png"
            class="sidebar-brand-narrow"
            style="position: absolute; left: 35%; top: 45%"
            width="30%"
          />
        </div>
        <div style="position: fixed; bottom: 0; width: 100%">
          <div class="title row zero list" style="height: 4rem">
            <div className="col-3 zero border bG1">
              <h1 className="fZ1">TMC</h1>
              <h1 className="bG3 fZ1">10</h1>
            </div>
            <div className="col-3 zero border bG1">
              <h1 className="fZ1">STM</h1>
              <h1 className="bG3 fZ1">6</h1>
            </div>
            <div className="col-3 zero border bG1">
              <h1 className="fZ1">UMWT</h1>
              <h1 className="bG3 fZ1">7</h1>
            </div>
            <div className="col-3 zero border bG1">
              <h1 className="fZ1">SMC</h1>
              <h1 className="bG3 fZ1">5</h1>
            </div>
          </div>
        </div>
      </CCard>

      <!-- Critical Part -->

      <CCard class="content content3">
        <div class="title">Stock < 1 Shift</div>

        <CCardBody class="container text-center p-0">
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 m-0">
            <div
              class="col cTable cCard"
              style="border-radius: 10px"
              v-for="(part, index) in criticalPart"
              :key="index"
            >
              <div class="title fZ1">{{ part.part }}</div>
              <div  style="font-size: 2.2rem">{{ part.stockMinute }}Min</div>
              <div class="fZ1 cPartCard">
                {{ index + 10 }}
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>

      <!-- Out PLane -->
      <CCard class="content content4">
        <div class="title">Out Unpacking</div>
    <CCardBody className="d-flex flex-row bT">
      <CCard class="cCard" className="col-12">
        <CCardBody class="p-0" style="height: 13rem">
          <div class="title row p-0 m-0 border list">
            <div
              className="col-2 p-0 m-0 fZ4 bG1"    >
              P/L
            </div>
            <div
              className="col-2 p-0 m-0 fZ4 bG1"    >
              Counter
            </div>
            <div
              className="col-2 p-0 m-0 fZ4 bG1"    >
              Start
            </div>
            <div
              className="col-2 p-0 m-0 fZ4 bG1"    >
              Finish
            </div>
            <div
              className="col-2 p-0 m-0 fZ4 bG1"    >
              Duration
            </div>
            <div
              className="col-2 p-0 m-0 fZ4 bG1"    >
              Status
            </div>
          </div>

          <div class="title row p-0 m-0 border list">
            <div
              className="col-2 p-0 m-0 bor bG4 fZ5"
              
            >
              9
            </div>
            <div
              className="col-2 p-0 m-0 bor bG4 fZ5"
              
            >
              03
            </div>
            <div
              className="col-2 p-0 m-0 bor bG4 fZ5"
              
            >
              09:10
            </div>
            <div
              className="col-2 p-0 m-0 bor bG4 fZ5"
              
            >
              09:30
            </div>
            <div
              className="col-2 p-0 m-0 bor bG4 fZ5"
              
            >
              20Min
            </div>
            <div
              className="col-2 p-0 m-0 bor bG4 fZ5"
              
            >
              Complete
            </div>
          </div>

         
          <div class="title row p-0 m-0 border list">
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              11
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              07
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              11:00
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              11:10
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              10Min
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              Waiting
            </div>
          </div>
         

          <div class="title row p-0 m-0 border list">
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              9
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              10
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              09:20
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              09:30
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              30Min
            </div>
            <div
              className="col-2 p-0 m-0 bor bG3 fZ5 c1"
              
            >
              Waiting
            </div>
          </div>
        </CCardBody className="p-0 m-0">
        <div style="height: 4rem;margin: 0;padding: 0" className="p-0 m-0" class="title footer">
          <div
            className="col-4 p-0 m-0 "
          >
            Process:
          </div>
          <div
            className="col-8 p-0 m-0 "
          >
            2/12
          </div>
        </div>
      </CCard>
    </CCardBody>
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

      underTwenty: data.parts.filter((part) => part.stockMinute < 20),
      underAHour: data.parts.filter(
        (part) => part.stockMinute > 20 && part.stockMinute < 60
      ),
      aboveAHour: data.parts.filter((part) => part.stockMinute > 60),
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
              {
                x: '< 1Shift',
                y: 30,
                fillColor: '#f00000',
                strokeColor: '#C23829',
              }, 
              {
                x: '3 Days',
                y: 60,
                fillColor: '#228b22',
                strokeColor: '#C23829',
              },
              {
                x: '1 Week',
                y: 20,
                fillColor: '#ff6600',
                strokeColor: '#C23829',
                style: {
                  fontSize: '5rem', // Change font size here
                  color: '#000', // Change color if needed
                },
              },
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
          categories: ['< 1Shift', '3 Days', '1 Week'],
          labels: {
            style: {
              fontSize: '1rem', // Change the font size for x-axis labels
            },
          },
          axisBorder: {
            show: true, // Hide the border line on the x-axis
          },
          axisTicks: {
            show: true, // Hide ticks on the x-axis
          },
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
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
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
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
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
  beforeDestroy() {
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
