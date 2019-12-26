<template>
    <div id="app">
        <router-view  @authenticated="setAuthenticated" />
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authenticated: true,
      mockAccount: [
        { username: '1', password: '1', level1: '1' },
        { username: '2', password: '1', level2: '2' },
        { username: '3', password: '1', level3: '3' },
      ]
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
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
