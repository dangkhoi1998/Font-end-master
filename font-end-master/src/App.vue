<template>
    <div id="app">
        <router-view  @authenticated="setAuthenticated" />
    </div>
</template>

<script>
import { getLogin } from './api/Login/Getlogin'
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      authenticated: true,
      mockAccount: []
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  created () {
    this.getlogin()
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    },
    getlogin () {
      getLogin()
       .then(response => {
         this.mockAccount = response.data
       })
    }
  },
}
</script>

<style> 
  @import "styles/loading.scss";
  v-menu .v-text-field {
   background: red!important;
 }
</style>
