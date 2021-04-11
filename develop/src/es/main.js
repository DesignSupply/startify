'use strict';

const $ = require('jQuery');
const Vue = require('vue');

// legacy IE browser alert
const isLegacyIE = () => {
  const currentUserAgent = navigator.userAgent,
    notice = 'ご利用のウェブブラウザでは当サイトを正常に閲覧できません。ブラウザのバージョンを最新にして再度アクセスしてください。',
    targets = [ 
      'MSIE 6.0', // Internet Explorer 6
      'MSIE 7.0', // Internet Explorer 7
      'MSIE 8.0', // Internet Explorer 8
      'MSIE 9.0', // Internet Explorer 9
      'MSIE 10.0', // Internet Explorer 10
      'Trident/7.0' // Internet Explorer 11
    ];
    Array.prototype.slice.call(targets).forEach((target) => {
    if(currentUserAgent.indexOf(target) !== -1) {
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
const vueModel = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Vue.js is ready.'
    }
  },
  created() {
    this.showMessage();
  },
  methods: {
    showMessage() {
      console.log(this.message);
    }
  }
});