<script setup>
    import Header from './components/Header.vue'
    </script>

<template>
    <Header/>
    <main class="card">
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
    </main>
  
</template>


