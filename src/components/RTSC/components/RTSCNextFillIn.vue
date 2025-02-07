<template>
  <CCard class="cCard cCardH">
    <div class="title">Next Fill In</div>
    <CCardBody className="d-flex flex-row bT">
      <CCard className="col-6 bR">
        <div class="title">P-Lane</div>
        <CCardBody>
          <CCardText className="fC cardA">
            {{ pLane }}
          </CCardText>
        </CCardBody>
      </CCard>
      <CCard className="col-6">
        <div class="title">Counter</div>
        <CCardBody>
          <CCardText className="fC cardA">
            {{ counter }}
          </CCardText>
        </CCardBody>
      </CCard>
    </CCardBody>
    <CCardFooter class="title footer">30 Min left </CCardFooter>
  </CCard>
</template>

<script>
import { CCard, CCardHeader, CCardBody, CCardText } from '@coreui/vue'
import data from '@/standalone/components/data.vue'
import '@/components/RTSC/components/rtsc.css'

export default {
  name: 'counterPline',
  component: { data, CCard, CCardHeader, CCardBody, CCardText },
  props: {
    pLane: '',
    counter: '',
    pLaneTime: '',
  },

  data() {
    return {
      totalTime: 10 * 60, // Total time in seconds (10 minutes)
      timeRemaining: 10 * 60, // Initialize remaining time
      timer: null,
    }
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.timeRemaining / 60)
      const seconds = this.timeRemaining % 60
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
        2,
        '0',
      )}`
    },
  },
  methods: {
    startCountdown() {
      this.timer = setInterval(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining--
        } else {
          clearInterval(this.timer)
        }
      }, 1000)
    },
  },
  mounted() {
    this.startCountdown()
  },
  beforeUnmount() {
    clearInterval(this.timer) // Clear the timer when the component is destroyed
  },
}
</script>
