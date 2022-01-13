import empty from '../assets/empty.png';
const LazyLoad = {
  // install方法
  install(Vue) {
    Vue.directive('lazy', {
      bind(el, binding) {
        console.log('bind');
        LazyLoad.init(el, binding.value, empty);
      },
      inserted(el) {
        console.log('inserted');
        LazyLoad.observe(el);
      },
      unbind(el) {
        console.log('unbind');
        el.io.disconnect();
        el.io = null;
      }
    });
  },
  // 初始化
  init(el, val, def) {
    el.setAttribute('data-src', val);
    el.setAttribute('src', def);
  },
  // 利用IntersectionObserver监听el
  observe(el) {
    el.io = new IntersectionObserver(entries => {
      const realSrc = el.dataset.src;
      if (entries[0].isIntersecting) {
        if (realSrc) {
          setTimeout(() => {
            el.src = realSrc;
            el.removeAttribute('data-src');
          }, 1000);
        }
      }
    });
    el.io.observe(el);
  }
  // 监听scroll事件
  // listenerScroll(el) {
  //   el.handler = LazyLoad.throttle(LazyLoad.load.bind(null, el), 300);
  //   LazyLoad.load(el);
  //   window.addEventListener('scroll', el.handler);
  // },
  // 加载真实图片
  // load(el) {
  //   const windowHeight = document.documentElement.clientHeight;
  //   const elTop = el.getBoundingClientRect().top;
  //   const elBtm = el.getBoundingClientRect().bottom;
  //   const realSrc = el.dataset.src;
  //   if (elTop - windowHeight < 0 && elBtm > 0) {
  //     if (realSrc) {
  //       setTimeout(() => {
  //         el.src = realSrc;
  //         el.removeAttribute('data-src');
  //       }, 1000);
  //     }
  //   }
  // },
  // 节流
  // throttle(fn, delay) {
  //   let timer;
  //   let prevTime;
  //   return function(...args) {
  //     const currTime = Date.now();
  //     const context = this;
  //     if (!prevTime) prevTime = currTime;
  //     clearTimeout(timer);

  //     if (currTime - prevTime > delay) {
  //       prevTime = currTime;
  //       fn.apply(context, args);
  //       clearTimeout(timer);
  //       return;
  //     }

  //     timer = setTimeout(function() {
  //       prevTime = Date.now();
  //       timer = null;
  //       fn.apply(context, args);
  //     }, delay);
  //   };
  // }
};

export default LazyLoad;
