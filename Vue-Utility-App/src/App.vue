<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Utility App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="col-md-10">
      &nbsp;
    </div>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/calculator">Calculator</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/todo">
            To Do List</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Calendar</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  color: black;
}
</style>
