<template>
  <div id="app" class="index-content">
    <div class="footer-lists fn-textcenter">
      <div class="footer-bottom">
        <ul>
          <li>
            <router-link to="/">
              <i class="iconfont iconhuaban"></i>
              <span>金渡小镇</span>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <i class="iconfont iconhi"></i>
              <span>金渡生活</span>
            </router-link>
          </li>
          <li>
            <i class="iconfont iconicon-"></i>
            <span>订单</span>
          </li>
          <li>
            <i class="iconfont icongeren"></i>
            <span>我的</span>
          </li>
        </ul>
      </div>
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<style>
@import './assets/css/index.css';
</style>
