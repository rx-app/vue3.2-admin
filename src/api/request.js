import { diffTokenTime } from '@/utils/auth'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'

const service  = axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000
})

service.interceptors.request.use(config=>{
    if(localStorage.getItem('token') ){
        if(  diffTokenTime() ){
            store.commit('app/clearToken')
            return Promise.reject(new Error('token失效了'))
            // throw new Errow('token失效了')
        }
    }
    
    config.headers.Authorization = localStorage.getItem('token')
    return config
},error=>{
    return Promise.reject(new Error(error))
})

service.interceptors.response.use( response=>{
    const {data,meta} = response.data
    if(meta.status === 200 || meta.status === 201){
        return data
    }else{
        ElMessage.error(meta.msg)
        return Promise.reject( new Error(meta.msg) )
    }
},error=>{
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
} )

export default service