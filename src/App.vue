<template>
  <div id="app">
    <a class="a">全局sass</a>
    <div id="nav">
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/collapse">Collapse</router-link> | 
      <router-link to="/pop">Pop</router-link> |
      <router-link to="/button">Button</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
.a{
  @include fontColor
}
body {
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: #515a6e;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
