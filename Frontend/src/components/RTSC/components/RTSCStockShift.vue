<template>
  <CCard class="cCard cCardH">
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
          <div class="fZ2">{{ part.stockMinute }}Min</div>
          <div
            class="fZ1 cPartCard"
          >
            {{ index + 10 }}
          </div>
        </div>
      </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { CCard, CCardHeader, CCardBody, CCardText } from '@coreui/vue'
import '@/components/RTSC/components/rtsc.css'
import data from '@/standalone/components/data.vue'

export default {
  name: 'stockShift',
  components: { data, CCard, CCardHeader, CCardBody, CCardText },

  data() {
    return {
      criticalPart: data.parts
        .filter((part) => part.stockMinute > 10)
        .map((part) => part)
        .sort((a, b) => a.stockMinute - b.stockMinute)
        .slice(0, 10),
    }
  },
  // computed: {
  //   currentComponent() {
  //     return this.components[this.currentIndex]
  //   },
  // },
  // mounted() {
  //   setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.components.length
  //   }, 5000)
  // },
}
</script>
