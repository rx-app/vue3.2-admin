export default {
    token: (state) => {
        
        let r = state.app.token
        console.log(r)
       return state.app.token
    },
    siderType:state=>state.app.siderType
}