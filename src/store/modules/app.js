import {login as loginApi} from '@/api/login'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'

export default{
    namespaced:true,
    state:()=> {
        
       return{
        token:localStorage.getItem('token') || ''
       } 
    },
    mutations: {
        setToken(state,token){
            state.token = token
            localStorage.setItem('token',token)
            setTokenTime()
        },
        clearToken(state){
            state.token = ''
            localStorage.setItem('token','')
        }
    },
    actions: {
        login( {commit},userInfo ){
            return new Promise( (resolve,reject)=>{
                loginApi(userInfo).then(res=>{
                    console.log('res',res)
                    commit('setToken',res.token)
                    router.replace('/')
                    resolve()
                }).catch(err=>{
                    reject(err)
                })
            } )
        },
        logout({commit},userInfo){
            co
        }
    },
}