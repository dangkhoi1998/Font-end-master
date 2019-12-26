<template>
  <v-content class="grey lighten-3 " style="padding-top:54px;">
    <div id="core-view" class="mx-2" style="margin-bottom: 100px">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
  export default {
    name: 'CoreView',

    metaInfo () {
      return {
        title: 'Vue Material Dashboard by CreativeTim'
      }
    }
  }
</script>
 <style>
  .container .lighten-3 {
    width: 100%!important;
  } 
</style>
