<script setup>
 const props = defineProps({
    title:{
        type: String,
        default: 'Section'
    }
 })
</script>


<template>
    <section>
            <h3>{{ title }}</h3>
            <ul id="peopleList" class="list"></ul>
        </section>
    </template>