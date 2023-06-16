<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/frete">Frete</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "~bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 15px;
  background-color: #42b983;
  border: solid;
  

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
