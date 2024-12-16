<template>
  <CCard class="cCard cCardH">
    <div class="title">Next Delivery</div>
    <CCardBody className="d-flex flex-row bT">
      <CCard class="cCard" className="col-6 bR">
        <div class="title" >{{ curTruck }}</div>
        <img
        src='@/assets/icons/circle-1.png'
        alt=""
                width="50rem"
                height="50rem"
                style="position: absolute; left: 0; top: 9.5rem"
              />
              <img
                src='@/assets/images/truck.png'
                class="sidebar-brand-narrow"
                style="position: absolute; left: 10%; top: 50%"
                width="30%"
                />
                <div class="title footer bR fZ1" style="width: 50%;">{{ curTime }} min left </div>
              </CCard>
              <CCard class="cCard" className="col-6">
                <div class="title" >{{planTruck}}</div>
                <img
                src='@/assets/icons/circle-2.png'
                alt=""
                width="50rem"
                height="50rem"
                style="position: absolute; left: 50%; top: 9.5rem"
                />
                
                <img
                src='@/assets/images/truck.png'
                class="sidebar-brand-narrow"
                style="position: absolute; right: 10%; top: 50%"
                width="30%"
              />
                <div class="title footer fZ1" style="width: 50%">{{planTime}} min left </div>
      </CCard>
    </CCardBody>
    <!-- <CCardFooter class="title footer ">30 Min left </CCardFooter> -->
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
  name: 'nextTruckDelivery',
  components: {
    Truck,
    Circle1,
    Circle2,
    CCard,
    CCardHeader,
    CCardBody,
    CCardText,
    data
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
