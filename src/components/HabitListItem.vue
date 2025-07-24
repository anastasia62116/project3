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
            Каждый день 
        </template>
        <template v-else-if="item.frequency === 7"> 
            Раз в неделю 
        </template>
        <template v-else-if="item.frequency === 30">
            Ежемесячно
        </template>
    </p>
        <button @click.stop="$emit('click:delete')"> Удалить 
        </button>
</li>
</template>