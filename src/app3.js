import './app3.css'
import $ from 'jquery'

const $square =$('#app3 .square')

$square.on('click',()=>{
  // toggleClass 有就加上，没有就删去
  $square.toggleClass('active')
})