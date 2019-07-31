<template>
  <div id="app">
    <div class="dart-wrap">

      <header class="dart-header">
        Inkpot darter
        <nav class="nav">
          <router-link to="/darts301">301</router-link> |
          <router-link to="/cricket">Cricket</router-link>
        </nav>
      </header>

      <section class="dart-content">
        <div class="dart-columns">
          <div class="dart-main">
            <router-view/>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style>

html, body {
  height: 100%;
  background-color: navajowhite;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.nav {
  float: left;
  margin-left: 50px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.dart-wrap{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.dart-header{
  font-size: 22px;
  text-transform: uppercase;
  color: #484646;
  padding-top: 10px;
}

.dart-content {
  flex: 1;
  display: flex;
  color: #000;
}

.dart-columns{
  display: flex;
  flex: 1;
}

.dart-main{
  flex: 1;
}

</style>
