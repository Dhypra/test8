<template>
  <div class="container" width="100%" style="text-align: center">
    <!-- <div>
      <h1 class="txt">Content</h1>
    </div> -->
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :freeMode="true"
      :watchSlidesProgress="true"
      ref="swiper"
      @slideChange="resetFlip"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="auto"
      :coverflowEffect="{
        rotate: 1,
        stretch: 10,
        depth: 100,
        modifier: 20,
        slideShadows: true,
      }"
      :pagination="paginationOptions"
      :navigation="true"
      :modules="modules"
      class="swiper_container mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="flip-card" @click="toggleFlip(index)">
          <div
            class="flip-card-inner"
            :class="{
              'flip-card-flipped': flippedIndex === index,
              blur: focusedIndex !== index,
            }"
          >
            <div class="flip-card-front">
              <div class="crd-img">
                <img :src="slide.image" style="height: 330px" alt="" />
              </div>
              <div class="crd-desc">
                {{ slide.desc }}
              </div>
            </div>
            <div
              class="flip-card-back text-center conteiner row"
              :class="{ hide: focusedIndex !== index }"
            >
              <div
                class="col-6 subCrd"
                v-for="(menu, index) in slide.menus"
                :key="index"
              >
                <a href="{{" menu.link }}>{{ menu.subMenu }}</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper/core'
SwiperCore.use([EffectCoverflow, Pagination])
import '@/views/index.css'
import 'swiper/css'
import 'swiper/css/navigation'

import kpi from '@/assets/icons/img_1.png'
import process from '@/assets/icons/process.png'
import kaizen from '@/assets/icons/kaizen.png'
import project from '@/assets/icons/project.png'
import hr from '@/assets/icons/hr.png'
import system from '@/assets/icons/system.png'
import pillar from '@/assets/icons/pillar.png'
import tools from '@/assets/icons/tools.png'

export default {
  name: 'HeroSlide',
  components: {
    Swiper,
    SwiperSlide,
  },
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Data for the Hero component
   *
   * @property {boolean} isFlipped - Whether the card is flipped (true) or not (false)
   * @property {string} frontContent - The content to display on the front side of the card
   * @property {string} backContent - The content to display on the back side of the card
   * @property {object[]} slides - An array of objects with the image, style, and description for each slide
   * @property {object} coverflowEffect - Configuration for the coverflow effect
   * @property {object} paginationOptions - Configuration for the pagination
   * @property {object} navigationOptions - Configuration for the navigation
   */
  /******  d6995026-64ce-455b-85ac-9aa39b3bcad5  *******/
  setup() {
    return {
      modules: [Pagination, Navigation],
    }
  },
  data() {
    return {
      focusedIndex: 0,
      isFlipped: false,
      flippedIndex: null,
      frontContent: 'Front Side Content',
      backContent: 'Back Side Content',
      slides: [
        {
          image: kpi,
          desc: 'KPI',
          menus: [
            {
              subMenu: 'Production Effeciency',
              link: '#/kpi/productionEffeciency',
            },
            { subMenu: 'RFID Perfomance', link: '#/kpi/rfidPerfomance' },
            { subMenu: 'Receiving Summary', link: '#/kpi/receivingSummary' },
            { subMenu: 'SPS Summary', link: '#/kpi/spsSummary' },
          ],
        },
        {
          image: process,
          desc: 'PROCESS',
          menus: [
            { subMenu: 'Receiving Area', link: '#/process/layoutReceiving' },
            { subMenu: 'SPS Area', link: '#/process/layoutSps' },
          ],
        },
        {
          image: kaizen,
          desc: 'KAIZEN',
          menus: [
            { subMenu: 'Major Improvement', link: '#/kaizen/majorImprovement' },
            {
              subMenu: 'Minor Improvement',
              link: '#/process/minorImprovement',
            },
          ],
        },
        {
          image: project,
          desc: 'PROJECT',
          menus: [{ subMenu: 'CAPEX', link: '#/project/capex' }],
        },
        {
          image: hr,
          desc: 'HR-DEV',
          menus: [
            { subMenu: 'People Dev', link: '#/hr/peopleDev' },
            { subMenu: 'QCC & SS', link: '#/hr/qccSs' },
          ],
        },
        {
          image: system,
          desc: 'SYSTEM',
          menus: [
            {
              subMenu: 'Real-Time Stock Monitoring',
              link: '/system/rtsm',
            },
            { subMenu: 'AMR', link: '#/system/amr' },
            { subMenu: 'RCS RFID', link: '/app/dashboard' },
          ],
        },
        {
          image: pillar,
          desc: '3 PILLAR',
          menus: [
            { subMenu: 'Safety & 4S', link: '#/pillar/safety4s' },
            {
              subMenu: 'Logistics Management',
              link: '#/pillar/logisticsManagement',
            },
            {
              subMenu: 'Standarization Work',
              link: '#/pillar/standarizationWork',
            },
            {
              subMenu: 'Ownership Maintenance',
              link: '#/pillar/ownershipMaintenance',
            },
          ],
        },
        {
          image: tools,
          desc: 'TOOLS',
          menus: [
            { subMenu: 'Meeting Board', link: '#/tools/meetingBoard' },
            { subMenu: 'Calculator', link: '#/tools/calculator' },
            { subMenu: 'Memo', link: '#/tools/memo' },
          ],
        },
        // Repeat for additional slides as needed
      ],

      paginationOptions: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigationOptions: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      },
    }
  },
  methods: {
    toggleFlip(index) {
      // If the clicked card is already flipped, flip it back; otherwise, flip the new one
      console.log(index)

      this.flippedIndex = this.flippedIndex === index ? null : index
    },

    resetFlip(swiper) {
      // Update focusedIndex to the current active index
      this.flippedIndex = null
      this.focusedIndex = swiper.realIndex
      console.log(this.focusedIndex)
    },
  },
}
</script>

<style scoped>
.slide-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.slide-button:hover {
  background-color: #0056b3;
}
</style>
