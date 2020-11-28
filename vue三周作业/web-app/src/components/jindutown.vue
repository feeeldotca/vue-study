<template>
  <div class="home">
    <carousel />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import carousel from './carousel.vue'

export default Vue.extend({
  name: 'jindutown',
  components: {
    carousel
  }
})
</script>
