import SvgIcon from '@/components/SvgIcon'

const svgRequired = require.context('./svg',false,/\.svg$/)
svgRequired.keys().forEach( item=>{
   return svgRequired(item)
} )


export default (app)=>{
    app.component('svg-icon',SvgIcon)
}