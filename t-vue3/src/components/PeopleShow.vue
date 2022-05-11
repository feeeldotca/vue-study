<template>
<div>
 
    Name: <span>{{people.name}}</span>
    <hr/>
    Age: <span>{{people.age}}</span>
    <button @click="people.name += '~'">change name</button><br>
    <button @click="people.age++">change age</button>
</div>
   
</template>
<script>
import { reactive } from 'vue'
// interface People {
//     name: string,
//     age: number
// }
export default {
    name: 'PeopleShow',
    setup(){
    let people /*:People*/ = reactive({
        name: "Tom",
        age: 18
    })
    return {people}
    }
}
</script>