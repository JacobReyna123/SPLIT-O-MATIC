<template>
    <main class="card">
        <slot/>
    </main>
</template>

<style scoped>
.card {
    width: min(600 px,100%);
    background: #474747;
    padding: 18px;
    border-radius: 16px;
    box-shadow: 0 10px 24px rgb(79, 70, 229, 0.2);
}
</style>