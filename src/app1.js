import './app1.css';
import $ from 'jquery';

const view = {
  html: `
    <section id="app1">
      <div class="output">
        <span id="number">100</span>
      </div>
      <div class="actions">
        <button id="add1">+1</button>
        <button id="minus1">-1</button>
        <button id="mul2">*2</button>
        <button id="divide2">/2</button>
      </div>
    </section>
`,
  update() {
    // 将数据渲染到页面
    controller.ui.number.text(model.data.n || 100);
  },
//   将元素渲染到页面
  render() {
    const $element = $(view.html).appendTo($(`body > .page`));
  }
};

const model = {
  data: {
    // 始化数据
    n: localStorage.getItem('n')

  }
};

const controller = {
  init() {
    controller.ui = {
      button1: $('#add1'),
      button2: $('#minus1'),
      button3: $('#mul2'),
      button4: $('#divide2'),
      number: $('#number')
    };
    controller.bindEvents();
  },


  bindEvents() {
    // 绑定鼠标事件
    controller.ui.button1.on('click', () => {
      let n = parseInt(controller.ui.number.text());
      n += 1;
      localStorage.setItem('n', n);
      controller.ui.number.text(n);
    });
    controller.ui.button2.on('click', () => {
      let n = parseInt(controller.ui.number.text());
      n -= 1;
      localStorage.setItem('n', n);
      controller.ui.number.text(n);
    });
    controller.ui.button3.on('click', () => {
      let n = parseInt(controller.ui.number.text());
      n *= 2;
      localStorage.setItem('n', n);
      controller.ui.number.text(n);
    });
    controller.ui.button4.on('click', () => {
      let n = parseInt(controller.ui.number.text());
      n /= 2;
      localStorage.setItem('n', n);
      controller.ui.number.text(n);
    });
  }

};

// 第一次渲染html,将元素加载到页面里
view.render();
// 初始化，获取元素,并绑定事件
controller.init();

