<template>
  <!--<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>-->
  <div class="App container">
    <nav class="navbar navbar-expand-md bg-light navbar-light">
      <a class="navbar-brand" href="/">
        <img class="img-fluid" alt="Canon Logo" src="./assets/canon_main_logo.gif">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link> </li>
          <li class="nav-item"><router-link class="nav-link" to="/lookup">Lookup</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/parts">Parts</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <!--<li class="nav-item"><router-link class="nav-link" to="/">Lookup</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/home">Parts</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/warehouse">Warehouse Inventory</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/topics">Topics</router-link></li>-->
        </ul>
      </div>
    </nav>

    <!--{/*<p class="App-intro">v 0.11.0</p>*/}
    {this.props.children}-->
    <router-view/>
  </div>

</template>

<style lang="scss">

  .App {
    text-align: center;
  }

  .form-control-label{
    text-align: right;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }

  .form-control-plaintext{
    text-align: left;
  }

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40px;
  }

  .App-header {
    background-color: #222;
    height: 5rem;
    padding: 1rem;
    color: white;
  }

  .App-title {
    font-size: 1em;
  }

  .App-intro {
    font-size: large;
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

</style>
