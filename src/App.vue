<template>
  <div class="main" id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/simpleform">SimpleForm</router-link> |
      <router-link to="/modalform">ModalForm</router-link> |
      <router-link to="/customform">CustomForm</router-link>
    </div>
    <router-view />
  </div>
  <footer></footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  font-size: 25px;
}
footer {
  margin-top: 60px;
  display: flex;
  height: 50px;
  width: 100%;
  position: fixed;
}
</style>
