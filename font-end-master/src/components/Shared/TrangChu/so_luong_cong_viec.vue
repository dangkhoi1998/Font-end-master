<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" lg="4" class="my-0 py-0" v-for="item in material">
        <material-stats-card
          :color="item.color"
          :icon="item.icon"
          :title="item.title"
          :value="item.value"/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      material: {
        require: true,
        type: Array,
        default: null
      },
    }
  }
</script>