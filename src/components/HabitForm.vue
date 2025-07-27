<script setup>
import { reactive, computed, ref, watch, watchEffect, defineModel } from 'vue';

const habit = defineModel({default:{
    //name: '',
    //description: '',
    //frequency: 0,
    //count: 0
}});
const shortName = ref('');

const sum = computed(() => habit.value.count * habit.value.frequency)
watchEffect(() => {
    shortName.value = `${habit.value.name} ${habit.value.description}`
})

const shortObject = ref('');

watch(() => [habit.value.name, habit.value.description],
    (newVal, oldVal) => {
        shortObject.value = newVal;
    }, {flush: 'post', deep: true, immediate: true
    })
console.log(habit.value);
</script>
<template>
    <div class="container">
            <h1>Форма регистрации на мероприятие</h1>
            <form onsubmit="alert('Сохранение'); console.log('foo')">
                <div>
                    <label for="habit-name">Название проекта</label>
                    <input id="habit-name" name="habit-name" type="text" required v-model="habit.name"></input>
                </div>
            <br/>
                <div><label for="description">Описание проекта</label> <textarea id="description" required v-model.trim="habit.description"></textarea></div><br/>
                <div><label for="frequency">Выберите день, который примете участие</label> <select id="frequency" required v-model.number="habit.frequency">
                    <option value="1">01.09.2025</option>
                    <option value="2">02.09.2025</option>
                    <option value="3">03.09.2025</option>
                </select></div><br/>
                <button type="submit">Сохранить</button>
            </form>
    </div>
</template>
