<template>
    <material-card color="success">
      <template v-slot:header>
        <div class="px-3">
          <div class="title font-weight-light mb-2"> Thông báo </div>
        </div>
      </template>
      <v-card-text>
        <v-timeline>
          <v-timeline-item icon="mdi-star" v-for="item in items" color="orange" large>
            <template v-slot:opposite >
              <v-chip>{{item.date}}</v-chip>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{item.work_name}}</v-card-title>
              <v-card-text>
                {{item.noidung}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </material-card>
</template>

<script>
  export default {
    data: () => ({
      items: {}
    }),
    created () {
      this.getItem ()
    },
    props: {
      listApi: {
        require: true,
        type: Function
      },
    },
    methods: {
      getItem () {
        this.listApi()
          .then(response => {
            this.items = response.data
          })
      }
    }
  }
</script>
