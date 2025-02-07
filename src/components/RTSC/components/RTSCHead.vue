<template>
  <!-- judul -->
  <CCard
    style="
      width: 99%;
      text-align: left;
      margin: 0 0 10px 0;
      border-radius: 15px;
    "
  >
    <CListGroup
      style="background-color: #4cadab; color: white; border-radius: 15px"
      class="text-center"
    >
      <div
        style="
          text-align: right;
          font-weight: bold;
          align-items: center;
          font-size: 2.5rem;
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
          STOCK {{ area }}
        </h1>
      </div>
    </CListGroup>
  </CCard>
</template>

<script>
export default {
  name: 'head',
  props: ['area'],
  data() {
    return {
      currentTime: '',
      today: '',
      shift: '',
    }
  },

  methods: {
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
  mounted() {
    this.getCurrentTime() // Initialize clock immediately
    this.getNameDay() // Initialize clock immediately
    setInterval(this.getCurrentTime, 1000) // Update clock every second
    setInterval(this.getNameDay, 1000) // Update clock every second
  },
}
</script>
