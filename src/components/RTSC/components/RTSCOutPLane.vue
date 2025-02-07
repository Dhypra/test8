<template>
  <CCard class="cCard cCardH">
    <div class="title">Out P-Lane</div>
    <CCardBody className="d-flex flex-row bT">
      <CCard class="cCard" className="col-6">
        <CCardBody className="d-flex flex-row bR">
          <CCard className="col-6 bR">
            <div class="title">P-Lane</div>
            <CCardBody>
              <CCardText className="fC cardA"> {{ pLane }} </CCardText>
            </CCardBody>
          </CCard>
          <CCard class="cCard" className="col-6">
            <div class="title">Counter</div>
            <CCardBody>
              <CCardText className="fC cardA"> {{ counter }} </CCardText>
            </CCardBody>
          </CCard>
        </CCardBody>
        <CCardFooter class="title footer" style="width: 50%"
          >{{ pLineTime }} Min left
        </CCardFooter>
      </CCard>
      <CCard class="cCard" className="col-6">
        <div class="title row zero border list">
          <div
            class="title"
            className="col-8 zero "
            style="background-color: #4cadab; height: 2.9rem"
          >
            Fill In
          </div>
          <div className="col-4 zero bG3">1/5</div>
        </div>

        <CCardBody class="p-0">
          <div class="title row zero border list">
            <div className="col-6 zero bG1">AIA</div>
            <div className="col-3 zero border-left-0 bG3">10</div>
            <div className="col-3 zero border-left-0 bG2">18</div>
          </div>

          <div class="title row zero border list">
            <div className="col-6 zero " style="background-color: navy">
              DSR
            </div>
            <div
              className="col-3 zero border-left-0"
              style="background-color: #ff3300"
            >
              10
            </div>
            <div
              className="col-3 zero border-left-0"
              style="background-color: #ff6600"
            >
              19
            </div>
          </div>

          <div class="title row zero border list">
            <div className="col-6 zero " style="background-color: navy">
              FTB
            </div>
            <div
              className="col-3 zero border-left-0"
              style="background-color: #ff3300"
            >
              10
            </div>
            <div
              className="col-3 zero border-left-0"
              style="background-color: #ff6600"
            >
              20
            </div>
          </div>

          <div class="title row zero border list">
            <div className="col-6 zero " style="background-color: navy">
              OTI
            </div>
            <div
              className="col-3 zero border-left-0"
              style="background-color: #ff3300"
            >
              10
            </div>
            <div
              className="col-3 zero border-left-0"
              style="background-color: #ff6600"
            >
              21
            </div>
          </div>

          <div class="title row zero border list">
            <div className="col-6 zero " style="background-color: navy">
              AIO
            </div>
            <div
              className="col-3 zero border-left-0"
              style="background-color: #ff3300"
            >
              11
            </div>
            <div
              className="col-3 zero border-left-0"
              style="background-color: #ff6600"
            >
              15
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CCardBody>
  </CCard>
</template>

<script>
import { CCard } from '@coreui/vue'

export default {
  name: 'OutPLane',
  props: {
    variantProgress: '',
    pLane: '',
    counter: '',
    pLineStd: '',
  },
}
</script>
