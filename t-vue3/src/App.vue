<script lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
// import fetchCount from './fetchCount'
import PeopleShow from './components/PeopleShow.vue'
interface AppInfo {
  appName: string,
  slogan: string
}
export default{
  name: 'App',
  components: {PeopleShow},
  setup(){

  let count =  ref(0)

  const appInfo:AppInfo = reactive ({
    appName: 'Counter',
    slogan: 'This is a good setup app you can try'
  })
  return {
    count,
    appInfo
  }
/*
onMounted(()=>{
  fetchCount((initialCount:number)=>{
    count.value = initialCount
  })
})*/
// function addOne(num: number){
//     if(count.value!==null){
//     count.value += num
//   } 
// }
  }
  }
</script>
<template>
  <div>
    <h1>{{ appInfo.appName }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
  <p>{{ count }}</p>
  <button @click="count++">Count+1</button>
<hr/>
<people-show/>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
