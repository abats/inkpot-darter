<template>
  <div id="app">
    <div class="dart-wrap">
      <header class="dart-header">Inkpot darter</header>
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

body{
  background-color: navajowhite;
   margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dart-wrap{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.dart-header, .dart-footer{
  height: 50px;
  font-size: 24px;
  text-transform: uppercase;
  color: #484646;
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
