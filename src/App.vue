<template>
  <div class="container">
    <section class="section">
    <input type="text" v-model="message" @keypress.enter="addItem">
    <button class="button is-success"@click="addItem">Add</button>
    <item-list title="All Items" :items="items"></item-list>
    <item-list title="Done Items" :items="doneItems"></item-list>
    <item-list title="To Do Items" :items="toDoItems"></item-list>
    </section>
  </div>
</template>

<script>
import ItemList from "./components/ItemList";
export default {
  name: "App",
  components: {ItemList},
  data(){
    return{
      message: '',
      items: [
        {name: 'Leib', isDone: false, id: 0},
        {name: 'Sai', isDone: true , id: 1},
        {name: 'Liha', isDone: false, id: 2},
      ]
    }

  },
  methods: {
    addItem(){
      if(this.message.trim() !== '') {
        this.items.push({name: this.message, isDone: false, id: this.items.length});
        this.message = '';
      }
    }
  },
  computed: {
    reversedMessage(){
      return this.message.split('').reverse().join('');
    },
    doneItems(){
      return this.items.filter(item => item.isDone)
    },
    toDoItems(){
      return this.items.filter(item => !item.isDone)
    }
  }
}
</script>

<style scoped>

</style>