<template>
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
              STOCK PLANE
            </h1>
          </div>
        </CListGroup>
      </CCard>
    </div>

    <div class="content-container">
      <!-- Stock Chart -->
      <CCard class="content content1">
        <div class="title">Stock Chart</div>
        <CCardBody>
          <CCardText>
            <div id="chart"></div>
          </CCardText>
        </CCardBody>
      </CCard>

      <!-- Next Delivery -->
      <CCard class="content content2">
        <div class="title">Next Delivery</div>
        <CCardBody className="d-flex flex-row bT">
          <CCard class="cCard" className="col-6 bR">
            <div class="title">Rx-01</div>
            <img
              src="@/assets/icons/circle-1.png"
              alt=""
              width="50rem"
              height="50rem"
              style="position: absolute; left: 0; top: 40%"
            />
            <img
              src="@/assets/images/truck.png"
              class="sidebar-brand-narrow"
              style="position: absolute; left: 10%; top: 50%"
              width="30%"
            />
            <div class="title footer bR fZ1" style="width: 50%">5 min left</div>
          </CCard>
          <CCard class="cCard" className="col-6">
            <div class="title">Rz-02</div>
            <img
              src="@/assets/icons/circle-2.png"
              alt=""
              width="50rem"
              height="50rem"
              style="position: absolute; left: 50%; top: 40%"
            />

            <img
              src="@/assets/images/truck.png"
              class="sidebar-brand-narrow"
              style="position: absolute; right: 10%; top: 50%"
              width="30%"
            />
            <div class="title footer fZ1" style="width: 50%">10 min left</div>
          </CCard>
        </CCardBody>
      </CCard>

      <!-- Critical Part -->

      <CCard class="content content3">
        <div class="title">Critical Part</div>

        <CCardBody class="container text-center p-0">
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 m-0">
            <div
              class="col cTable cCard"
              style="border-radius: 10px"
              v-for="(part, index) in criticalPart"
              :key="index"
            >
              <div class="title fZ1">{{ part.part }}</div>
              <div class="fZ2">{{ part.stockMinute }}Min</div>
              <div class="fZ1 cPartCard">
                {{ index + 10 }}
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>

      <!-- Out PLane -->
      <CCard class="content content4">
        <div class="title">Out P-Lane</div>
        <CCardBody className="d-flex bT">
          <CCard class="cCard" className="col-6">
            <CCardBody className="d-flex flex-row bR" style="height: 100%">
              <CCard className="col-6 bR">
                <div class="title">P-Lane</div>
                <div style="font-size: 7rem">8</div>
              </CCard>
              <CCard class="cCard" className="col-6">
                <div class="title">Counter</div>
                <div style="font-size: 7rem">10</div>
              </CCard>
            </CCardBody>
            <div class="title footer" style="width: 50%">10 Min left</div>
          </CCard>
          <CCard
            class="cCard"
            className="col-6"
            style="height: 100%; background-color: red"
          >
            <div class="row zero">
              <div className=" col-9 zero">
                <div class="title">Fill In</div>
              </div>
              <div className=" col-3 zero  ">
                <div class="title bG3">1/5</div>
              </div>
            </div>
            <div style="height: 106%; overflow: hidden">
              <CCardBody class="p-0">
                <div class="title row zero border">
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
                <div class="title row zero border">
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
                <div class="title row zero border">
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
                <div class="title row zero border">
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
                <div class="title row zero border">
                  <div className="col-6 zero bG1">AIA</div>
                  <div className="col-3 zero border-left-0 bG3">10</div>
                  <div className="col-3 zero border-left-0 bG2">18</div>
                </div>
              </CCardBody>
            </div>
          </CCard>
        </CCardBody>
      </CCard>
    </div>
  </div>
</template>

<script>
import ApexCharts from 'apexcharts'
import '@/components/RTSC/components/rtsc.css'
import data from '@/standalone/components/data.vue'

export default {
  name: 'spsv2',
  components: {
    ApexCharts,
    data,
  },
  data() {
    return {
      currentTime: '',
      today: '',
      shift: '',
      heightScreen:null,
      widthScreen:null,

      criticalPart: data.parts
        .filter((part) => part.stockMinute > 10)
        .map((part) => part)
        .sort((a, b) => a.stockMinute - b.stockMinute)
        .slice(0, 10),
      underTwenty: data.parts.filter((part) => part.stockMinute < 20),
      underAHour: data.parts.filter(
        (part) => part.stockMinute > 20 && part.stockMinute < 60,
      ),
      aboveAHour: data.parts.filter((part) => part.stockMinute > 60),
    }
  },
  mounted() {
    // Request fullscreen when the component is mounted
    this.enterFullScreen()

    // Event listener to track fullscreen changes
    document.addEventListener('fullscreenchange', this.checkFullScreen)

    this.setFullHeight()
    window.addEventListener('resize', this.setFullHeight)

    // Setting Time
    this.getCurrentTime() // Initialize clock immediately
    this.getNameDay() // Initialize clock immediately
    setInterval(this.getCurrentTime, 1000) // Update clock every second
    setInterval(this.getNameDay, 1000) // Update clock every second

    // Chart
    let underTwenty = data.parts.filter((part) => part.stockMinute < 20).length
    let underAHour = data.parts.filter(
      (part) => part.stockMinute < 60 && part.stockMinute > 20,
    ).length
    let aboveAHour = data.parts.filter((part) => part.stockMinute > 60).length
    console.log(underTwenty, underAHour, aboveAHour)

    var options = {
      chart: {
        type: 'bar',
        height: this.heightScreen*0.25, // Set the height
        width: this.weidthScreen*0.9, // Set the width
      },
      series: [
        {
          name: 'stock',
          data: [
            {
              x: 'Stock <20min',
              y: underTwenty,
              fillColor: '#f00000',
              strokeColor: '#C23829',
            },
            {
              x: 'Stock 20-60min',
              y: underAHour,
              fillColor: '#228b22',
              strokeColor: '#C23829',
            },
            {
              x: 'Stock >60min',
              y: aboveAHour,
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
          barHeight: '80%',
          dataLabels: {
            enabled: false, // Enable data labels
            style: {
              fontSize: '8rem', // Change font size here
              color: 'red', // Change color if needed
            },
          },
        },
      },
      xaxis: {
        categories: ['<20min', '20-60min', '>60min'],
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
      yAxis: {
        labels: {
          style: {
            fontSize: '5rem', // Set font size for y-axis labels (if applicable)
          },
        },
        axisBorder: {
          show: true, // Hide the border line on the y-axis
        },
        axisTicks: {
          show: true, // Hide ticks on the y-axis
        },
        gridLines: {
          show: true, // Hide grid lines
        },
      },
      grid: {
        show: false, // Hide the entire grid
      },

      stroke: {
        show: true, // Hide the bar stroke if you don't want any outline
      },
    }

    var chart = new ApexCharts(document.querySelector('#chart'), options)

    chart.render()
  },
  methods: {
    // Auto Fullscreen
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

    // Get Height Monitor
    setFullHeight() {
      document.querySelector('.andon-container').style.height =
        window.innerHeight + 'px'

      document.querySelector('.content').style.height =
        window.innerHeight * 0.33 - 15 + 'px'

        this.heightScreen = window.innerHeight
        this.weidthScreen = window.innerHeight
    },

    // Setting Time
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
        '-11',
        'Desember',
      ]
      const date = new Date()
      const hour = date.getHours()
      const day = date.getDay()
      const hari = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      const now = `${days[day]},${hari}-${month}-${year}`
      this.today = now
      this.shift = hour >= 5 || hour <= 17 ? 'Day' : 'Night'
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
  font-weight: bold;
  padding: 5px 10px;
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
  margin: 0;
}

/* Konten */
.content {
  display: flex;
  /* justify-content: center;
  align-items: center; */
  background-color: #2d5baa;
  border-radius: 5px;
  flex-grow: 1;
  text-align: center;
  min-width: 150px;
  margin: 0;
}

/* Lebar Konten Sesuai Permintaan */
.content1 {
  flex: 0 0 69%; /* Lebar 80% */
}

.content2 {
  flex: 0 0 30%; /* Lebar 20% */
}

.content3 {
  flex: 0 0 54%; /* Lebar 60% */
}

.content4 {
  flex: 0 0 45%; /* Lebar 40% */
}
</style>
