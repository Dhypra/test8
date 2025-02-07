<template>
  <div>
    <MostCriticalPart />
  </div>
</template>

<script>
import ConditionStock from '@/components/RTSC/components/ConditionStock.vue'
import MostCriticalPart from '@/components/RTSC/components/RTSCCriticalPart.vue'

export default {
  name: 'home',
  component: {
    MostCriticalPart,
  },
}
</script>
