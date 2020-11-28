<template>
  <div>
    <div class="banner">
      <img v-for="(v, i) in imgs" :key="i" :src="v" v-show="i==cur" />
      <div class="banner-circle">
        <ul>
          <li v-for="(v,i) in imgs" :key="i" :class="{'selected':cur==i}"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      imgs: [
        require('../assets/images/1.jpg'),
        require('@/assets/images/2.jpg')
      ],
      cur: 0
    }
  },
  mounted: function () {
    this.autoPlay()
  },
  methods: {
    autoPlay () {
      setInterval(this.play, 2000)
    },
    play () {
      this.cur++
      if (this.cur === this.imgs.length) {
        this.cur = 0
      }
    }
  }
}
</script>

<style scoped>
</style>
