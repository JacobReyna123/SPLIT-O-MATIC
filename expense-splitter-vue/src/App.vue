<script setup>
    import Header from './components/Header.vue'
    import Card from './components/Card.vue'
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

        <section>
            <h3>People</h3>
            <ul id="peopleList" class="list"></ul>
        </section>

        <section>
            <h3>Expenses</h3>
            <ul id ="expensesList" class="list"> </ul>
        </section>

        <section>
            <h3>Total</h3>
            <p>
                Total Spent: <strong id="totalSpent">$0.00</strong><br/>
                Split Per Person: <strong id="splitAmount">$0.00</strong><br/>

            </p>
        </section>

        <section class="summary">
            <h3>Summary</h3>
            <ul id="summaryList" class="list"></ul>
        </section>
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
</style>


