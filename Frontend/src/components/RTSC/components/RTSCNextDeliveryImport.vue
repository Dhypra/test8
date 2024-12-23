<template>
  <CCard class="cCard cCardH">
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
      <div class="title row zero list" style="height: 6.8rem">
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
</template>

<script>
import { CCard, CCardHeader, CCardBody, CCardText } from '@coreui/vue'
import data from '@/standalone/components/data.vue'
import Truck from '@/assets/images/truck.png'
import Circle1 from '@/assets/icons/circle-1.png'
import Circle2 from '@/assets/icons/circle-2.png'
import '@/components/RTSC/components/rtsc.css'

export default {
  name: 'nextTruckDeliveryImport',
  components: {
    Truck,
    Circle1,
    Circle2,
    CCard,
    CCardHeader,
    CCardBody,
    CCardText,
    data,
  },
  props: {
    curTruck: '',
    curTruckDelv: '',
    curTime: '',
    planTruck: '',
    planTruckDelv: '',
    planTime: '',
  },
}
</script>
