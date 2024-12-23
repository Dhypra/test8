<template>
  <CCard class="cCard cCardH">
    <div class="title">Out Variant</div>
    <CCardBody className="d-flex flex-row">
      <CCard className="col-6 cCardH">
        <CCardBody>
          <CCardText className="fZ3" style="padding-top: 3rem"> 170 </CCardText>
        </CCardBody>
      </CCard>
      <CCard class="cCard" className="col-6 bT">
        <div class="title">Next Variant</div>
        <CCardBody className="zero bZ"  v-for="(part, index) in criticalPart"
        :key="index">
          <div class="title row zero border list">
            <div className="col-2 zero  cPartCard ">{{ index + 1 }}</div>
            <div className="col-10 zero ">{{ part.part }}</div>
          </div>
          
        </CCardBody>
      </CCard>
    </CCardBody>
  </CCard>
</template>

<script>
import { CCard } from '@coreui/vue'
import data from '@/standalone/components/data.vue'

export default {
  name: 'VariantProgress',
  components: {
    CCard,
    data,
  },
  data() {
    return {
      criticalPart: data.parts
        .filter((part) => part.stockMinute > 10)
        .map((part) => part)
        .sort((a, b) => a.stockMinute - b.stockMinute)
        .slice(0, 5),
    }
  },
  props: ['variantProgress'],
}
</script>
