<template>
  <div>
    <div class="title">金渡教育后台管理</div>
    <ul>
      <li class="sidebar-list">
        <router-link to="/">
        <i class="iconfont iconshouye1"></i>
        <span>
          首页
        </span> 
        </router-link>
      </li>
      <li>
        <router-link to="/company">
          <i class="iconfont iconqiye"></i>
          <span>企业管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/finance">
          <i class="iconfont iconcaiwu"></i>
          <span>财务管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/product">
          <i class="iconfont iconchanpin"></i>
          <span>产品管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/order">
          <i class="iconfont iconorder-copy"></i>
          <span>订单管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/member">
          <i class="iconfont iconhuiyuan"></i>
          <span>管理会员</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data">
          <i class="iconfont iconshuju"></i>
          <span>数据概括</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>