import store from '@/store'
import router from './index'

const whiteList = ['/login']
router.beforeEach( (to,from,next)=>{
    
    let r = store.getters.token
    console.log(r)
    if(store.getters.token){
        if(to.path === 'login'){
            next('/')
        }else{
            next()
        }
    }else{
        if(whiteList.includes(to.path)){
            next()
        }else{
            next('/login')
        }
    }
} )