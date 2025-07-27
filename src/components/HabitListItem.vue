<script setup>
import { defineProps } from 'vue'
    const props = defineProps({
        item: {
            habit: Object,
            require: true,
        }
    });

const emit =defineEmits({
    'click:habit'(ev){}
});
</script>
<template>
<li>
    <div v-text="item.name"></div>
    <div v-text="item.description"></div>
    <div v-text="item.count"></div>
    <p>
        <template v-if="item.frequency === 1"> 
            01.09.2025 
        </template>
        <template v-else-if="item.frequency === 2"> 
            02.09.2025 
        </template>
        <template v-else-if="item.frequency === 3">
            03.09.2025
        </template>

    </p>
        <button @click.stop="$emit('click:delete')"> Удалить 
        </button>
</li>
</template>