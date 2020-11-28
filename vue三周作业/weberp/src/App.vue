<template>
  <div id="app" class="container">
    <div class="sidebar">
      <side-bar />
    </div>
    <div class="main">
      <div class="main-header fn-textcenter fn-marginright">
        <right-header />
      </div>
      <router-view />

      <div class="main-footer fn-textcenter">
        <right-footer />
      </div>
    </div>
  </div>
</template>

<script>
import RightHeader from "./components/RightHeader";
import RightFooter from './components/RightFooter'
import SideBar from "./components/SideBar";
export default {
  components: {
    RightFooter,
    RightHeader,
    SideBar,
  },
};
</script>
<style>
</style>
