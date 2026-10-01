<script setup>
    import {ref, computed} from 'vue'
    import Header from './components/Header.vue'
    import Card from './components/Card.vue'
    import Section from './components/Section.vue';

    const people = ref([])
    const newPerson = ref ('')
    
    const addPerson = () => {
        const name = newPerson.value.trim()

        if(!name) return

        people.value.push(name)
        newPerson.value = ''
    }

const expenses = ref([])
const newExpense = ref ({
    desc:'',
    amount: 0,
    paidBy: ''
})

const addExpense = () => {
    const {desc, amount, paidBy} = newExpense.value

    if(!desc.trim || isNAN(parseFloat(amount)) || !paidBy) return

    expenses.value.push({
        desc: desc.trim(),
        amount: parseFloat(amount),
        Paidby
    })

    newExpense.value = {
        desc: '',
        amount: 0,
        paidBy:''
    }
}
</script>




<template>
    <Header/>
    <Card>
        <form id="personForm" class="rowform" @submit.prevent="addPerson">
            <input id="personInput" type="text" placeholder="Add person name" v-model="newPerson"/>
            <button>Add Person</button>
        </form>

        <form id="expenseForm" class="rowform" @submit.prevent="addExpense">
            <input id="descInput" type="text" placeholder="Expense Description" v-model="newExpense.desc"/>
            <input id="amountInput" type="number" placeholder="Amount" v-model="newExpense.amount"/>
            <select id="paidBySelect" v-model="newExpense.paidBy">
                <option v-for="person in people" :key="person" :value="person">{{ person }}</option>
                    
            </select>
            <button>Add Expense</button>
        </form>

        

    <Section title="People">
            <ul id="peopleList" class="list"></ul>
            <li v-for="person in people" :key="person">
                {{ person }}
            </li>
    </Section>

    <Section title="Expenses">
            <ul id ="expenseList" class="list"> 
            <li v-for="expense in expenses" :key="expense.paidBy">{{ expense.desc }} - ${{ expense.amount.toFixed(2) }} paid by {{ expense.paidBy }}</li>
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


