
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// // import VueHighlightJS from 'vue-highlight.js';
// //这里样式我选择的是atom-one-light；样式更多选择可以参见 https://highlightjs.org/static/demo/ 里的styles
// //注意： 代码块的背景色 还是由官方设置的 $codeBgColor 决定的
// // import 'highlight.js/styles/vs2015.css';
export default ({ Vue, options, router }) => {
  Vue.use(Element);
  // Vue.use(VueHighlightJS)
};
