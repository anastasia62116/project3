<script setup>
import { reactive, computed, ref, watch, defineModel} from 'vue'
const habit = defineModel({default: {}})

const label = ref();

watch(() => {
    return {
        name: habit.value.name, 
        description: habit.value.description
    }
}, (newVal) => {
    label.value = '${newVal?.name} ${newVal?.description}'
}, {deep: true, immediate: true})

const postHabit = () => {
    return fetch('/habit', {
        method:'POST',
        body: JSON.stringify(habit.value),
        headers:{
            'accept': 'application/json',
            'content-type': 'application/json'
        }
    })
    .catch(error => console.error(error))
}

const putHabit = (id) => {
    return fetch('/habit' + id, {
        method:'PUT',
        body: JSON.stringify(habit.value),
        headers:{
            'accept': 'application/json',
            'content-type': 'application/json'
        }
    })
    .catch(error => console.error(error))
}

const submitHandler = () => {
    if(habit.value.id != null){
        putHabit(habit.value.id)
    }
    else{
        postHabit()
    }
}

</script>
<template>
    <div class="container">
        <form @submit.prevent="submitHandler">
            <h1>Трекер привычек</h1>
            {{ label }}
            <div>
                <label for="habit-name">Название привычки</label>
                <input v-model.trim="habit.name" id="habit-name"></input>
            </div>
            <br/>
            <div>
                <label for="description">Описание привычки</label>
                <textarea v-model.trim="habit.description" id="description"></textarea>
            </div>
            <br/>
            <div>
                <label for="frequency">Частота привычки</label>
                <select v-model.trim="habit.frequency" id="frequency">
                    <option :value="1">Каждый день</option>
                    <option :value="7">Раз в неделю</option>
                    <option :value="30">Раз в месяц</option>
                </select>
            </div>
            <br/>
            <div>
                <label for="count">Количество повторений </label>
                <input v-model.number ="habit.count" id="count" type="number"></input>
            </div>
            <br/>
            <div>Общее количество <span id="sum">{{sum}}</span></div><br/>
            <button type="submit">Сохранить</button>
        </form>
    </div>
</template>