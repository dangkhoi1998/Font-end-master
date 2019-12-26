<template>
  <transition
      appear
      enter-class=""
      enter-active-class="animated fadeInLeftBig">
    <material-card color="orange" title="List công việc">
      <v-expansion-panels popout>
        <v-expansion-panel v-for="(message, i) in messages" :key="i" hide-actions>
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="2" sm="2" md="1" class="mx-0 px-0">
                <v-avatar size="36px">
                  <v-icon color="blue" size="52">arrow_right</v-icon>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="7" md="7">
                <strong v-html="message.work_name"></strong>
              </v-col>

              <v-col class="text-right" cols="5" sm="4" >
                <v-chip color="lighten-4" v-for="item in message.id_empl" :key="item" class="ml-1" label small >
                  <v-icon left color="blue">mdi-account</v-icon>{{item}}
                </v-chip>
              </v-col>

            </v-row>
          </v-expansion-panel-header>
          
          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text>{{message.noidung}}</v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </material-card>
  </transition>
</template>
<script>
  export default {
    data: () => ({
      messages: {},
    }),
    created () {
      this.getItem()
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
            this.messages=response.data
          })
      }
    }
  }
</script>
