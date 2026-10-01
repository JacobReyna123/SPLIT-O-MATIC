<script setup>
    import {ref, computed} from 'vue'
    import Header from './components/Header.vue'
    import Card from './components/Card.vue'
    import Section from './components/Section.vue';

    const people = ref(['John', 'Carlos'])
</script>


<template>
    <Header/>
    <Card>
        <form id="personForm" class="rowform">
            <input id="personInput" type="text" placeholder="Add person name"/>
            <button>Add Person</button>
        </form>

        <form id="expenseForm" class="rowform">
            <input id="descInput" type="text" placeholder="Expense Description"/>
            <input id="amountInput" type="number" placeholder="Amount"/>
            <select id="paidBySelect">
                
            </select>
            <button>Add Expense</button>
        </form>

    <Section title="People">
            <ul id="peopleList" class="list"></ul>
    </Section>

    <Section title="Expenses">
            <ul id ="expensesList" class="list"> 
            <li v-for="person in people" :key="person">
                {{ person }}
            </li>
        </ul>
    </Section>

     <Section title="Total">
            <p>
                Total Spent: <strong id="totalSpent">$0.00</strong><br/>
                Split Per Person: <strong id="splitAmount">$0.00</strong><br/>

            </p>
     </Section>

    <Section title="summary">
            <ul id="summaryList" class="list"></ul>
    </Section>
    </card>
  
</template>

<style scoped>
.rowform {
    display:flex;
    gap: 10px;
    margin-bottom: 12px;

}

input, select {
    flex: 1;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #c7d2fe;


}

button {
    padding: 10px 14px;
    border-radius: 10px;
    border: none;
    background: #00ff66;
    color: #0a0a0a;
    cursor: pointer;
}

.list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 8px;
}

.list li {
    padding: 10px;
    border-radius: 10px;
    background: #0f0f0f;
}

.summaryList li {
    background: #dcfce7;
    color: #00aa44;

}
</style>


