<template>
    <div class="cCard cCardH">
      <div class="title">Stock Chart</div>
  
      <CCardBody>
        <CCard class="cCard chartPline">
          <div class="title">P-Lane</div>
          <CCardBody
            className="chartCard d-flex flex-row bT"
          >
            <CCard className="col-6 bR fC cardA"> {{ pLane }} </CCard>
            <CCard className="col-6 fC cardA" > {{ counter }} </CCard>
          </CCardBody>
        </CCard>
        <CCardText>
          <div id="chart"></div>
        </CCardText>
      </CCardBody>
    </div>
  </template>
  
  <script>
  import { CCard, CCardHeader, CCardBody, CCardText } from '@coreui/vue'
  import ApexCharts from 'apexcharts'
  import '@/components/RTSC/components/rtsc.css'
  
  export default {
    name: 'StockChartImport',
    component: { ApexCharts, CCard, CCardHeader, CCardBody, CCardText },
    props: {
      chartTitle: String,
      col1Name: '',
      col2Name: '',
      col3Name: '',
      col1Val: '',
      col2Val: '',
      col3Val: '',
      pLane: '',
      counter: '',
    },
    mounted() {
      var options = {
        chart: {
          type: 'bar',
          height: '270vh', // Set the height
          width: '75%', // Set the width
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
  }
  </script>
  
  <style></style>
  