import './app2.css';
import $ from 'jquery';

const html = `    <section id="app2">
      <ol class="tab-bar">
        <li><span>111</span></li>
        <li><span>2222</span></li>
      </ol>
      <ol class="tab-content">
        <li>内容1</li>
        <li>内容2</li>
      </ol>
    </section>
`
const $element = $(html).appendTo($(`body>.page`))

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');
const index =localStorage.getItem('app2.index') || 0
$tabBar.on('click', 'li', (e) => {
  // 获取子元素
  const $li = $(e.currentTarget);
  $li
    .addClass('selected')
    .siblings()
    .removeClass('selected');
  // 获取子元素在兄弟之间排行老几
  const index = $li.index();
  localStorage.setItem('app2.index',index)
  // 找到孩子 ，然后将index的孩子css变为
  $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active');
  // eq是等于的意思
});
// 找到111和222里面的索引为0的元素，触发click事件
$tabBar.children().eq(index).trigger('click')