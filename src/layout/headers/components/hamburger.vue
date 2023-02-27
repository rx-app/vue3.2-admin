<template>
    <div class="hamburger-container" @click="toggleClick">
        <svg-icon :icon="icon"></svg-icon>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const toggleClick = ()=>{
    store.commit('app/changesiderType')
}

const icon = computed( ()=>{
    let r = store.getters.siderType
    // let r = store.state.app.siderType
    return r?'hamburger-opened':'hamburger-closed'
} )
</script>

<style lang="scss" scoped>
.hamburger-container{
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
}
</style>