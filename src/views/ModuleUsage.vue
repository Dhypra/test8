<template>
  <div class="bg">
    <div class="row head-module">
      <button
        class="col-2"
        :class="{ active: currentContent == 'FreshModule' }"
        @click="updateContent('FreshModule')"
      >
        Fresh module
      </button>
      <button
        class="col-2"
        :class="{ active: currentContent == 'Tapping' }"
        @click="updateContent('Tapping')"
      >
        Tapping
      </button>
      <button
        class="col-2"
        :class="{ active: currentContent == 'Overflow' }"
        @click="updateContent('Overflow')"
      >
        Overflow
      </button>
      <button
        class="col-2"
        :class="{ active: currentContent == 'Summary' }"
        @click="updateContent('Summary')"
      >
        Summary
      </button>
    </div>
    <component :is="currentContent" />
  </div>
</template>

<script>
import FreshModule from './FreshModule.vue'
import Tapping from './TappingModule.vue'
import Overflow from './OverflowModule.vue'
import Summary from '../components/RTSC/Summary.vue'
export default {
  components: {
    FreshModule,
    Tapping,
    Overflow,
    Summary,
  },
  data() {
    return {
      currentContent: 'FreshModule',
    }
  },
  methods: {
    updateContent(content) {
      let page = content
      this.currentContent = page
    },
  },
}
</script>

<style>
.bg {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  overflow: hidden;
}

.head-module button.active {
  color: white; /* Change text color to white for active button */
  background-color: orangered; /* Optional: Add a background color for active state */
}
.head-module {
  width: 100%;
  background-color: #999;
  height: 3rem;
  position: relative;
  left: 12px;
}
.head-module button {
  border: none;
  background-color: transparent;
}
.head-module button:hover {
  color: white;
}
</style>
