<template>
    <el-container class="app-wrapper">
        <el-aside :width="asideWidth" class="sidebar-container" >
            <Menu />
        </el-aside>
        <el-container class="container" :class="{hidderContainer:!$store.getters.siderType}">
            <el-header>
              <Headers></Headers>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import Menu from './Menu'
import Headers from './headers'
import variables from '@/styles/variables.scss'

import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const asideWidth = computed( ()=>{
    return store.getters.siderType ? variables.sideBarWidth : variables.hideSideBarWidth
} )


// const asideWidth = variables.sideBarWidth
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>