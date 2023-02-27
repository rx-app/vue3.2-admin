<template>
    <el-menu
        active-text-color="#ffd04b"
        :background-color="variables.menuBg"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        router
      >
        <el-sub-menu :key="item.id" :index="item.id" v-for="(item,index) in menusList">
          <template #title>
            <el-icon>
                <component :is="iconList[index]"></component>
            </el-icon>
            <span>{{item.authName}}</span>
          </template>
          <el-menu-item @click="savepath(citem.path)"  :key="citem.id" v-for="(citem) in item.children"  :index="'/'+citem.path">
            <el-icon>
                <component :is="icon"></component>
            </el-icon>
            {{citem.authName}}
        </el-menu-item>
        </el-sub-menu>
        
    </el-menu>
</template>

<script setup>
import {menuList} from '@/api/menu'
import { ref } from 'vue'
import variables from '@/styles/variables.scss'

const iconList = ['user','setting','shop','tickets','pie-chart']
const icon = 'menu'
let defaultActive = ref( sessionStorage.getItem('path') || '/users')

const menusList = ref([])
const initMenuList = async ()=>{
    menusList.value = await menuList()
}

const savepath = (path)=>{
    sessionStorage.setItem('path',`/${path}`)
}
initMenuList()

</script>

<style lang="scss" scoped>

</style>