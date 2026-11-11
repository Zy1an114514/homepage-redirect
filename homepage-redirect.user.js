// ==UserScript==
// @name         干掉主页：B站→动态，YouTube→订阅
// @namespace    https://github.com/Zy1an114514
// @version      1.0.0
// @description  打开 B站 / YouTube 主页时自动跳转到动态页 / 订阅页，不再被推荐流里的短视频分散注意力
// @author       Zy1an114514
// @homepageURL  https://github.com/Zy1an114514/homepage-redirect
// @downloadURL  https://raw.githubusercontent.com/Zy1an114514/homepage-redirect/main/homepage-redirect.user.js
// @updateURL    https://raw.githubusercontent.com/Zy1an114514/homepage-redirect/main/homepage-redirect.user.js
// @match        https://www.bilibili.com/*
// @match        https://www.youtube.com/*
// @run-at       document-start
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  const go = () => {
    // 只拦截主页（根路径），视频页、搜索、个人空间等都不受影响
    if (location.pathname !== '/') return;
    if (location.host === 'www.bilibili.com') location.replace('https://t.bilibili.com/');
    if (location.host === 'www.youtube.com') location.replace('https://www.youtube.com/feed/subscriptions');
  };

  go();
  // YouTube 是单页应用，点左上角 logo 不会重新加载页面，所以要额外监听它的导航事件
  window.addEventListener('yt-navigate-finish', go);
})();
