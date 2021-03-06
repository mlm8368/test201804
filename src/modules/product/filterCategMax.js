import 'common/sass/mui.init.scss';
import './filterCategMax/style.scss';

import 'common/js/mui.init';
// import './filterCategMax/plusready';
import './filterCategMax/muiready';

import {updateProductListParams} from './js/global';

let $ = window.mui;

$('#list').on('tap', 'a', function(e) {
  let id = Number(this.dataset.id);
  document.querySelector('input[value="' + id + '"]').checked = 'checked';
  updateProductListParams({bigcatid: id, title_shop_categ: this.innerText});
  // do categmin function
  window.parent.window.document.getElementById('filterCategMin').contentWindow.loadCategList();

  if (id === 0) {
    updateProductListParams({catid: id});
    window.parent.window.resetMescrollPage('shop_categ');
  }
});

// do in maxCateg
window.loadCategList = function() {
  $.loadCategList();
};