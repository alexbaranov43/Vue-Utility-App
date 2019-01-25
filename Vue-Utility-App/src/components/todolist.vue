<template>
  <div align="center">
    <div class="row">
      &nbsp;
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="well">
          <h2>Managing Your Busy Schedule Here</h2>
          <form>
            <div class="form-group">
              <label for="todoitem">List Item</label>
              <input type="text" v-model="input" class="form-input" id="todoitem" placeholder="Enter Your List Item" />
            </div>
            <button type="button" @click="add()" class="btn btn-defalt">Add to list</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h2>
          Task Manager
        </h2>
        <ul class="list-group">
          <li v-for="(todo, index) in todos" :key="index" class="list-group-item">
            {{ index + 1}}: {{ todo }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      todos: [],
      input: ''
    }
  },
  methods: {
    add () {
      this.todos.push(this.input)
      this.input = ''
    }
  }
}
</script>

<style scoped>

</style>
