import './app3.css';
import $ from 'jquery';

const html = `
    <section id="app3">
      <div class="square">
      </div>
    </section>
`
const $element = $(html).appendTo($(`body>.page`))

const $square = $('#app3 .square');
const localKey = 'app3.active'
// yes no undefined
const active = localStorage.getItem(localKey) === 'yes';

// if(active){
//   $square.addClass('active')
// }else{
//   $square.removeClass('active')
// }

$square.toggleClass('active', active);
$square.on('click', () => {
  if ($square.hasClass('active')) {
    $square.removeClass('active');
    localStorage.setItem(localKey, 'no');
  } else {
    $square.addClass('active');
    localStorage.setItem('app3.active', 'yes');
  }
  // toggleClass 有就加上，没有就删去
  // $square.toggleClass('active')
});