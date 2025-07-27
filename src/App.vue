<!--
<script setup>
import HabitForm from './components/HabitForm.vue'
</script>

<template>
  <HabitForm msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

ИЛИ           ИЛИ           ИЛИ           ИЛИ           ИЛИ           ИЛИ           ИЛИ 
-->

<script setup>
import { ref } from 'vue';
import HabitForm from './components/HabitForm.vue'
import HabitList from './components/HabitList.vue'
import HabitListItem from './components/HabitListItem.vue'

const currentHabit = ref();
</script>

<template>
    <HabitForm v-model="currentHabit"></HabitForm>
    <HabitList @select:habit="currentHabit = $event">
    </HabitList>
</template>