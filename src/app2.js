import $ from 'jquery';

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');
$tabBar.on('click', 'li', (e) => {
  // 获取子元素
  const $li = $(e.currentTarget);
  $li
    .addClass('selected')
    .siblings()
    .removeClass('selected');
  // 获取子元素在兄弟之间排行老几
  const index = $li.index();
  // 找到孩子 ，然后将index的孩子css变为
  $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active');
  // eq是等于的意思
});
// 找到111和222里面的索引为0的元素，触发click事件
$tabBar.children().eq(0).trigger('click')