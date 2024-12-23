<template>

      <CCard class="cCard">
        <div class="title">Critical Part</div>
  
        <CCardBody class="container text-center"> Critical part </CCardBody>
      </CCard>

  </template>

<script>
import { CCard, CCardHeader, CCardBody, CCardText } from '@coreui/vue'
import '@/components/RTSC/components/rtsc.css'
import data from '@/standalone/components/data.vue'

export default {
  name: 'partCritical',
  components: { data, CCard, CCardHeader, CCardBody, CCardText },

  data() {
    return {
      criticalPart: data.parts
        .filter((part) => part.stockMinute > 60)
        .map((part) => part)
        .sort((a, b) => a.stockMinute - b.stockMinute)
        .slice(0, 9),
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