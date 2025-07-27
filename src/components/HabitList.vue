<script setup>
import { reactive, onMounted } from 'vue';
import HabitListItem from './HabitListItem.vue';

const habitList = reactive([
    {
        name: 'Run',
        description: '3 km 7:00',
        frequency: 1,
        count: 365,
    },
    {
        name: 'Jump',
        description: '7:00',
        frequency: 1,
        count: 365,
    }
]);

const emits = defineEmits({
    'select:habit': (ev) => {}
});

const fetchHabits = async() => {
    habitList.length = 0;
    try{
        const response = await fetch('/habit');
        const json = await response.json();
        habitList.push(...json);}
    catch(error){
        console.error(error)
    }
}

onMounted(() => {
    fetchHabits()
});

const deleteHandler = (idx) => {
    habitList.splice(idx, 1);
};

</script>
<template>
    <ul class="list">
        <HabitListItem v-for="(item, idx) in habitList" 
        :item="item" 
        :key="idx" 
        class="list-item" 
        @click="$emits('select:habit', item)"
        @click:delete="deleteHandler(idx)">
        </HabitListItem>
    </ul>

</template>

<style>
.list{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.list-item{
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 1rem;
    margin: 10px;
    list-style: none;
}
.list-item:hover{
    cursor: pointer;
    background-color: cadetblue;
}
</style>
