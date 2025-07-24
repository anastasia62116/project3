<script setup>
import { reactive, onMounted } from 'vue';
import HabitListItem from './HabitListItem.vue'
import { errorMessages } from 'vue/compiler-sfc';

const emits = defineEmits({
    'select:habit' : (ev) => {}
});

const habitList = reactive([
{
    name: 'Бег',
    description: 'Бег 3 км в 7:00',
    frequency: 1, 
    count:360,
},
{
    name: 'Бега',
    description: 'Бег 3 км в 7:00',
    frequency: 1, 
    count:360,
}
]);
const fetchHabits = async ()=> {
    habitList.length = 0;
    try{
    const response = await fetch('habit')
    const json = await response.json()
    habitList.push(...json)
    }
    catch(error){
        console.error(error)
    }
}

onMounted(() => {
    fetchHabits()
});

const deleteHandler = async (toDelete) => {
    try{
        const response = await fetch(`/habit/` + toDelete.id, {
            method: "DELETE",
            headers:{
                'comtent-type': 'application/json'
            }
        });
        if(!response.ok){
            throw response.status + await response.text()
        }
    }catch(err){
        console.error(err)
    }
}

</script>
<template>
<ul class="list">
    <HabitListItem v-for="(item, idx) in habitList" 
    :item="item" 
    :key="idx" 
    class="list-item">
    @click="$emit('select:habit', {..item})"
    @click:delite="deliteHendler(idx)" >
    <button @click.stop="deleteHandler(item)">
        Удалить
    </button>
    </HabitListItem>
</ul>
</template>
<style>
.list{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
}

.list-item{
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    margin: 10px;
    list-style: none;
}

.list-item:hover {
    cursor: pointer;
    background-color: #6c150f50;
}
</style>