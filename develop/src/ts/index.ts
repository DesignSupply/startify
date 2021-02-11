'use strict';

import $ from 'jquery';
import Vue from 'vue';
import moduleFunction from './modules/module';

console.log(moduleFunction('Hello World!'));

// legacy browser alert
const isLegacyIE = (): void | boolean => {
  const targetUserAgent: string = navigator.userAgent,
    notice: string = 'ご利用のウェブブラウザでは当サイトを正常に閲覧できません。ブラウザのバージョンを最新にして再度アクセスしてください。',
    targets: Array<string> = [ 
      'MSIE 6.0', // Internet Explorer 6
      'MSIE 7.0', // Internet Explorer 7
      'MSIE 8.0', // Internet Explorer 8
      'MSIE 9.0', // Internet Explorer 9
      'MSIE 10.0', // Internet Explorer 10
      'Trident/7.0' // Internet Explorer 11
    ];
    targets.forEach((target: string): void | boolean => {
    if(targetUserAgent.indexOf(target) != -1) {
      alert(notice);
    } else {
      return false;
    }
  });
};
isLegacyIE();

// jQuery
$(function() {
  console.log('jQuery is ready.');
});

// Vue.js
new Vue({
  el: '#app',
  data() {
    return {
      message: 'Vue.js is ready.'
    }
  },
  created() {
    (this as any).showMessage();
  },
  methods: {
    showMessage(): void {
      console.log((this as any).message);
    }
  }
})