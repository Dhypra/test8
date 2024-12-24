<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="
      (event) =>
        $store.commit({
          type: 'updateSidebarVisible',
          value: event,
        })
    "
  >
    <CSidebarBrand>
      <img
        src="../assets/brand/Toyota_logo.png"
        class="img-fluid sidebar-brand-full"
        width="200"
        height="200"
      />
      <img
        src="../assets/brand/Toyota_logo.png"
        class="sidebar-brand-narrow"
        width="36"
        height="10"
      />
    </CSidebarBrand>
    <AppSidebarNav v-bind:nav="nav" />
    <CSidebarToggler
      id="SidebarToggler"
      class="d-none d-lg-flex"
      @click="$store.commit('toggleUnfoldable')"
    />
  </CSidebar>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from '@/standalone/assets/brand/logo-negative'
import { sygnet } from '@/standalone/assets/brand/sygnet'

export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
  },
  data() {
    return {
      nav: [
        {
          component: 'CNavItem',
          name: 'Home',
          to: '/app/dashboard',
          icon: 'cilHome',
        },
        {
          component: 'CNavItem',
          name: 'SPS',
          to: '/app/andon/sps',
          icon: 'cilFolder',
        },
        {
          component: 'CNavItem',
          name: 'P-Line',
          to: '/app/andon/pline',
          icon: 'cilStar',
        },
        {
          component: 'CNavItem',
          name: 'Import Part',
          to: '/app/andon/importpart',
          icon: 'cilBoatAlt',
        },
        {
          component: 'CNavGroup', // Group for Summary with a submenu
          name: 'Module Unpacking',
          icon: 'cilInbox',
          items: [
            {
              component: 'CNavItem',
              name: 'Summary',
              to: '/app/summary',
              icon: 'cilWindow',
            },
            {
              component: 'CNavItem',
              name: 'Unpacking',
              icon: 'cilBasket',
              to: '/app/unpacking',
            },
            {
              component: 'CNavItem',
              name: 'Management O/F',
              icon: 'cilBasket',
              to: '/app/managementOF',
            },
          ],
        },
      ],
    }
  },
  setup() {
    const store = useStore()
    return {
      logoNegative,
      sygnet,
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },
}
</script>
