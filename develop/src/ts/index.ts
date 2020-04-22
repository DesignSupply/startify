'use strict';

import $ from 'jquery';
import moduleFunction from './modules/module';

console.log(moduleFunction('Hello World!!'));

$(function(){
  console.log('jQuery is ready.');
});